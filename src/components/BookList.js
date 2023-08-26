import axios from 'axios';
import './booklist.css';
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
    <div className="cover-div">
      {books && books.length > 0 ? (
        <ul className="list-div">
          {books.map((book) => (
            <li key={book.identifier} className="list">
              <div className="details">
                <p className="text-1">Fiction</p>
                <p className="text-2">
                  {book.data[0].title}
                </p>
                <p className="text-3">
                  {book.data[0].author}
                </p>
              </div>
              <div className="actions">
                <p className="act-1">Comment</p>
                <div className="line-4" />
                <p className="act-1">Edit</p>
                <div className="line-4" />
                <button type="button" className="button" onClick={() => deleteResource(book.identifier)}>Delete</button>
              </div>
              <div className="div-1">
                <div className="div-2" />
              </div>
              <div className="progress">
                <p className="per">100%</p>
                <p className="complete">Completed</p>
              </div>
              <div className="line-3" />
              <div className="update">
                <p className="update-title">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
                <button type="button" className="prog-btn">UPDATE PROGRESS</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
      <div className="line" />

      <CreateBook />
    </div>
  );
}

export default BookList;
