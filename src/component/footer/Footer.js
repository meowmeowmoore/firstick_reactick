import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ buttons, onClearCompleted, onFilter, data }) => {
  const counter = data.filter((item) => !item.complete).length;
  const todoCount = <span className="todo-count">{counter} items left</span>;
  const btn = buttons.map((item) => {
    const { id } = item;
    return (
      <li key={id}>
        <TasksFilter {...item} onFilter={() => onFilter(id)} />
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
      id: PropTypes.string,
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
      id: PropTypes.string,
      timer: PropTypes.exact({
        min: PropTypes.string,
        sec: PropTypes.string,
      }),
      timerButtons: PropTypes.exact({
        play: PropTypes.bool,
        pause: PropTypes.bool,
      }),
    })
  ),
};

Footer.defaultProps = {
  buttons: [
    {
      value: '',
      selected: false,
      id: '0',
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
      id: '0',
      timer: {
        min: '00',
        sec: '00',
      },
      timerButtons: {
        play: true,
        pause: false,
      },
    },
  ],
};
