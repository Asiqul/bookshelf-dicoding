const books = require('../books');

const getAllBooks = (request, h) => {
  // GET QUERY FROM URL
  const { name, reading, finished } = request.query;

  // VALIDATION FOR BOOKS FILTERING
  let bookFilter = books;
  if (name !== undefined) {
    bookFilter = books.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  } else if (reading !== undefined) {
    bookFilter = books.filter(
      (book) => Number(book.reading) === Number(reading)
    );
  } else if (finished !== undefined) {
    bookFilter = books.filter(
      (book) => Number(book.finished) === Number(finished)
    );
  }

  // VALIDATION FOR SEND RESPONSE DATA
  const response = h.response({
    status: 'success',
    data: {
      books: bookFilter.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooks;
