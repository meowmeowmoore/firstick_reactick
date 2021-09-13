/* eslint-disable */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    value: '',
    min: '',
    sec: '',
  };

  newTaskText = (event) => {
    if (event.target.name === 'value') {
      this.setState({
        value: event.target.value,
      });
    }
    if (event.target.name === 'min') {
      this.setState({
        min: event.target.value,
      });
    }
    if (event.target.name === 'sec') {
      this.setState({
        sec: event.target.value,
      });
    }
  };

  addToList = (event) => {
    const { value, min, sec } = this.state;
    const { onAdd } = this.props;
    if (event.code === 'Enter') {
      onAdd(value, min, sec);
      this.resetState();
    }
  };

  resetState = () => {
    this.setState({
      value: '',
      sec: '',
      min: '',
    });
  };

  render() {
    const { value, min, sec } = this.state;

    return (
      <form className="new-todo-form" onKeyUp={this.addToList}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          name="value"
          onChange={this.newTaskText}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="text"
          value={min}
          name="min"
          onChange={this.newTaskText}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="text"
          value={sec}
          name="sec"
          onChange={this.newTaskText}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onAdd: () => {},
};
