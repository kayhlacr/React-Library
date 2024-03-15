import BookList from "../components/BookList/BookList";
import allBooks from "../booksData";
import "./GenreTwo.css";

export default function GenreTwo() {
  return (
    <div className="genre-two-container">
      <h1 className="genre-two-title">True Crime</h1>
      <BookList books={allBooks} genre="True Crime" />
    </div>
  );
}
