const express = require('express')
const next = require('next')
const sendinblue = require('./pages/api/sendinblue')
const axios = require('axios')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

    server.use(bodyParser.json()).post('/api/email', (req, res) => {
      const { msg = '' } = req.body

      let senderSmtpEmail = {
        to: [
          {
            email: req.body.email,
          },
        ],
        templateId: 1,
        params: {
          name: req.body.name,
          subject: 'Thank you for applying to be a Beta Tester.',
          text: msg,
        },
      }

      sendinblue(senderSmtpEmail)

      res.send('success')
    })

    server.use(bodyParser.json()).post('/api/subscribe', (req, res) => {
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
          if (err?.response?.status === 401) {
            res
              .status(401)
              .json({ message: 'Error', data: err?.response?.data })
          } else {
            res
              .status(500)
              .json({ message: 'Error', data: err?.response?.data })
          }
        })
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
