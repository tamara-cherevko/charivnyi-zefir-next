import db from '../../lib/mysql'

export default async function handler(req: any, res: any) {
  try {
    const query = 'SELECT * FROM categories'
    const [rows] = await db.query(query)
    res.status(200).json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
