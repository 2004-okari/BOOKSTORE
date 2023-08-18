import './App.css';
import {
  Routes, Route
} from 'react-router-dom';
import Category from './components/Categories';
import BookList from './components/BookList';
import Navigation from './components/Navigation';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/categories' element={<Category />} />
      </Routes>
      <CreateBook />
    </>
  );
}

export default App;
