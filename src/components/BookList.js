import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateBook from './CreateBook';
import { removeBook } from '../redux/books/booksSlice';

// BookList.js

// ...

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of Book</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>{book.title}</p>
            by
            <p>{book.author}</p>
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>delete</button>
          </li>
        ))}
      </ul>
      <CreateBook />
    </div>
  );
}

export default BookList;
