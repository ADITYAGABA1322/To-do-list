import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, editTodo, deleteTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(index, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span> /* Apply the .todo-text class */
      )}
      <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
        ✏️
      </button>
      <button className="delete-button" onClick={() => deleteTodo(index)}>
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
