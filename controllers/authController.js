let appTitle = 'Paperon'

const signup_get = (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
}
const signup_post = (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
}
const login_get = (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
}
const login_post = (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
}
const logout_get = (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
}

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
  logout_get
}