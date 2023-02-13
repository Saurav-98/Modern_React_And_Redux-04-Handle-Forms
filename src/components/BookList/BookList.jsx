import React, { useContext } from "react";
import "./BookList.css";
import BookShow from "../BookShow/BookShow";

import BooksContext from "../../context/books";

const BookList = ({ books, onDeleteHandle, onEditHandle }) => {
  const value = useContext(BooksContext);
  // console.log(books);
  // console.log(typeof books);
  return (
    <div className="book-list">
      <h3>{value}</h3>
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
