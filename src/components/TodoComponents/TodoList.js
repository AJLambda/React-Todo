// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (

        <div>

            {props.todoList.map((item, index) => (
                <Todo key={index} todo = {item} />
            ))}

        </div>

    )
}


export default TodoList;