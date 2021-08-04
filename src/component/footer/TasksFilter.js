import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ value, selected, onFilter }) => {
  let classNames = '';
  if (selected) {
    classNames += 'selected';
  }

  return (
    <button type="button" className={classNames} onClick={onFilter}>
      {value}
    </button>
  );
};

TasksFilter.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  onFilter: PropTypes.func,
};

TasksFilter.defaultProps = {
  value: '',
  selected: false,
  onFilter: () => {},
};

export default TasksFilter;
