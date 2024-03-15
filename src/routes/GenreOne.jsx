import BookList from "../components/BookList/BookList";
import allBooks from "../booksData";
import "./GenreOne.css";

export default function GenreOne() {
  return (
    <div className="genre-one-container">
      <h1 className="genre-one-title">Science Fiction</h1>
      <BookList books={allBooks} genre="Science Fiction" />
    </div>
  );
}
