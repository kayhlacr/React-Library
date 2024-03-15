import "./BookList.css";
import Book from "../Book/Book";

export default function BookList({ books, genre, onDelete }) {
  const filteredBooks = genre
    ? books.filter((book) => book.genre === genre)
    : books;

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <Book
          key={book.id}
          id={book.id}
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
