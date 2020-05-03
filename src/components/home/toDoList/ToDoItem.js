import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Input, Checkbox, Container } from 'semantic-ui-react'


class ToDoItem extends Component {

    onPressDelete = async () => {
        const {doc} = this.props;
        if (this._deleting) return;
        this._deleting = true;
        try {
            await doc.delete();
            this._deleting = false;
        }
        catch (err) {
            this._deleting = false;
        }
    };
    
    onPressCheck = async () => {
        const {doc} = this.props;
        await doc.update({
            completed: !doc.data.completed
        });
    };
    
    onTextChange = async (e) => {
        const {doc} = this.props;
        await doc.update({
			[e.target.name]: e.target.value
        });
    };

    render() {
        const {doc} = this.props;
        const { task, repetitions, completed } = doc.data;
        return (
            <Container className="to-do-item-container">
                <Input onChange={this.onTextChange} name="task" label="Task" type='text' value={task} />
                <Input onChange={this.onTextChange} name="repetitions" label="Repetitions" type='text' value={repetitions} />
                <Checkbox onChange={this.onPressCheck} checked={completed} />
            </Container>
        )
    }
}

export default observer(ToDoItem);
