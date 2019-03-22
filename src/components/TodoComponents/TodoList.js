// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
    
    <div className = "todoWrapper">
        
            {props.todoList.map((item, index) => (
                <Todo todo = {item} key = {index} toggleTodo={props.toggleTodo}/>
            ))}

    </div>

    )
}


export default TodoList;