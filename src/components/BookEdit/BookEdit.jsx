import React, { useState } from "react";
import useBooksContext from "../../customHooks/useBooksContext";

import "./BookEdit.css";
const BookEdit = ({ book, handleEditClick }) => {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);

  const { editBook } = useBooksContext();

  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditClick();
    console.log(updatedTitle);
    editBook(book.id, updatedTitle);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="upDatedTitle">Title</label>
      <input type="text" value={updatedTitle} onChange={handleChange} />
      <button className="primary-btn" type="submit">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
