import "./Book.css";
import { Link } from "react-router-dom";

function Book({ id, title, coverImage, onDelete }) {
  return (
    <div className="book">
      <Link to={`/bookDetails/${id}`}>
        <img src={coverImage} alt={title} className="book-cover" />
      </Link>
      <div className="book-details">
        <h2>{title}</h2>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Book;
