const books = require('../books');

const editBook = (request, h) => {
  // GET bookId AND DATA FROM BODY REQUEST AND FILTERING BOOKS
  const { id } = request.params;
  let { name, year, author, summary, publisher, pageCount, readPage, reading } =
    request.payload;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((book) => book.id === id);

  // ERROR VALIDATION IF bookId NOT FOUND
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  // REWRITE OLD BOOKS DATA WITH NEW DATA
  else if (index !== -1 && name != undefined && pageCount >= readPage) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  // ERROR VALIDATION IF BOOK NAME EMPTY
  else if (name == undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // ERROR VALIDATION IF readPage > pageCount
  else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }
};

module.exports = editBook;
