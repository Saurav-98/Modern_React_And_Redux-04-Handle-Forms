import React, { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import "./App.css";
import BookList from "./components/BookList/BookList";
import BookCreate from "./components/BookCreate/BookCreate";
const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="primary-heading">Watch List</h1>

      <BookCreate />

      <BookList />
    </div>
  );
};

export default App;
