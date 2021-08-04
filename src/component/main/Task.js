import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Task = ({ value, onCompleted, onDeleted, onEdited, date }) => {
  const distanceToNow = `created ${formatDistanceToNow(new Date(date), { addSuffix: true, includeSeconds: true })}`;
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description" onClick={onCompleted} role="presentation">
          {value}
        </span>
        <span className="created">{distanceToNow}</span>
      </label>
      <button type="button" aria-label="Edit" className="icon icon-edit" onClick={onEdited} />
      <button type="button" aria-label="Destroy" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
};

export default Task;

Task.propTypes = {
  value: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdited: PropTypes.func,
};

Task.defaultProps = {
  value: '',
  date: new Date(2021, 1, 1),
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
};
