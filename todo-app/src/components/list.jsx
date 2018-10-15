import React, { Component } from 'react';

import TodoItem from './TodoItem';
class List extends Component {

    constructor(){
        super();
        this.state = {
            listChecked: []
        }
    }

    onClickDone(todo, index){
        console.log('this is prevented list and the item is ', todo, 'et  index is ', index)
        this.props.onTodoToggle(todo, index);
        
    }
    onClickX(index) {
        this.props.deleteTodo(index);
    }

    addToCheckList(index, item, checked) {
        console.time('add');
        var newListChecked = this.state.listChecked;
        if (checked) {
            newListChecked.push({
                index: index,
                item: item
            });
            this.setState({
                listChecked: newListChecked
            });
        } else {
            var cIndex = newListChecked.findIndex((value) => {
                if(value.index === index) {
                    return true;
                }
                return false;
            });
            newListChecked.splice(cIndex,1);
            this.setState({
                listChecked: newListChecked
            });
        }
        console.timeEnd('add');
        this.props.SelectedList(this.state.listChecked);
    }
    showTodos(todos) {
        
        return (
            <table className="table table-hover" >
                <tbody  > 

            {todos.map((item, index) => {
                let itemIcon = item.done ? (<span role="img" aria-label="close">👍 </span>) : (<span role="img" aria-label="close">👎 </span>);
                        return (<TodoItem index={index} item={item} itemIcon={itemIcon} onClickDone={this.onClickDone.bind(this)} onClickX={this.onClickX.bind(this)} key={index} addToCheckList={this.addToCheckList.bind(this)}></TodoItem>   
                ) 
            })}
                </tbody >
            </table>
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