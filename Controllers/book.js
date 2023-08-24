const BookService = require('../Services/book');
const bookService = new BookService();

module.exports = class BookController {
  async CreateBook(req, res, next) {
    let book = req.body;
    const result = await bookService.CreateBook(book);
    if (result) {
      res.send(result);
    } else {
      res.send('error');
    }
  }
  async GetAllBooks(req, res, next) {
    const results = await bookService.GetAllBooks();
    if (results) {
      res.send(results);
    } else {
      res.send('error');
    }
  }
  async GetBookById(req, res, next) {
    const id = req.query.id;
    const result = await bookService.GetBookById(id);

    if (result) {
      res.send(result);
    } else {
      res.send('error');
    }
  }
  async DeleteBookById(req, res, next) {
    const id = req.query.id;
    const result = await bookService.DeleteBookById(id);

    if (result) {
      res.send(result);
    } else {
      res.send('error');
    }
  }
  async UpdateBookById(req, res, next) {
    const id = req.query.id;
    const book = req.body;
    const result = await bookService.UpdateBookById(id, book);
    if (result) {
      res.send(result);
    } else {
      res.send('error');
    }
  }
};
