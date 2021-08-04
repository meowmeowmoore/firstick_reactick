import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ todos, onCompleted, onDeleted, onEdited, onEnter }) => {
  const elements = todos.map((item, id) => {
    const { value, complete, editing, hidden, date } = item;

    let classNames = '';

    if (hidden) {
      classNames += ' hidden';
    }

    if (complete) {
      classNames += ' completed';
    }

    if (editing) {
      classNames += ' editing';
      const editingForm = <input className="edit" onKeyUp={(event) => onEnter(event, id)} />;
      return (
        <li key={id.toString()} className={classNames}>
          {editingForm}
        </li>
      );
    }
    return (
      <li key={id.toString()} className={classNames}>
        <Task
          value={value}
          onCompleted={() => onCompleted(id)}
          onDeleted={() => onDeleted(id)}
          onEdited={() => onEdited(id)}
          date={date}
        />
      </li>
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

export default TaskList;

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      complete: PropTypes.bool,
      editing: PropTypes.bool,
      hidden: PropTypes.bool,
      date: PropTypes.instanceOf(Date),
    })
  ),
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdited: PropTypes.func,
  onEnter: PropTypes.func,
};

TaskList.defaultProps = {
  todos: [
    {
      value: '',
      complete: false,
      editing: false,
      hidden: false,
      date: new Date(2021, 1, 1),
    },
  ],
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
  onEnter: () => {},
};
