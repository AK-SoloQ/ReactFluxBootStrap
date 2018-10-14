import React, { Component } from 'react';

class TodoForm extends Component {

    onClick(eve) {
        const txt = this.todoTitle.value;
        this.props.onNewTodo({
            title:txt,
            done:false,
            createAt: new Date()
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Item to do </label>
                        <div className="input-group"> <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                            <input type="text" className="form-control" name="todo" id="todo" placeholder="Requested to do Item" required ref={(input) => this.todoTitle = input}  />
                        </div>
                    </div>
                     <input type="submit" name="submit" id="submit"  className="btn btn-primary pull-right btn-lg" onClick={this.onClick.bind(this)}/>
                 </div>
             </div>
            )
         }
}
export default TodoForm;
                        
