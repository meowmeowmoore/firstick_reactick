import React from 'react';
import NewTaskForm from "./NewTaskForm";

const Header = (props) => {
    const {onAdd} = props;
    return (
        <header className='header'>
            <h1>todos</h1>
            <NewTaskForm onAdd={onAdd}/>
        </header>
    )
}

export default Header;