const books = require('../books');
const { nanoid } = require('nanoid');

const postBooks = (request, h) => {
  // GET DATA ON BODY REQUEST
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const finish = pageCount === readPage;
  const finished = finish;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const newBooks = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // ERROR VALIDATION IF NO BOOK NAME OR readPage > pageCount
  if (name == undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  // WRITE BOOK IN books.js IF INPUT USER VALID
  books.push(newBooks);
  const addSuccess = books.filter((book) => book.id === id).length > 0;

  if (addSuccess && name != undefined && pageCount >= readPage) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};
module.exports = postBooks;
