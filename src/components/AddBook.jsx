import React, { useState } from "react";
import "../style.css";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({onAddBook}) => {

const [title, setTitle] = useState("");
const [author, setauthor] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [publishedDate, setPublishedDate] = useState("");
const [image, setImage] = useState("");
const [rating, setRating] = useState("");
const [isRead, setIsRead] = useState(false);
const [isFavorite, setIsFavorite] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault()
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
  console.log(id);
  onAddBook({title, author, description, category, publishedDate, image, rating, isRead, isFavorite, id});
}

const imageFile = (event) => {
  const image = URL.createObjectURL(event.target.files[0]);

  setImage(image);
}

  return(

  <div className="book-card">

     <form onSubmit={handleSubmit} className="add-book-form">

        <div className="form-group">
          <label>*Title: </label>
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
        </div>

        <div className="form-group">
          <label>*Author: </label>
            <input
              type="text"
              placeholder="Author Name"
              value={author}
              onChange={(event) => setauthor(event.target.value)}
              required
            />
        </div>  

        <div className="form-group">
          <label>Description: </label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
        </div>

        <div className="form-group">
          <label>Category: </label>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Select Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="poetry">Poetry</option>
              <option value="drama">Drama</option>
              <option value="biography">Biography</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="technology">Technology</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="travel">Travel</option>
              <option value="cooking">Cooking</option>
              <option value="gardening">Gardening</option>
            </select>
          </div>

          <div className="form-group">
            <label>Published Date: </label>
              <input
                type="date"
                value={publishedDate}
                onChange={(event) => setPublishedDate(event.target.value)}
              />
          </div>

        <div className="form-group">
          <label>Cover Image: </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => imageFile(event)}
            />
        </div>     

        <div className="form-group">
          <label>Rating: </label>
            <select value={rating} onChange={(event) => setRating(event.target.value)}>
              <option value="">Rating 1-5</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>  
              <option value="5">5</option>  
            </select>
        </div> 

        <div className="form-group">
          <label>Did You Read This Book? </label>
            <input
              type="checkbox"
              checked={isRead}
              onChange={(event) => setIsRead(event.target.checked)}
            />
        </div>

        <div className="form-group">
          <label>Mark It As Favorite? </label>
            <input
              type="checkbox"
              checked={isFavorite}
              onChange={(event) => setIsFavorite(event.target.checked)}
            />
        </div> 

        <button type="submit">Add Book</button>

      </form>

  </div>
  );
};

export default AddBook;
