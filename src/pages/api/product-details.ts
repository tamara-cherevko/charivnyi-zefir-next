import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/mysql'
import { RowDataPacket } from 'mysql2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: 'Invalid product ID' })
  }

  try {
    const query = `
      SELECT 
        p.*,
        d.title as delivery_option_title,
        c.id as category_id, 
        c.title as category_title,
        pi.image, 
        pi.position as image_position, 
        i.title as ingredient_title
      FROM products p
      LEFT JOIN product_delivery_options d ON d.id = p.delivery_option_id
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      LEFT JOIN products_images pi ON p.id = pi.product_id 
      LEFT JOIN products_ingredients pi2 ON p.id = pi2.product_id
      LEFT JOIN ingredients i ON pi2.ingredient_id = i.id
      WHERE p.id = ?
    `

    const [rows] = await db.query<RowDataPacket[]>(query, [id])

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    const product = rows.reduce((acc, row) => {
      if (!acc.id) {
        acc = {
          ...row,
          categories: [],
          images: [],
          ingredients: [],
        }
      }

      // Add unique categories
      if (row.category_id && !acc.categories.some((cat) => cat.id === row.category_id)) {
        acc.categories.push({
          id: row.category_id,
          title: row.category_title,
        })
      }

      // Add unique images
      if (row.image && !acc.images.some((img) => img.image === row.image)) {
        acc.images.push({
          position: row.image_position,
          image: row.image,
        })
      }

      // Add unique ingredients
      if (row.ingredient_title && !acc.ingredients.includes(row.ingredient_title)) {
        acc.ingredients.push(row.ingredient_title)
      }

      return acc
    }, {})

    res.status(200).json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
