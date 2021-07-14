const express = require('express');

const router = express.Router();

const constant = require('../variable');
const huaweiToStravaCtrl = require('../controllers/huaweiToStrava')


router.post(constant.LOGIN_PATH, huaweiToStravaCtrl.login);
router.post(constant.SIGN_UP_PATH, huaweiToStravaCtrl.signUp);

module.exports = router