import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BookList from "./components/BookList/BookList";
import BookCreate from "./components/BookCreate/BookCreate";
const App = () => {
  // const [books, setBooks] = useState([
  //   { id: 1, title: "The Lord Of The Rings" },
  //   { id: 2, title: "The Little Prince" },
  //   { id: 3, title: "Harry Potter and the Philosopher’s Stone" },
  //   { id: 4, title: "The Hobbit" },
  //   { id: 5, title: "The Dream Of The Red Chamber" },
  // ]);

  // *************** Getting Books Data from Rest Server ***************

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (title) => {
    // setBooks((prev) => [...prev, book]);

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    // console.log(response);
    const upDatedBooks = [...books, response.data];
    setBooks(upDatedBooks);
  };

  const deleteBook = async (id) => {
    // const updatedBooks = books.filter((book) => book.id !== id);
    // setBooks(updatedBooks);

    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const upDatedBooks = books.filter((book) => book.id !== id);
    setBooks(upDatedBooks);

    // console.log(response);
  };

  const editBook = async (id, newTitle) => {
    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle };
    //   } else {
    //     return book;
    //   }
    // });
    // setBooks(updatedBooks);

    // console.log(id);
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1 className="primary-heading">Watch List</h1>

      <BookCreate onTitleSubmit={addBook} />

      <BookList
        books={books}
        onDeleteHandle={deleteBook}
        onEditHandle={editBook}
      />
    </div>
  );
};

export default App;
