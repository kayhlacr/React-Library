import BookList from "../components/BookList/BookList";
import allBooks from "../booksData";

export default function Home() {
  return (
    <div>
      <BookList books={allBooks} />
    </div>
  );
}
