const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const chat = require('../controller/chat');

router.post('/signUp',user.userSignIn);
router.post('/logIn',user.userLogIn);
router.get('/getChatDetails/:id',chat.getChatDetails);
router.post('/message',chat.message);
router.post('/cteateChat',chat.cteateChat);

module.exports = router;