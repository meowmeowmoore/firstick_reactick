/* eslint-disable */

import React from 'react';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import Timer from './Timer';

const Task = ({
  value,
  id,
  timer,
  onCompleted,
  onDeleted,
  onEdited,
  date,
  turnOnTimer,
  countDown,
  timerButtons,
  toTimerFormat,
}) => {
  const distanceToNow = `created ${formatDistanceToNow(new Date(date), { addSuffix: true, includeSeconds: true })}`;

  const timerComponent = !timerButtons.play ? (
    <Timer
      timer={timer}
      id={id}
      turnOnTimer={turnOnTimer}
      onCompleted={() => onCompleted(id)}
      toTimerFormat={toTimerFormat}
      countDown={countDown}
    />
  ) : (
    `${timer.min}:${timer.sec}`
  );

  const playClassName = 'icon icon-play';
  const pauseClassName = 'icon icon-pause';
  // const finishedClassName = 'icon icon-play icon-finished'
  const { play } = timerButtons;
  const icon = play ? playClassName : pauseClassName;

  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <div className="view-label">
        <span className="title" onClick={() => onCompleted(id)} role="presentation">
          {value}
        </span>
        <span className="description" role="presentation">
          <button type="button" className={icon} aria-label="play" onClick={() => turnOnTimer(id)} />
          {timerComponent}
        </span>
        <span className="description">{distanceToNow}</span>
      </div>
      <button type="button" aria-label="Edit" className="icon icon-edit" onClick={onEdited} />
      <button type="button" aria-label="Destroy" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
};

export default Task;

Task.propTypes = {
  value: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdited: PropTypes.func.isRequired,
  turnOnTimer: PropTypes.func,
  id: PropTypes.string.isRequired,
  timer: PropTypes.exact({
    min: PropTypes.string,
    sec: PropTypes.string,
  }),
  timerButtons: PropTypes.exact({
    play: PropTypes.bool,
    pause: PropTypes.bool,
  }),
};

Task.defaultProps = {
  value: '',
  id: '0',
  timerButtons: {
    play: true,
    pause: false,
  },
  timer: {
    min: '00',
    sec: '00',
  },
  date: new Date(2021, 1, 1),
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
  turnOnTimer: () => {},
};
