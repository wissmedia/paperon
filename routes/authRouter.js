const { Router } = require('express')
const router = Router()
let appTitle = 'Paperon'

router.get('/signup', (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
})
router.post('/signup', (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
})
router.get('/login', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})
router.post('/login', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})
router.get('/logout', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})

module.exports = router