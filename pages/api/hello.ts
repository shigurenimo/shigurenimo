import { NextApiHandler } from 'next'

type Data = { name: string }

const handler: NextApiHandler<Data> = (req, res) => {
  res.statusCode = 200

  return res.json({ name: 'John Doe' })
}

export default handler
