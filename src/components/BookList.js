import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import CreateBook from './CreateBook';

const API_ID = 'u3BFViY5zE36mpKmwqF4';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

function BookList() {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.books.books);
  const books = Object.entries(library).map(([identifier, data]) => ({
    identifier,
    data,
  }));

  console.log(books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  // eslint-disable-next-line
  const deleteResource = async (item_id) => {
    try {
      // eslint-disable-next-line
      await axios.delete(`${API_URL}/apps/${API_ID}/books/${item_id}`);
      console.log('Deleted:', item_id);
      dispatch(removeBook(item_id));
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

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
            <li key={book.identifier}>
              <h3>
                Author:
                {book.data[0].author}
              </h3>
              <p>
                Title:
                {book.data[0].title}
              </p>
              <div>
                <p>Comment</p>
                <p>Edit</p>
                <button type="button" onClick={() => deleteResource(book.identifier)}>Delete</button>
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
