import { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import allBooks from "./booksData";
import BookForm from "./components/BookForm/BookForm";
import Home from "./routes/Home";
import BookDetailsScreen from "./routes/BookDetailsScreen";
import GenreTwo from "./routes/GenreTwo";
import GenreOne from "./routes/GenreOne";

function App() {
  const [books, setBooks] = useState(allBooks);
  const navigate = useNavigate();
  const pageRoutes = ["/", "/genreOne", "/genreTwo"];
  const handleDelete = (id) => {
    const deletedBook = books.find((book) => book.id === id);
    console.log("Deleted Book ID:", deletedBook.id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const isHomePage = location.pathname === "/";

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredBooks = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/genreOne">Genre 1</NavLink>
          </li>
          <li>
            <NavLink to="/genreTwo">Genre 2</NavLink>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search For Book..."
          className="search-bar"
          onChange={handleSearch}
        />
        <button
          onClick={() => {
            navigate(pageRoutes);
          }}
        ></button>
      </nav>
      {isHomePage && <h1>Library App</h1>}

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
        <Route path="/" element={<Home />} />
        <Route path="/genreOne" element={<GenreOne />} />
        <Route path="/genreTwo" element={<GenreTwo />} />
        <Route
          path="/bookDetails/:id"
          element={<BookDetailsScreen isBookDetailsPage={true} />}
        />
      </Routes>
    </>
  );
}

export default App;
