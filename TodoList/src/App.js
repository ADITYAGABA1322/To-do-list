import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AddNoteButton from './components/AddNoteButton';
import NewNoteModal from './components/NewNoteModal';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const addTodo = (text) => {
    if (text) {
      setTodos([...todos, { text, completed: false }]);
    }
  };

  const editTodo = (index, newText) => {
    if (newText) {
      const newTodos = [...todos];
      newTodos[index].text = newText;
      setTodos(newTodos);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Completed') {
      return todo.completed;
    } else if (filter === 'Incomplete') {
      return !todo.completed;
    }
    return todo.text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <div className="header">
        <h1>TODO LIST</h1>
        <SearchBar
          setSearchTerm={setSearchTerm}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleFilterChange={handleFilterChange} 
        />
      </div>
      {filteredTodos.length === 0 ? (
        <div className="no-notes">
          <img src="/images/Detective-check-footprint 1.png" alt="Empty..." />
          <p>Empty...</p>
        </div>
      ) : (
        <TodoList
          todos={filteredTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      )}
      <AddNoteButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <NewNoteModal
          onClose={() => setIsModalOpen(false)}
          onSave={(text) => {
            addTodo(text);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
