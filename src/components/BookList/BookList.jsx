import React from "react";
import "./BookList.css";
import BookShow from "../BookShow/BookShow";

const BookList = ({ books, onDeleteHandle, onEditHandle }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          onDeleteHandle={onDeleteHandle}
          onEditHandle={onEditHandle}
        />
      ))}
    </div>
  );
};

export default BookList;
