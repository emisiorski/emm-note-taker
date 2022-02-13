const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../../public/assets/index.html'));
  res.sendFile('/index.html');
});

router.get('/notes', (req, res) => {
    res.sendFile('/notes.html');
});

module.exports = router;