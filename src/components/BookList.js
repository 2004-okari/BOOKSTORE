import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../Hook/FetchData';
import CreateBook from './CreateBook';

function BookList() {
  const fetchBooksState = useSelector((state) => state.books); // Use the correct slice name here
  const dispatch = useDispatch();
  const { books, loading, error } = fetchBooksState; // Destructure properties from the state

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>List of Books</h2>
      <CreateBook />

      <p>
        Total number of books:
        {books.length}
      </p>

      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>{book.title}</p>
            <p>
              Category:
              {book.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
