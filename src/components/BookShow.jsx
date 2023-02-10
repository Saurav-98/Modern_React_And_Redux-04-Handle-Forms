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

  const handleEditSubmitTogether = (id, newTitle) => {
    onEditHandle(id, newTitle);
    setShowEdit(false);
  };
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${id}/200/300`} alt="books" />
      <div className="book-show__btn-container">
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>

      {showEdit ? (
        <BookEdit
          book={book}
          handleEditSubmitTogether={handleEditSubmitTogether}
        />
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};

export default BookShow;
