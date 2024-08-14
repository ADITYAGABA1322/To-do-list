import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, editTodo, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      <span>{todo.text}</span>
      <button onClick={() => editTodo(index, prompt('Edit note:', todo.text))}>
        ✏️
      </button>
      <button onClick={() => deleteTodo(index)}>🗑️</button>
    </div>
  );
}

export default TodoItem;