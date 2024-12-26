const {
    addBookHandler,
    getAllBooksHandler,
    getBooksByIdHandler,
    editBooksByIdHandler,
    deleteBookHandler,
} = require('./handlers');

const routes = [
    {   method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;