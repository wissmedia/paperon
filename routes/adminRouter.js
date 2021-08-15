const { Router } = require('express')
const adminController = require('../controllers/adminController')
const router = Router()

router.get('/', adminController.admin_index)

module.exports = router