import React, {Component} from 'react';
import Task from "./Task";

export default class TaskList extends Component {

    render() {
        const {todos, onCompleted, onDeleted} = this.props;

        const elements = todos.map((item, index) => {
            const {value, complete, id} = item;
            let classNames = '';

            if (complete) {
                classNames+= 'completed';
            }

            return (<li key={index.toString()} className={classNames}>
                <Task
                    value={value}
                    onCompleted={() => onCompleted(index)}
                    onDeleted={() => onDeleted(id)}/>
            </li>)
        })

        return (
            <section className='main'>
                <ul className='todo-list'>
                    {elements}
                </ul>
            </section>
        );
    }
}
