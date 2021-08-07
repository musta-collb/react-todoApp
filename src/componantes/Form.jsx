import React, { Component } from 'react';

const Form = ({ setInputText, todos, setTodos, inputText ,setFilter}) => {
	const inputHendler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHendler = (e) => {
		e.preventDefault();
		setTodos([...todos,
			{text: inputText,
			 completed : false,
			 id: Math.floor(Math.random()*1000)
			}]);
		setInputText('');
	};
	const filterHandler =(e)=>{
		setFilter(e.target.value);
	}
	return (
		<form>
			<input
				type='text'
				className='todo-input'
				onChange={(e) => inputHendler(e)}
				value = {inputText}
			/>
			<button
				className='todo-button'
				type='submit'
				onClick={(e) => submitTodoHendler(e)}
			>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select name='todos' className='filter-todo' onChange={filterHandler}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
