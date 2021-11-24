const router = require('express').Router();
const { imageGallaryController } = require('../controllers');

router.get('/getall',imageGallaryController.getImageGallary);

module.exports = router;