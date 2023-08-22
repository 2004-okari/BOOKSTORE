import React from 'react';
import { useSelector } from 'react-redux';
import CreateBook from './CreateBook';

function BookList() {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
          </li>
        ))}
      </ul>
      <CreateBook />
    </div>
  );
}

export default BookList;
