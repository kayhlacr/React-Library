import "./BookList.css";
import Book from "../Book/Book";

export default function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          coverImage={book.coverImage}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  );
}
