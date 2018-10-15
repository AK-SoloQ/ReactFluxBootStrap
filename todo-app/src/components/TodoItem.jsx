import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

class TodoItem  extends Component {
    
    render() {
        let   item = this.props.item;
        let   index = this.props.index;
        let   itemIcon = this.props.itemIcon;
        return (
            
                <tr>
                    <td className="text-left text-nowra col-md-6 TableItem1">
                    <div className="form-check disabled">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" disabled="" onClick={(e) => { this.props.addToCheckList(index, item, e.target.checked)}} />
                            {item.title}
                        </label>
                    </div>
                    </td>
                    <td className="text-center text-nowra col-md-3 TableItem2">
                        <button className="btn btn-xs btn-info" onClick={() => this.props.onClickDone(item, index)}>
                            {itemIcon}
                        </button>
                    </td>
                    <td className="text-right text-nowra col-md-3 TableItem2"> 
                    <button className="btn btn-xs btn-warning btn-x" onClick={() => this.props.onClickX(index)}>
                            <span role="img" aria-label="close">❌</span>
                        </button>
                    </td>
                </tr>
            
        )
    }
}
TodoItem.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object.isRequired,
    itemIcon: PropTypes.object,
    onClickDone: PropTypes.func,
    onClickX: PropTypes.func,
    addToCheckList: PropTypes.func,
};
export  default TodoItem;