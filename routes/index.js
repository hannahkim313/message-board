const express = require('express');
const router = express.Router();

const title = 'Message Board';

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello world!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', function (req, res) {
  res.render('index', { title: title, messages: messages });
});

router.get('/new', function (req, res) {
  res.render('form', { title: title });
});

router.post('/new', function (req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
