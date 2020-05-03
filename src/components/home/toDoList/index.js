import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Loader, Header, Container } from 'semantic-ui-react'
import { todos } from '../../../store/store';
import TodoItem from './ToDoItem';

const Todos = observer(class Todos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false
		};
	}
    render() {
        const {docs, query} = todos;
        const { isLoading } = todos;
        const list = docs.map((doc) => <TodoItem doc={doc} />);
        return (
            <Container className="to-do-list-container">
                <Header as='h3'>List of Tasks</Header>
                {list}
                {isLoading ? <Loader />: undefined}
            </Container>
        )
    }
})

export default Todos;
