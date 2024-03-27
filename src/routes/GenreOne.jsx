import BookList from "../components/BookList/BookList";
import "./GenreOne.css";

export default function GenreOne({ books, setBooks }) {
  const genre = "Science Fiction";
  const filteredBooks = books.filter((book) => book.genre === genre);

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="genre-one-container">
      <h1 className="genre-one-title">Science Fiction</h1>
      <BookList books={filteredBooks} onDelete={handleDelete} />
    </div>
  );
}
