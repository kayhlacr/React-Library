import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList/BookList";
import booksData from "./booksData";
import BookForm from "./components/BookForm/BookForm";

function App() {
  const [books, setBooks] = useState(booksData);
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <>
      <h1>Library App</h1>
      <BookForm
        onFormSubmissionHandler={(newBook) => {
          const updatedBooks = [...books, newBook];
          setBooks(updatedBooks);
        }}
      />
      <BookList books={books} onDelete={handleDelete} />
    </>
  );
}

export default App;
