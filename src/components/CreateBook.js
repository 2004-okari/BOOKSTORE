import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'; // Import axios
import { addBook } from '../redux/books/booksSlice';

const API_ID = 'HEuPwpriYXYbIgvPciUk';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/apps/${API_ID}/books`,
        {
          item_id: Date.now(),
          title,
          author,
          category: 'N/A',
        },
      );

      if (response.status === 200) {
        dispatch(
          addBook({
            id: Date.now(),
            title,
            author,
            category: 'N/A',
          }),
        );
        setTitle('');
        setAuthor('');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </>
  );
}

export default CreateBook;
