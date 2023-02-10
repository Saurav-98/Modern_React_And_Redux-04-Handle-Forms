import React, { useState } from "react";
import "./BookShow.css";
import BookEdit from "../BookEdit/BookEdit";

// import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import { TiDeleteOutline, TiPencil } from "react-icons/ti";

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
      <div className="img-container">
        <img src={`https://picsum.photos/seed/${id}/300/300`} alt="books" />
      </div>
      <div className="book-show__btn-container">
        <button className="book-show__btn" onClick={handleDeleteClick}>
          {" "}
          <TiDeleteOutline className="btn-icon" />
        </button>
        <button className="book-show__btn" onClick={handleEditClick}>
          {" "}
          <TiPencil className="btn-icon" />
        </button>
      </div>

      <div className="edit-container">
        {showEdit ? (
          <BookEdit
            book={book}
            handleEditSubmitTogether={handleEditSubmitTogether}
          />
        ) : (
          <h3>{title}</h3>
        )}
      </div>
    </div>
  );
};

export default BookShow;
