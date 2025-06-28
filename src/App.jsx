import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {

const [books, setBooks] = useState([]);

const handleAddBook = (newBook) => {
  console.log(newBook);

  setBooks([...books, newBook])
}

  return (
    <div className="app">
      <h1 className="title">Book World!</h1>
      <AddBook onAddBook = {handleAddBook}/>
      <BookList books = {books}/>
 
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);