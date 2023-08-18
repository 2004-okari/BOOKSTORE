import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <h1>Cm Bookstore</h1>
        <ul>
          <li><Link to="/">book</Link></li>
          <li><Link to="/categories">category</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
