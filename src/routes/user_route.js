const express = require('express');
const router = express.Router();
const Users = require('../controllers/user_controller');

router.get('/users/getusers', Users.getusers);
router.get('/users/getusersById/:userId', Users.getusersById);
router.post('/users/createUsers', Users.createUsers);
router.patch('/users/updateUsersById/:userId', Users.updateUsersById);
router.delete('/users/deleteUsersById/:userId', Users.deleteUsersById);

module.exports = router;
