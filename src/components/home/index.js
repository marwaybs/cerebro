import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import ToDoList from './toDoList';
import NewToDo from './NewToDo';

export default class HomePage extends Component {
    constructor(props) {
		super(props);
		this.state = {
            completed: false
        };
    }

    render() {
        return (
            <div>
                <NewToDo />
                <Divider />
                <ToDoList />
            </div>
        )
    }
}

