const books = require('../books');

const deleteBook = (request, h) => {
  // GET bookId in URL PARAMETER AND FILTERING BOOKS
  const { id } = request.params;
  const index = books.findIndex((book) => book.id === id);

  // VALIDATION TO DELETE BOOK IF bookId IS VALID
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  // ERROR VALIDATION IF bookId NOT FOUND
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = deleteBook;
