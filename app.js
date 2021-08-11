const express = require('express')
const path = require('path')
const morgan = require('morgan')

const config = require('./config')

const app = express()
const host = config.app.host
const port = config.app.port
const appTitle = 'Paperon'

app.listen(port, host, () => {
  console.log(`App Listening at http://${host}:${port}`)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.render('index', { appTitle, navTitle: 'Beranda' })
})
app.get('/admin', (req, res) => {
  res.render('admin/admin-index', { appTitle, navTitle: 'Panel Admin' })
})
app.get('/daftar', (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
})
app.get('/masuk', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})