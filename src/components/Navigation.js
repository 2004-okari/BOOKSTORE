import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
      <nav className="nav">
        <h1 className="head-text">Bookstore CMS</h1>
        <div className="user-div">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
        <ul className="list-nav">
          <li className="list-text"><Link className="list-text-1" to="/">BOOK</Link></li>
          <li className="list-text"><Link className="list-text-1" to="/categories">CATEGORY</Link></li>
        </ul>
      </nav>
      <div className="line-2" />
    </>
  );
}

export default Navigation;
