import React, { useState } from 'react';
import './NewNoteModal.css';

function NewNoteModal({ onClose, onSave }) {
  const [noteText, setNoteText] = useState('');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Note</h2>
        <div className="input-box">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Input your note here..."
          />
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave(noteText)}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default NewNoteModal;