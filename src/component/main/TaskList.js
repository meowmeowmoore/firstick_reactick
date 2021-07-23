import React from 'react';
import Task from "./Task";

const TaskList = () => {
    return (
        <section className='main'>
            <ul className='todo-list'>
                <Task />
            </ul>
        </section>
    );
}

export default TaskList;