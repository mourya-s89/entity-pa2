import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form>
        <label>Title:</label>
        <input type="text" placeholder="Enter movie title" required />

        <label>Director:</label>
        <input type="text" placeholder="Enter director's name" required />

        <label>Genre:</label>
        <select required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>

        <label>Release Year:</label>
        <input type="number" placeholder="Enter release year" required />

        <label>Synopsis:</label>
        <textarea placeholder="Enter movie synopsis" required></textarea>

        <label>Poster URL:</label>
        <input type="url" placeholder="Enter poster image URL" required />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;