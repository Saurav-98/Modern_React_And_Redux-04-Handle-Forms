import React, { useState } from "react";
import "./BookEdit.css";
const BookEdit = ({
  book,

  handleEditSubmitTogether,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);
  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditSubmitTogether(book.id, updatedTitle);
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
