import React from 'react';
import "./Todo.css"

//<Todo /> is a component that takes in the todo data and displays the task to the screen.


//Add the functionality to toggle your todo's completed flag from false to true.
// Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true.

function Todo(props) {
    return (
        <div
            className={`todo${props.todo.completed ? "-completed": ""}`}
            onClick={() => props.toggleTodo(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;

