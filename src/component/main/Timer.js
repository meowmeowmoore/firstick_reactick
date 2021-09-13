/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  state = {
    min: this.props.timer.min,
    sec: this.props.timer.sec,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    const { min, sec } = this.state;
    const { turnOnTimer, onCompleted, id, toTimerFormat } = this.props;

    if (min == '00' && sec == '00') {
      turnOnTimer(id);
      onCompleted();
    }
    if (sec > 0 && min >= 0) {
      this.setState({
        sec: toTimerFormat(sec - 1),
      });
    }
    if (sec == 0 && min != 0) {
      this.setState({
        sec: toTimerFormat(59),
        min: toTimerFormat(min - 1),
      });
    }
  }

  componentWillUnmount() {
    const { countDown, id } = this.props;
    const { min, sec } = this.state;
    countDown(id, min, sec);
    clearInterval(this.interval);
  }

  render() {
    const { min, sec } = this.state;
    return (
      <>
        {min}:{sec}
      </>
    );
  }
}

Timer.propTypes = {
  timerButtons: PropTypes.exact({
    play: PropTypes.bool,
    pause: PropTypes.bool,
  }),
  turnOnTimer: PropTypes.func,
  id: PropTypes.string,
};

Timer.defaultProps = {
  timerButtons: {
    play: true,
    pause: false,
  },
  turnOnTimer: () => {},
  id: '0',
};
