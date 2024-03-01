function Book({ title, author, description, coverImage }) {
  return (
    <div className="book">
      <img src={coverImage} alt={title} className="book-cover" />
      <div className="book-details">
        <h2>{title}</h2>
        <h3>By: {author}</h3>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
}

export default Book;
