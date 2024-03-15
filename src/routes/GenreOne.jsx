import BookList from "../components/BookList/BookList";
import allBooks from "../booksData";

export default function GenreOne() {
  return (
    <div>
      <h1>Genre One</h1>
      <BookList books={allBooks} genre="Science Fiction" />
    </div>
  );
}
