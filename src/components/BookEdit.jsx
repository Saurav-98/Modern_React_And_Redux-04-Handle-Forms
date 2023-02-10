import React, { useState } from "react";

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
    console.log(updatedTitle);
    // onEditHandle(book.id, updatedTitle);
    // handleEditClick();
    handleEditSubmitTogether(book.id, updatedTitle);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="upDatedTitle">Title</label>
      <input type="text" value={updatedTitle} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookEdit;
