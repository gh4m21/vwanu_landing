import axios from 'axios'

export default function handler(req, res) {
  axios
    .post('http://159.223.144.200:4004/tester', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      res.status(200).json({ message: 'Success', data: data.data })
    })
    .catch((err) => {
      console.log('err', err)
      if (err?.response?.status === 401) {
        res.status(401).json({ message: 'Error', data: err?.response?.data })
      } else {
        res.status(500).json({ message: 'Error', data: err?.response?.data })
      }
    })
}
