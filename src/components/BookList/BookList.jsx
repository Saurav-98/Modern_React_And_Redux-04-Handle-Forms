import React from "react";
import "./BookList.css";
import BookShow from "../BookShow/BookShow";

const BookList = ({ books, onDeleteHandle, onEditHandle }) => {
  // console.log(books);
  // console.log(typeof books);
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
