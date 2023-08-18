function CreateBook() {
  return (
    <>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </>
  );
}

export default CreateBook;
