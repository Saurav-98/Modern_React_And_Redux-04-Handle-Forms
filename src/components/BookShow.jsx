import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDeleteHandle, onEditHandle }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { id, title } = book;

  const handleDeleteClick = () => {
    onDeleteHandle(id);
  };

  const handleEditClick = () => {
    setShowEdit((prev) => !prev);
  };
  return (
    <div className="book-show">
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>

      {showEdit ? (
        <BookEdit
          onEditHandle={onEditHandle}
          handleEditClick={handleEditClick}
          book={book}
        />
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};

export default BookShow;
