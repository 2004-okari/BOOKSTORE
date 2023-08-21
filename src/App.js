import './App.css';
import {
  Routes, Route
} from 'react-router-dom';
import Category from './components/Categories';
import BookList from './components/BookList';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
