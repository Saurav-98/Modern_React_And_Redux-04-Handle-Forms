import React, { useContext } from "react";
import "./BookList.css";
import BookShow from "../BookShow/BookShow";

import BooksContext from "../../context/books";

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
