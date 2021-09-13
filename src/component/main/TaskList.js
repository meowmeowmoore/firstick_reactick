/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ todos, onCompleted, onDeleted, onEdited, onEnter, turnOnTimer, toTimerFormat, countDown }) => {
  const elements = todos.map((item) => {
    const { value, complete, editing, hidden, date, id, timerButtons, timer } = item;

    let classNames = '';

    if (hidden) {
      classNames += ' hidden';
    }

    if (complete) {
      classNames += ' completed';
    }

    if (editing) {
      classNames += ' editing';
      const editingForm = <input className="edit" onKeyUp={() => onEnter(id)} />;
      return (
        <li key={id} className={classNames}>
          {editingForm}
        </li>
      );
    }

    return (
      <li key={id} className={classNames}>
        <Task
          value={value}
          id={id}
          timer={timer}
          onCompleted={() => onCompleted(id)}
          onDeleted={() => onDeleted(id)}
          onEdited={() => onEdited(id)}
          date={date}
          turnOnTimer={(event) => turnOnTimer(event, id)}
          timerButtons={timerButtons}
          toTimerFormat={toTimerFormat}
          countDown={countDown}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      hidden: PropTypes.bool.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      id: PropTypes.string.isRequired,
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
  onCompleted: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdited: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  turnOnTimer: PropTypes.func,
};

TaskList.defaultProps = {
  todos: [
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
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
  onEnter: () => {},
  turnOnTimer: () => {},
};
