import Book from './Book';
import CreateBook from './CreateBook';

function BookList() {
  const library = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 3,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <>
      {library.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author} />
      ))}
      <CreateBook />
    </>
  );
}

export default BookList;
