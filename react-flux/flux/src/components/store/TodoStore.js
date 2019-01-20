import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()
    this.todos = [{
      id: 1,
      text: 'this is 1'
    }, {
      id: 2,
      text: 'this is 2'
    }]
  }
  getAll () {
    return this.todos
  }
  createTodo (message) {
    this.todos.push({
      id: (Number(this.todos.length) + 1),
      text: message
    })
    this.emit('change')
  }
  deleteTodo (id) {
    this.todos.splice(id, 1)
    this.emit('change')
  }
  handleActions (action) {
    console.log('todostore actions ', action)
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text)
        break
      }
      case 'DELETE_TODO': {
        this.deleteTodo(action.id)
        break
      }
      default : {
        console.log('il y a rien a faire')
      }
    }
  }
}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher
export default todoStore
