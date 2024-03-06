import { useState } from "react";
import "./BookForm.css";
import { nanoid } from "nanoid";

export default function BookForm({ onFormSubmissionHandler }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newBookId = nanoid();
    console.log("New Book ID:", newBookId);
    const newBook = {
      id: newBookId,
      title,
      author,
      genre,
      description,
      coverImage,
    };
    onFormSubmissionHandler(newBook);
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmission}>
      <label>
        Title:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setTitle(value);
          }}
        />
      </label>
      <label>
        Author:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setAuthor(value);
          }}
        />
      </label>
      <label>
        Genre:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setGenre(value);
          }}
        />
      </label>
      <label>
        Description:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setDescription(value);
          }}
        />
      </label>
      <label>
        Cover Image:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setCoverImage(value);
          }}
        />
      </label>
      <button className="form-button" type="submit">
        Create Book
      </button>
    </form>
  );
}
