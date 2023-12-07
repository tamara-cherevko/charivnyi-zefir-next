import { IProduct } from '@/interfaces/product/interface'
import db from '../../lib/mysql'
import { NextApiRequest, NextApiResponse } from 'next'
import { RowDataPacket } from 'mysql2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = `
      SELECT 
      p.*, 
      c.id as category_id, 
      c.title as category_title, 
      pi.image, 
      pi.position as image_position
      FROM products p
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      LEFT JOIN products_images pi ON p.id = pi.product_id
    `

    const [rows] = await db.query<RowDataPacket[]>(query)

    const products = rows.reduce((acc: { [key: number]: any }, row) => {
      if (!acc[row.id]) {
        acc[row.id] = {
          ...row,
          categories: row.category_id ? [{ id: row.category_id, title: row.category_title }] : [],
          images: row.image ? [{ position: row.image_position, image: row.image }] : [],
        }
      } else {
        if (row.category_id && !acc[row.id].categories.some((cat: any) => cat.id === row.category_id)) {
          acc[row.id].categories.push({ id: row.category_id, title: row.category_title })
        }
        if (row.image && !acc[row.id].images.includes(row.image)) {
          acc[row.id].images.push({ position: row.image_position, image: row.image })
        }
      }
      return acc
    }, {})

    res.status(200).json(Object.values(products))
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
