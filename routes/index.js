const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

// Routes
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Message Board',
    messages: messages,
  });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Message Board' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
