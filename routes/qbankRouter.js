const { Router } = require('express')
const router = Router()
const qbankController = require('../controllers/qbankController')

router.get('/', qbankController.qbank_index)
router.get('/add', qbankController.qbank_add_get)
router.post('/', qbankController.qbank_add_post)
router.get('/:id', qbankController.qbank_detail)
router.delete('/:id', qbankController.qbank_delete)

module.exports = router;