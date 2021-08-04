import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from './NewTaskForm';

const Header = ({ onAdd }) => (
  <header className="header">
    <h1>todos</h1>
    <NewTaskForm onAdd={onAdd} />
  </header>
);

Header.propTypes = {
  onAdd: PropTypes.func,
};

Header.defaultProps = {
  onAdd: () => {},
};
export default Header;
