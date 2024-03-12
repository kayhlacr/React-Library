import { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import booksData from "./booksData";
import BookForm from "./components/BookForm/BookForm";
import BookDetailsScreen from "./routes/BookDetailsScreen";
import GenreTwo from "./routes/GenreTwo";
import GenreOne from "./routes/GenreOne";

function App() {
  const [books, setBooks] = useState(booksData);
  const navigate = useNavigate();
  const pageRoutes = ["bookDetails", "genreOne", "genreTwo"];
  const handleDelete = (id) => {
    const deletedBook = books.find((book) => book.id === id);
    console.log("Deleted Book ID:", deletedBook.id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bookDetails">Book Details Screen</NavLink>
          </li>
          <li>
            <NavLink to="/genreOne">Genre 1</NavLink>
          </li>
          <li>
            <NavLink to="/genreTwo">Genre 2</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            navigate(pageRoutes);
          }}
        ></button>
      </nav>
      <h1>Library App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookForm
                onFormSubmissionHandler={(newBook) => {
                  const updatedBooks = [...books, newBook];
                  setBooks(updatedBooks);
                }}
              />
              <BookList books={books} onDelete={handleDelete} />
            </>
          }
        />
        <Route path="/bookDetails" element={<BookDetailsScreen />} />
        <Route path="/genreOne" element={<GenreOne />} />
        <Route path="/genreTwo" element={<GenreTwo />} />
      </Routes>
    </>
  );
}

export default App;
