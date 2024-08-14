import React from 'react';
import './AddNoteButton.css';

function AddNoteButton({ onClick }) {
  return (
    <button className="add-note-button" onClick={onClick}>
      +
    </button>
  );
}

export default AddNoteButton;