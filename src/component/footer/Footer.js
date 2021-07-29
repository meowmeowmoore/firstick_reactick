import React from 'react';
import TasksFilter from "./TasksFilter";

const Footer = ({buttons, onClearCompleted}) => {
    const todoCount = <span className="todo-count">1 items left</span>;
    const btn = buttons.map((item) => {
        const {id, ...inf} = item;

        return (
            <li key={id}>
                <TasksFilter {...inf}/>
            </li>
        );
    })

    return (
        <footer className='footer'>
            {todoCount}
            <ul className='filters'>
                {btn}
            </ul>
            <button className='clear-completed'
                    onClick={onClearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;