import React from 'react';
import TasksFilter from "./TasksFilter";

const Footer = ({buttons, onClearCompleted, onFilter, data}) => {
    const counter = data.filter((item) => !item.complete).length;
    const todoCount = <span className="todo-count">{counter} items left</span>;
    const btn = buttons.map((item, index) => {
        return (
            <li key={index}>
                <TasksFilter
                    {...item}
                    onFilter={() => onFilter(index)}/>
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
                    onClick={onClearCompleted}>Clear completed
            </button>
        </footer>
    );
};

export default Footer;