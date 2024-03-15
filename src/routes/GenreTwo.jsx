import BookList from "../components/BookList/BookList";
import allBooks from "../booksData";

export default function GenreTwo() {
  return (
    <div>
      <h1>Genre Two</h1>
      <BookList books={allBooks} genre="True Crime" />
    </div>
  );
}
