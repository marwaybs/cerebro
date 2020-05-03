import React, { Component } from 'react'
import { Input, Checkbox, Button, Header, Container } from 'semantic-ui-react'
import { todos } from '../../store/store';

export default class NewToDo extends Component {
    constructor(props) {
		super(props);
		this.state = {
            completed: false
        };
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };

    handleCheckBoxChange = (e, data) => {
		this.setState({
			[data.name]: data.checked
		});
	  }

    addToDo = async () => {
        try {
            const { task, repetitions, completed } = this.state;
            await todos.add({
                task: task,
                repetitions: repetitions,
                completed: completed
            });
        }
        catch (err) {
            console.log('Add Error', err);
        }
    };

    render() {
        console.log('add to do component');
        return (
            <Container className="new-to-do-container">
                <Header as='h3'>New Task</Header>
                <Input label="Task Name" type="text" name="task" placeholder='Feed Cat' onChange={this.handleChange} />
                <Input label="repetitions" type="number" name="repetitions" placeholder='20' onChange={this.handleChange} />
                <Checkbox label="Complete?" name="complete" name="completed" placeholder='To Do Name' onChange={this.handleCheckBoxChange} />
                <Button onClick={this.addToDo}>Add</Button>
            </Container>
        )
    }
}
