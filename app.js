const express = require('express')
const morgan = require('morgan')

const config = require('./config')

const app = express()
const host = config.app.host
const port = config.app.port

app.listen(port, host, () => {
  console.log(`App Listening at http://${host}:${port}`)
})

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World')
})