const Qbank = require('../models/qbankModel')
const appTitle = 'Paperon'

const qbank_index = (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
    { link: '/admin/qbank/add', icon: 'fas fa-plus-circle', label: 'Tambah' },
  ]
  Qbank.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('qbank/qbank-index', { appTitle, navTitle: 'Bank Pertanyaan', navMenus, qbanks: result })
    })
    .catch((err) => {
      console.log(err)
    })
}

const qbank_add_get = (req, res) => {
  const navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ]
  res.render('qbank/qbank-add', { appTitle, navTitle: 'Tambah Pertanyaan', navMenus })
}

const qbank_add_post = (req, res) => {
  const qbank = new Qbank(req.body)

  qbank.save()
    .then((result) => {
      res.redirect('/admin/qbank')
    })
    .catch((err) => {
      console.log(err)
    })
}

const qbank_detail = (req, res) => {
  const id = req.params.id
  const navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ]
  Qbank.findById(id)
    .then(result => {
      if (!result) throw new Error('error')
      res.render('qbank/qbank-detail', { appTitle, navTitle: 'Detail Pertanyaan', navMenus, qbank: result })
    })
    .catch(err => {
      res.status(404).render('404', { navTitle: '404' })
    })
}

const qbank_delete = (req, res) => {
  const id = req.params.id

  Qbank.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/admin/qbank' })
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  qbank_index,
  qbank_add_get,
  qbank_add_post,
  qbank_detail,
  qbank_delete
}