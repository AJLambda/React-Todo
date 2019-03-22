import React from 'react';


import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



//Array of Todo objects

// The task field is the todo title that will be shown to the user.
// The completed field should default to false and will be the field that we toggle when we complete a todo.
// The id field is a unique Time Stamp that will be assigned by Date.now().

const todoData = [
  {
    task: 'Feed the dog',
    id: 0,
    completed: false
  },
  {
    task: 'Walk the human',
    id: 1,
    completed: false
  },
  {
    task: 'Take out the clothes',
    id: 2,
    completed: false
  },
  {
    task: 'Wash the trash',
    id: 3,
    completed: false
  },
]

// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData,
      task: ''
    };
  };
  
  handleChanges = event => {
    // update the todo property on state
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, 
        {
          task: this.state.task,
          id: Date.now(), 
          completed: false
        }
      ],
      task: ''
    });
  };
  
  toggleTodo = id => {
    const newList = this.state.todoList.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    })

    this.setState ({todoList: newList})
  }
  
  render() {
    return (
      <div>

        <h2>Todo List: MVP</h2>

        <TodoList 

          todoList={this.state.todoList} 
          toggleTodo={this.toggleTodo}
        />

        <TodoForm 

          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          task={this.state.task}

        />
        
      </div>
    );
  }
}

export default App;
