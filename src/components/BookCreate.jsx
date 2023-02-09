import React, { useState } from "react";
import "./BookCreate.css";

const BookCreate = ({ onTitleSubmit }) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const titleSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = { id: Math.floor(Math.random() * 123456), title };
    onTitleSubmit(newBook);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h2>Add a Book</h2>
      <form className="book-create__form" onSubmit={titleSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={titleChangeHandler}
          value={title}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
