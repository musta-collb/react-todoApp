import React, { useState ,useEffect} from 'react';
import './App.css';
import Form from './componantes/Form';
import TodoList from './componantes/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('All');
	const [filteredTodos, setFilteredTodos] = useState([]);
	const saveToLocal = ()=>{
		if(localStorage.getItem("todos") === null){
			localStorage.setItem("todos", JSON.stringify([]));
		}
		else{
			localStorage.setItem("todos", JSON.stringify(todos));
		}
	}
	useEffect(()=>{
		filterHandler();
		saveToLocal();
	},[filter])
	const filterHandler = () => {
		switch (filter) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed == true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed == false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	return (
		<div className='App'>
			<header>Mustapha's TodoList</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				setTodos={setTodos}
				todos={todos}
				setFilter={setFilter}
			/>
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;
