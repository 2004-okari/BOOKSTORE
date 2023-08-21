// CreateBook.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './redux/booksSlice';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({ id: Date.now(), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </>
  );
}

export default CreateBook;
