import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item.js';
import  './todo-list.css'

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

	const elements = todos.map((item) => {
		const {id, ...itemprops}=item;
		return (
			<li key={id} className="list-group-item">
				<TodoListItem 
					{...itemprops}
					onDeleted = {()=>onDeleted(id)}
					onToggleImportant={()=>onToggleImportant(id)}
					onToggleDone={() =>  onToggleDone(id)}/>
			</li>
		);
	});
	
	return (	
		<ul className="list-group todo-list">
			{elements}
		</ul>
	);
};

export default TodoList;