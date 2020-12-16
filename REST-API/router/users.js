const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { auth } = require('../utils');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/profile', auth(),userController.getProfile);
// router.put('/profile', auth(),userController.editProfileInfo);


module.exports = router;