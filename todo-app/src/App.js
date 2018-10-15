import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/list';
import TodoForm from './components/todoForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      selectedList: []
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
  deleteTodo(index){
    let conf = window.confirm('Voulez vous supprimer cet element');
    if(conf) {
      let newTodos = this.state.todos;
      newTodos.splice(index, 1);
      this.setState({
        todos: newTodos
      })
    }
    
  }
  supprimerSelected() {
    let _selectedList = this.state.selectedList;
    let _todos = this.state.todos;
    for(let  el of _selectedList) {
      let Cindex = _todos.findIndex( (value) => {
        if(value === el.item) {
          return  true ;
        }else{
          return false;
        }
      });
      _todos.splice(Cindex, 1);
    }
    this.setState({
      todos: _todos
    });
  }
  SelectedList(list) {
    this.setState({
      selectedList: list
    });
  } 
  render() {
    let disabled = this.state.selectedList.length > 0 ? false : true;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            To do List project
          </p>
          
        </header>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)}></TodoForm>     
        <List todos={this.state.todos} onTodoToggle={this.toggleTodoState.bind(this)} deleteTodo={this.deleteTodo.bind(this)} SelectedList={this.SelectedList.bind(this)}></List>
        <div className="row">
          < div className = "col-md-6 col-sm-12 mButton" >
            < button type = "button"
            className = "btn btn-danger btn-lg btn-block"
            disabled = {
              disabled
            }
            onClick = {
              () => {
                this.supprimerSelected()
              }
            } > supprimer les selectionnes </button>
          </div>
          <div className="col-md-6 col-sm-12 mButton">
           < button type = "button"
           className = "btn btn-info btn-lg btn-block"
           disabled = {
             disabled
           }
           onClick = {
             () => {
               console.log("hellow")
             }
           } >  les selectionner </button>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
