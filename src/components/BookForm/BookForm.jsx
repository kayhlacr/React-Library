import { useState } from "react";
import "./BookForm.css";

export default function BookForm({ onFormSubmissionHandler }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  return (
    <form className="form-container">
      <label>
        ID:{""}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;

            setId(value);
          }}
        />
      </label>
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
      <button
        className="form-button"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const newBook = {
            id,
            title,
            author,
            genre,
            description,
            coverImage,
          };
          onFormSubmissionHandler(newBook);
        }}
      >
        Create Book
      </button>
    </form>
  );
}
