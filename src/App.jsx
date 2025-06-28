import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";



const App = () => {

const [books, setBooks] = useState([]);


const AddBook = () => {



setBooks()

}


















  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook AddBook = {AddBook}/>
      <BookList />
      <form>
        <input type="text"></input>
        <button type="submit">Add Book</button>

      </form>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
