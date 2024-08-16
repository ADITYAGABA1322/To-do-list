import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AddNoteButton from './components/AddNoteButton';
import NewNoteModal from './components/NewNoteModal';
import './App.css';

function App() {
  const storedTheme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(storedTheme || 'dark');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('current_theme', theme);
    const themeInStorage = localStorage.getItem('current_theme');
  }, [theme]);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      console.log('Todos loaded from localStorage:', JSON.parse(storedTodos));
    } else {
      console.log('No todos found in localStorage, starting with an empty list.');
    }
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos saved to localStorage:', todos);
  }, [todos]);

  const addTodo = (text) => {
    if (text) {
      setTodos([...todos, { text, completed: false }]);
      console.log('Added new todo:', text);
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
          darkMode={theme === 'dark'}
          setDarkMode={(isDarkMode) => setTheme(isDarkMode ? 'dark' : 'light')}
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