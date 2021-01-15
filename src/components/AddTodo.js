import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onTitleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add New Task and press Enter" value={this.state.title} onChange={this.onTitleChange} />
                {/* <button type="submit">add</button> */}
            </form>
        )
    }
}

export default AddTodo
