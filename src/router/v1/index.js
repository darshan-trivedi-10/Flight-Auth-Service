const express = require('express');

const userController = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middlewares/index');

const router = express.Router();

router.post('/signup', AuthRequestValidators.validateUserAuth, userController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, userController.signIn);
router.get('/isAuthenticated', userController.isAuthenticated);

module.exports = router;