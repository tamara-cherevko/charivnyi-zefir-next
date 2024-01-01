import db from '../../lib/mysql'

export default async function handler(req: any, res: any) {
  const { id } = req.query

  try {
    const query = `SELECT pm.product_id, pm.modifier_id, m.title, m.description, m.image 
    FROM products_modifiers AS pm
    JOIN modifiers AS m ON pm.modifier_id = m.id
    WHERE pm.group_id = (SELECT group_id FROM products_modifiers WHERE product_id = ?);
  `
    const [rows] = await db.query(query, [id])
    console.log('Query Result:', rows)
    res.status(200).json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
