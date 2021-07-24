import React from 'react';
import Task from "./Task";

const TaskList = ({todos}) => {
    const elements = todos.map((item) => {
        const {className, id, value} = item;
        return (
            <li key={id} className={className ? className : null}>
                <Task value={value}/>
            </li>
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