import axios from 'axios'

export default async (req, res) => {
  const {data} = await axios.get('http://80.78.240.109:3001/api/')
  res.status(200).json(data)
}
