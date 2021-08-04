import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.newTaskText = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

    this.addToList = (event) => {
      const text = '';
      const { onAdd } = this.props;
      const { value } = this.state;
      if (event.code === 'Enter') {
        onAdd(value);
        this.setState({
          value: text,
        });
      }
    };
  }

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.newTaskText}
        onKeyUp={this.addToList}
        value={value}
      />
    );
  }
}

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onAdd: () => {},
};
