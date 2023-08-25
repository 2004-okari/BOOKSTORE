import React, { useState } from 'react';
import axios from 'axios';

const API_ID = 'u3BFViY5zE36mpKmwqF4';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
        alert('Hello');
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
