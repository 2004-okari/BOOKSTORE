import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import CreateBook from './CreateBook';

function BookList() {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.books.books);
  const books = Object.values(library).reduce((acc, books) => acc.concat(books), []);
  console.log(books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.item_id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div>
                <p>Comment</p>
                <p>Edit</p>
                <button type="button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
      <p>
        {books && books.length}
        {' '}
        books
      </p>
      <CreateBook />
    </div>
  );
}

export default BookList;
