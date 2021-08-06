import React, { Component } from 'react';
import Todo from './Todo';
//import componantes

const TodoList = ({ todos }) => {
	return (
		<div class='todo-container'>
			<ul class='todo-list'>
				{todos.map((element) => (
					<Todo text ={element.text} key={element.id}/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
