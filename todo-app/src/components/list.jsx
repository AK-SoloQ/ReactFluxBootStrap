import React, { Component } from 'react';

class List extends Component {

    /*constructor(){
        super()
        
    }*/

    onClickDone(todo, index){
        console.log('this is prevented list and the item is ', todo, 'et  index is ', index)
        this.props.onTodoToggle(todo, index)
        
    }
    onClickX(ev) {
        ev.preventDefault();
        console.log('this is close list X')
    }
    showTodos(todos) {
        
        return (
            todos.map((item, index) => {
                return (
                    <div className="todo" key={index}>
                    <table className="table table-hover">
      <tbody>
        <tr>
          <td>
            <span className="glyphicon glyphicon-file"></span>
            {item.title}
          </td>
          <td className="text-right text-nowrap">
          {item.done ? (<button className="btn btn-xs btn-info" onClick={() => this.onClickDone(item, index)}>
                <span role="img" aria-label="close">👍</span>
            </button>) : (<button className="btn btn-xs btn-info" onClick={() => this.onClickDone(item, index)}>
                <span role="img" aria-label="close">👎</span>
            </button>)}
            
            <button className="btn btn-xs btn-warning btn-x" onClick={this.onClickX}>
              <span role="img" aria-label="close">❌</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
                        
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div className="liste">
                Le Nombres des elements todo : [{this.props.todos.length}]
                {
                    this.showTodos(this.props.todos)
                }
                
            </div>
        )
    }
}

export default List;