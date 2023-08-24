import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categories';
import fetchBookReducer from '../Hook/FetchData';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    fetchedBooks: fetchBookReducer,
  },
});

export default store;
