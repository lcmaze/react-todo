import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle(){
        return this.props.todo.completed ? {background: '#6dd36d'} : {background: '#eee'}
    }

    getBtnStyle(){
        return this.props.todo.completed ? {background: '#fff', color: 'red'} : {background: '#d83232', color: '#fff'}
    }
    getTitleStyle(){
        return this.props.todo.completed ? {color: 'white'} : {color: '#424242'}
    }

    render() {
        const { title, id } = this.props.todo;
        return (
            <div className="todo-item" style={this.getStyle()}>
                <input type="checkbox" id={`checkbox${this.props.todo.id}`} onChange={this.props.markComplete.bind(this, id)} checked={this.props.todo.completed ? true : false} />
                <label htmlFor={`checkbox${this.props.todo.id}`} style={this.getTitleStyle()}><span>{ title }</span></label>
                {/* <p style={this.getTitleStyle()}>{ title }</p> */}
                <button onClick={this.props.deleteTodo.bind(this, id)} style={this.getBtnStyle()}>delete</button>
            </div>
        )
    }
}

// prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
