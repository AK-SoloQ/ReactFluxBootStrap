import React, { Component } from 'react'
import Todo from './todo'
import todoStore from "../store/TodoStore"
import * as TodoAction  from '../actions/todoActions'

export default class Todos extends Component {
  constructor() {
        super()
        this.state = {
              todos : todoStore.getAll(),
              todoText : ''
        }
  }
  componentWillMount() {
        todoStore.on('change', ()=> {
              this.setState({
                    todos : todoStore.getAll()
              })
        })
  }
  onCLickAddTodo() {

        TodoAction.createTodo(this.state.todoText)
        this.setState({
              todoText:''
        })
  }
  onCLickDeleteTodo() {
        TodoAction.deleteTodo(1)
  }
    handleChange(event) {
    this.setState({todoText: event.target.value});
  }
  render() {
        const {todos} = this.state
        const TodoComponent = todos.map((todo) => {
              return <Todo key={todo.id}{...todo}></Todo>
        })
    return (
      <div>
      <div className='row'>
            <div className='col-sm-6'>
            
            <h1> The  list </h1>
                  this is todos list
                  {TodoComponent}
            </div>
            <div className='col-sm-6'>
            <h1> The formular</h1>
                  <label>Add Your ToDo Item</label>
            <div className="input-group mb-3">
             <div className="input-group-prepend">
               <span className="input-group-text" id="basic-addon3">This is the ToDo Item</span>
             </div>
             <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.todoText} onChange={this.handleChange.bind(this)}/>
            </div>
                  <span className="input-group-btn">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onCLickAddTodo.bind(this)}>Add Todo Item!</button>
                        <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.onCLickDeleteTodo.bind(this)}>Delete Todo Item!</button>
                  </span>
            </div>
      </div>
      </div>
    )
  }
}
