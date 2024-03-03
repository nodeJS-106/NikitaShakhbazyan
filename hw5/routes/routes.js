
const router = require('express').Router()
const {gettingDatas,gettingData,creatingData,puttingData,deletingData} = require('../controller/controller')


router.route('/').get(gettingDatas)
router.route('/:id').get(gettingData)
router.route('/').post(creatingData)
router.route('/:id').put(puttingData)
router.route('/:id').delete(deletingData)

module.exports = router


