import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const deleteBook = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const upDatedBooks = books.filter((book) => book.id !== id);
    setBooks(upDatedBooks);
  };

  const editBook = async (id, newTitle) => {
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
  const addBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const upDatedBooks = [...books, response.data];
    setBooks(upDatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    deleteBook,
    editBook,
    addBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
