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
  let navMenus = [
    { link: '/responden', icon: 'fas fa-search', label: 'Mulai Menjawab' },
  ]
  res.render('index', { appTitle, navTitle: 'Beranda', navMenus })
})
app.get('/admin', (req, res) => {
  let navMenus = [
    { link: '/qbank', icon: 'fas fa-warehouse', label: 'Bank Pertanyaan' },
    { link: '/quesioner', icon: 'fas fa-newspaper', label: 'Kuesioner' },
    { link: '/result', icon: 'fas fa-poll', label: 'Hasil' },
    { link: '/account', icon: 'fas fa-user-circle', label: 'Akun' },
  ]
  res.render('admin/admin-index', { appTitle, navTitle: 'Admin Panel', navMenus })
})
app.get('/daftar', (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
})
app.get('/masuk', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})