import React from 'react';
import TodoItem from './TodoItem.js';
import './TodoList.css';

function TodoList({ todos, editTodo, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No notes available...</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;