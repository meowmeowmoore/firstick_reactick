import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ buttons, onClearCompleted, onFilter, data }) => {
  const counter = data.filter((item) => !item.complete).length;
  const todoCount = <span className="todo-count">{counter} items left</span>;
  const btn = buttons.map((item, index) => {
    const id = index;
    return (
      <li key={id}>
        <TasksFilter {...item} onFilter={() => onFilter(index)} />
      </li>
    );
  });

  return (
    <footer className="footer">
      {todoCount}
      <ul className="filters">{btn}</ul>
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  onClearCompleted: PropTypes.func,
  onFilter: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      complete: PropTypes.bool,
      editing: PropTypes.bool,
      hidden: PropTypes.bool,
      date: PropTypes.instanceOf(Date),
    })
  ),
};

Footer.defaultProps = {
  buttons: [
    {
      value: '',
      selected: false,
    },
  ],
  onClearCompleted: () => {},
  onFilter: () => {},
  data: [
    {
      value: '',
      complete: false,
      editing: false,
      hidden: false,
      date: new Date(2021, 1, 1),
    },
  ],
};
