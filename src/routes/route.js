const express = require('express');
const router = express.Router();
const chat = require('../controller/chat');

router.get('/chatDetails',chat.getChatDetails);
router.post('/message',chat.message);
router.post('/cteateChat',chat.cteateChat);

module.exports = router;