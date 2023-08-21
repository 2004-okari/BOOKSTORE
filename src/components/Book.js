import PropTypes from 'prop-types';

function Book(props) {
  const { category, title, author } = props;

  return (
    <div className="bookstore">
      <div>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button" className="delete-btn">Delete</button>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
