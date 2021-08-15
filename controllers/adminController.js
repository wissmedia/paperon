const appTitle = 'Paperon'

const admin_index = (req, res) => {
  let navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-warehouse', label: 'Bank Pertanyaan' },
    { link: '/admin/quesioner', icon: 'fas fa-newspaper', label: 'Kuesioner' },
    { link: '/admin/result', icon: 'fas fa-poll', label: 'Hasil' },
    { link: '/admin/account', icon: 'fas fa-user-circle', label: 'Akun' },
  ]
  res.render('admin/admin-index', { appTitle, navTitle: 'Admin Panel', navMenus })
}

module.exports = {
  admin_index
}