import Book from "./Book";
import "./BookList.css";

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          coverImage={book.coverImage}
        />
      ))}
    </div>
  );
}
