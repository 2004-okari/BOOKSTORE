import './App.css';
import {
  Routes, Route
} from 'react-router-dom';
import Category from './components/Categories';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/categories' element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
