// # Dependencies
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const createError = require('http-errors');

// # import Router
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
const authRouter = require('./routes/authRouter')
const adminRouter = require('./routes/adminRouter')
const qbankRouter = require('./routes/qbankRouter')

// # Config File
const config = require('./config')

// # APP ENV
const app = express()
const appHost = config.app.host
const appPort = config.app.port
const appTitle = 'Paperon'

// # DB ENV
const dbHost = config.db.host
const dbPort = config.db.port
const dbUser = config.db.user
const dbPass = config.db.pass
const dbData = config.db.data

// # dbURI using DB Partials
const dbURI = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbData}`
// # dbURI using DB_STRING
// const dbURI = config.db.string

// Run Express (no db)
// app.listen(port, host, () => {
//   console.log(`App Listening at http://${host}:${port}`)
// })

// Run Express (with MongoDB String Connection)
// mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//   .then(result => {
//     console.log(`Connected to DB`)
//     app.listen(port, host, () => {
//       console.log(`App listening at http://${appHost}:${appPort}`)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Run Express (with MongoDB Partials Connection)
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => {
    console.log(`Connected to DB at ${dbHost}:${dbPort}`)
    app.listen(appPort, appHost, () => {
      console.log(`App listening at http://${appHost}:${appPort}`)
    })
  })
  .catch(err => {
    console.log(err)
  })

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

// check user on every route
app.get('*', checkUser)

// Root Route
app.get('/', (req, res) => {
  let navMenus = [
    { link: '/responden', icon: 'fas fa-search', label: 'Mulai Menjawab' },
  ]
  res.render('index', { appTitle, navTitle: 'Beranda', navMenus })
})

// Auth Route
app.use(authRouter)

// Admin Route
app.use('/admin', requireAuth, adminRouter)

// Qbank Route
app.use('/admin/qbank', qbankRouter)

// Quesioner Route
app.get('/admin/quesioner', (req, res) => {
  let navMenus = []
  res.render('quesioner/quesioner-index', { appTitle, navTitle: 'Kuesioner', navMenus })
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