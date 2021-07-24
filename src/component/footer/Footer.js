import React from 'react';
import TasksFilter from "./TasksFilter";

const Footer = ({buttons}) => {
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
        </footer>
    );
};

export default Footer;