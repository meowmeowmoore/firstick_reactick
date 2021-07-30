import React, {Component} from 'react';
import Task from "./Task";

export default class TaskList extends Component {

    render() {
        const {todos, onCompleted, onDeleted, onEdited} = this.props;

        const elements = todos.map((item, id) => {

            // console.log(item)
            const {value, complete, editing, hidden} = item;

            let classNames = '';

            if (hidden) {
                classNames+=' hidden'
            }

            if (complete) {
                classNames += ' completed';
            }
//не стирается вэлъю у инпута для изменения задачи
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
                        onEdited={() => onEdited(id)}/>
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
