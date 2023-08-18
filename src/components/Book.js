import PropTypes from "prop-types";

function Book(props) {
  const { category, title, author } = props;

  return (
    <div className="bookstore">
      <div>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button className="delete-btn">Delete</button>
    </div>
  );
};

export default Book;