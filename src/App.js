import React, { useState } from 'react';
import './App.css';
import Form from './componantes/Form';
import TodoList from './componantes/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<header>Mustapha's TodoList</header>
			<Form inputText ={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} />
			<TodoList todos ={todos}/>
		</div>
	);
}

export default App;
