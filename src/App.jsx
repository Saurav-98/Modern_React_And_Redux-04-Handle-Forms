import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Lord Of The Rings" },
    { id: 2, title: "The Little Prince" },
    { id: 3, title: "Harry Potter and the Philosopher’s Stone" },
    { id: 4, title: "The Hobbit" },
    { id: 5, title: "The Dream Of The Red Chamber" },
  ]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, book]);
  };
  return (
    <div>
      {books.map((book) => {
        return <h4 key={book.id}>{book.title}</h4>;
      })}
      <BookCreate onTitleSubmit={addBook} />
    </div>
  );
};

export default App;
