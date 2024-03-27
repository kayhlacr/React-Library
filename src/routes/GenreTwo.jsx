import BookList from "../components/BookList/BookList";
import "./GenreTwo.css";

export default function GenreTwo({ books, setBooks }) {
  const genre = "True Crime";
  const filteredBooks = books.filter((book) => book.genre === genre);

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <div className="genre-two-container">
      <h1 className="genre-two-title">True Crime</h1>
      <BookList books={filteredBooks} onDelete={handleDelete} />
    </div>
  );
}
