const express =  require('express');

const router =  express.Router();
const authController = require('../controllers/authController')



// Generate a secret key for the user
router.post('/generateSecret', authController.getSecret)


//Generate a 6 digits token using speakeasy
router.post('/totpGenerate', authController.getToken)

//verify token with user secret key and token

router.post('/totpVerified', authController.verifyToken)

  

  

  


   

module.exports = router;