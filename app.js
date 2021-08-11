const express = require('express')
const path = require('path')
const morgan = require('morgan')
const createError = require('http-errors');

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
    { link: '/admin/qbank', icon: 'fas fa-warehouse', label: 'Bank Pertanyaan' },
    { link: '/admin/quesioner', icon: 'fas fa-newspaper', label: 'Kuesioner' },
    { link: '/admin/result', icon: 'fas fa-poll', label: 'Hasil' },
    { link: '/admin/account', icon: 'fas fa-user-circle', label: 'Akun' },
  ]
  res.render('admin/admin-index', { appTitle, navTitle: 'Admin Panel', navMenus })
})
app.get('/signup', (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: 'Daftar' })
})
app.get('/login', (req, res) => {
  res.render('auth/login', { appTitle, navTitle: 'Masuk' })
})

app.get('/admin/qbank', (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
    { link: '/admin/qbank/add', icon: 'fas fa-plus-circle', label: 'Tambah' },
  ]
  res.render('qbank/qbank-index', { appTitle, navTitle: 'Bank Pertanyaan', navMenus })
})
app.get('/admin/qbank/add', (req, res) => {
  res.render('qbank/qbank-add', { appTitle, navTitle: 'Tambah Pertanyaan' })
})
app.get('/admin/qbank/detail', (req, res) => {
  res.render('qbank/qbank-detail', { appTitle, navTitle: 'Detail Pertanyaan' })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { appTitle, navTitle: '404' });
});