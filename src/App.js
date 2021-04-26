import React,{ useState } from 'react';
import './App.css';
import From from './components/From';
import TodoList from './components/TodoList';
function App() {
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Ed's Todo List {inputText}</h1>
    </header>
    <From todos={todos} setTodos={setTodos} setInputText={setInputText} />
    <TodoList />
    </div>
  );
}

export default App;
