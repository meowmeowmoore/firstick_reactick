import React from 'react';
import Task from "./Task";

const TaskList = ({todos}) => {
    const elements = todos.map((item) => {
        const {className, id} = item;
        return (
            <li key={id} className={className}><Task /></li>
        )
    })

    return (
        <section className='main'>
            <ul className='todo-list'>
                {elements}
            </ul>
        </section>
    );
}

export default TaskList;