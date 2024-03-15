import { useParams } from "react-router-dom";
import allBooks from "../booksData";
import "./BookDetailsScreen.css";

export default function BookDetailsScreen() {
  const { id } = useParams();
  console.log("Book ID:", id);
  const book = allBooks.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="book-details-page">
      <h1>Selected Book Details</h1>
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>By: {book.author}</h3>
      <p>{book.description}</p>
    </div>
  );
}
