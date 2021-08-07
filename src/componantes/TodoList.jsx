import React, { Component } from 'react';
import Todo from './Todo';
//import componantes

const TodoList = ({ todos, setTodos,filteredTodos }) => {
	//Events
	return (
		<div class='todo-container'>
			<ul class='todo-list'>
				{filteredTodos.map((element) => (
					<Todo
						text={element.text}
						key={element.id}
						todos={todos}
						setTodos={setTodos}
						id = {element.id}
						todo = {element}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
