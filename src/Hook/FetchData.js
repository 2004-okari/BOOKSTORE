import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'HEuPwpriYXYbIgvPciUk';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${API_URL}/apps/${API_ID}/books`);
  return response.data;
});

const fetchBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}, // Add your reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        loading: false,
        books: [],
        error: action.payload,
      }));
  },
});

export default fetchBookSlice.reducer;
