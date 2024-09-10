const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/books', authMiddleware, bookController.getAllBooks);
router.post('/borrow', authMiddleware, bookController.borrowBook);

module.exports = router;

