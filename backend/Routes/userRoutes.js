// const express = require('express');


// const router = express.Router()

// const {registeruser}= require('../Controller/userController')

// router.route('/').post(registeruser)//register route

// // router.route('/login',authUser)

// module.exports=router;

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const { registeruser, authUser } = require('../Controller/userController');


router.route('/').post(registeruser); //register route

router.post('/login',authUser)

module.exports = router;
