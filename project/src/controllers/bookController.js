const Book = require('../models/book');
const BorrowingHistory = require('../models/BorrowingHistory');
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    if (books.length === 0) {
      return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findByPk(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.copies < 1) return res.status(400).json({ message: 'Book unavailable' });

    const borrowing = await BorrowingHistory.create({
      userId: req.user.id, // Ensure req.user is available and has an id
      bookId: bookId
    });

    await book.update({ copies: book.copies - 1 });

    res.status(201).json(borrowing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

