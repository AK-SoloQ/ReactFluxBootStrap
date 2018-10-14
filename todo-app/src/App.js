import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/list';
import TodoForm from './components/todoForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: []
    }
  }
  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({todos:newTodoList});
  }
  toggleTodoState(todo, index ){
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    
    this.setState({
      todos : newTodos
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            To do List project
          </p>
          
        </header>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)}></TodoForm>
      <List todos={this.state.todos} onTodoToggle={this.toggleTodoState.bind(this)}></List>
      
      </div>
    );
  }
}

export default App;
