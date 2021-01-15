import './App.css';
import React, { Component } from 'react'
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {

  state = {
    todos: [],
    noValMsg: false
  }

  componentDidMount(){
    let tasks = localStorage.getItem('tasks')
    if(tasks){
      tasks = JSON.parse(tasks);
      this.setState({todos: tasks})
    }
    else{
      localStorage.setItem('tasks', '[]');
    }
  }

  // marks as completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })  
    });
    this.addToLocal();
  }

  // delete the task 
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    this.addToLocal();
  }

  // adding new task
  addTodo = (title) => {
    if(title && title !== ''){
      this.setState({noValMsg: false})
      const newTask = {
        id: uuidv4(),
        title,
        completed: false
      }
      this.setState({todos: [...this.state.todos, newTask]});
      this.addToLocal();
    }
    else{
      this.setState({noValMsg: true})
    }
  }

  // adding to localStorage 
  addToLocal(){
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(this.state.todos));
    }, 200);
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.noValMsg ? <p style={noValMsgStyle}>Type something...</p> : null}
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

const noValMsgStyle = {
  padding: '8px',
  fontSize: '12px',
  margin: '0',
}

export default App
