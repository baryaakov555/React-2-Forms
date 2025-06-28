import React from "react";

const BookCard = ({book}) => {

  return (
    
  <div className="book-card">

    <img src={book.image} />

    <div className="book-info">

      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>category: {book.category}</p>
      <p>PublishedDate: {book.publishedDate}</p>
      <p>Rating: {book.rating}</p>
      <p>Read: {book.isRead ? "✅" : "❌"}</p>
      <p>Favorite: {book.isFavorite ? "★" : ""}</p>

    </div>

  </div>

  );

};

export default BookCard;
