const books = require('../books');

const getBookById = (request, h) => {
  // GET bookId FROM URL PARAMETER AND BOOKS FILTERING
  const { id } = request.params;
  const book = books.filter((n) => n.id === id)[0];

  // SEND BOOKS DATA IF bookId IS VALID
  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    response.code(200);
    return response;
  }

  // ERROR VALIDATION IF bookId NOT FOUND
  else {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
  }
};

module.exports = getBookById;
