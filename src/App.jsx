import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import BookList from "./components/BookList";
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

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onTitleSubmit={addBook} />
      <div className="main-content">
        <h1>Reading List</h1>
        <BookList
          books={books}
          onDeleteHandle={deleteBook}
          onEditHandle={editBook}
        />
      </div>
    </div>
  );
};

export default App;
