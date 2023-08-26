import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
      <nav className="nav">
        <h1 className="head-text">Bookstore CMS</h1>
        <ul className="list-nav">
          <li className="list-text"><Link className="list-text-1" to="/">BOOK</Link></li>
          <li className="list-text"><Link className="list-text-1" to="/categories">CATEGORY</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
