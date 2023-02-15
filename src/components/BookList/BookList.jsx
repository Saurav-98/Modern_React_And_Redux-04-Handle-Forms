import React from "react";
import "./BookList.css";
import BookShow from "../BookShow/BookShow";
import useBooksContext from "../../customHooks/useBooksContext";

const BookList = () => {
  const { books } = useBooksContext();

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
