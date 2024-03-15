import "./Book.css";
import { Link } from "react-router-dom";

function Book({ id, title, author, description, coverImage, onDelete }) {
  return (
    <div className="book">
      <Link to={`/bookDetails/${id}`}>
        <img src={coverImage} alt={title} className="book-cover" />
      </Link>
      <div className="book-details">
        <h2>{title}</h2>
        <h3>By: {author}</h3>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Book;
