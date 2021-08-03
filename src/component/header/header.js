import React from 'react';
import NewTaskForm from "./NewTaskForm";
import PropTypes from 'prop-types'

const Header = ({onAdd}) => {
    return (
        <header className='header'>
            <h1>todos</h1>
            <NewTaskForm onAdd={onAdd}/>
        </header>
    )
}

Header.propTypes = {
    onAdd: PropTypes.func,
}

Header.defaultProps = {
    onAdd: () => {}
}
export default Header;