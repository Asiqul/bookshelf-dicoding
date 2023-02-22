const postBooks = require('./handler/add-books');
const getAllBooks = require('./handler/get-all-books');
const getBookById = require('./handler/get-book-by-id');
const editBook = require('./handler/edit-book');
const deleteBook = require('./handler/delete-book');

const routes = [
  {
    method: 'GET', // route display all books
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET', // route details book
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'POST', // route add book
    path: '/books',
    handler: postBooks,
  },
  {
    method: 'PUT', // edit book by id
    path: '/books/{id}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
