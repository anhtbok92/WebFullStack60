const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
   res.render('index', { title: 'Lop WebFullStack 60', abc: '1234' });
});

module.exports = router;