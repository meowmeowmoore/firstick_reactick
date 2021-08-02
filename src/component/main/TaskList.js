import React, {Component} from 'react';
import Task from "./Task";

export default class TaskList extends Component {

    render() {
        const {todos, onCompleted, onDeleted, onEdited} = this.props;

        const elements = todos.map((item, id) => {

            const {value, complete, editing, hidden, date} = item;

            let classNames = '';

            if (hidden) {
                classNames+=' hidden'
            }

            if (complete) {
                classNames += ' completed';
            }

            if (editing) {
                classNames += ' editing';
                const editingForm = <input type='text' className='edit' value={value}></input>;
                return (<li key={id.toString()} className={classNames}>
                    {editingForm}
                </li>)
            } else {
                return (<li key={id.toString()} className={classNames}>
                    <Task
                        value={value}
                        onCompleted={() => onCompleted(id)}
                        onDeleted={() => onDeleted(id)}
                        onEdited={() => onEdited(id)}
                    date={date}/>
                </li>)
            }
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
