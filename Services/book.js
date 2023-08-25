const BookModel = require('../models/book');

module.exports = class BookService {
  async CreateBook(book) {
    const bookToAdd = new BookModel(book);
    return await bookToAdd.save();
  }
  async GetAllBooks() {
    return await BookModel.find();
  }
  async GetBookById(id) {
    return await BookModel.findById(id);
  }
  async DeleteBookById(id) {
    return await BookModel.findByIdAndDelete(id);
  }
  async UpdateBook(id, updatedBook) {
    return await BookModel.findByIdAndUpdate(id, updatedBook, { new: true });
  }
};
