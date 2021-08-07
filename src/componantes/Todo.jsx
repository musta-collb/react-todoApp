import React, { PureComponent } from 'react';

const Todo = ({ text, todos, setTodos, id ,todo}) => {
	const deleteHandler = () => {
		const newTodos = todos.filter((todo) => {
			return todo.id != id;
		});
		setTodos(newTodos);
	};
	const completHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					item.completed = !item.completed;
					return item;
				}
				return item;
			})
		);
	};
	return (
		<div className='todo'>
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
			<button className='complete-btn' onClick={completHandler}>
				<i className='fas fa-check'></i>
			</button>
			<button className='trash-btn' onClick={deleteHandler}>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	);
};
export default Todo;
