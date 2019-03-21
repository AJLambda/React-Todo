import React from 'react';

// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

const TodoForm = (props) => {
    return (
        
            <form>

                <input 
                    value = {props.task}
                    name= "task" 
                    placeholder = "...todo"
                    onChange = {props.handleChanges} 
                />

                <button onClick = {props.addTodo}>Add todo</button>
                <button onClick = {props.clearCompleted}>Clear Completed</button>

            </form>
        
    );
};

export default TodoForm;