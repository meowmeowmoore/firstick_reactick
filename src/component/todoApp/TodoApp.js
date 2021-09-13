/* eslint-disable */

import React, { Component } from 'react';
import Header from '../header';
import TaskList from '../main';
import Footer from '../footer';

export default class TodoApp extends Component {
  state = {
    todoData: [
      {
        value: 'Completed task',
        complete: false,
        editing: false,
        hidden: false,
        date: new Date(2021, 6, 21),
        id: '1',
        timer: {
          min: '00',
          sec: '02',
        },
        timerButtons: {
          play: true,
          pause: false,
        },
      },
      {
        value: 'Editing task',
        complete: false,
        editing: false,
        hidden: false,
        date: new Date(2021, 6, 31),
        id: '2',
        timer: {
          min: '05',
          sec: '02',
        },
        timerButtons: {
          play: true,
          pause: false,
        },
      },
      {
        value: 'Active task',
        complete: false,
        editing: false,
        hidden: false,
        date: new Date(2021, 7, 1),
        id: '3',
        timer: {
          min: '11',
          sec: '24',
        },
        timerButtons: {
          play: true,
          pause: false,
        },
      },
    ],
    buttons: [
      { value: 'All', selected: true, id: '1' },
      { value: 'Active', selected: false, id: '2' },
      { value: 'Completed', selected: false, id: '3' },
    ],
  };

  onCompleted = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        const res = item;
        if (id === item.id) {
          res.complete = !res.complete;
        }
        return res;
      });
      return {
        todoData: newArray,
      };
    });
  };

  onCreate = (value, min, sec) => ({
    value,
    complete: false,
    editing: false,
    hidden: false,
    date: new Date(),
    id: (this.idMax() + 1).toString(),
    timerButtons: {
      play: true,
      pause: false,
    },
    timer: {
      min: this.toTimerFormat(min),
      sec: this.toTimerFormat(sec),
    },
  });

  toTimerFormat = (num) => {
    if (num === '') {
      return `00`;
    }
    if (num >= 0 && num <= 9) {
      return `0${num}`;
    }
    return num;
  };

  idMax = () => {
    const { todoData } = this.state;
    const arrId = todoData.map((item) => item.id);
    return Math.max(...arrId);
  };

  onAdd = (text, min, sec) => {
    this.setState(({ todoData }) => {
      const newElement = this.onCreate(text, min, sec);
      const newArray = todoData.concat(newElement);

      return {
        todoData: newArray,
      };
    });
  };

  onEdited = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        const res = item;
        if (id === item.id) {
          res.editing = !res.editing;
        }
        return res;
      });
      return {
        todoData: newArray,
      };
    });
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => item.id !== id);

      return {
        todoData: newArray,
      };
    });
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => !item.complete);
      return {
        todoData: newArray,
      };
    });
  };

  onFilter = (id) => {
    const { buttons } = this.state;

    this.outputFilteredList(buttons[id - 1]);

    this.setState(() => {
      const newArray = buttons.map((item) => {
        const res = item;
        res.selected = false;

        if (id === item.id) {
          res.selected = !item.selected;
        }
        return res;
      });

      return {
        buttons: newArray,
      };
    });
  };

  outputFilteredList = (stateBtn) => {
    this.setState(({ todoData }) => {
      const filterTask = todoData.map((item) => {
        const res = item;
        res.hidden = false;
        if (stateBtn.value === 'Completed') {
          if (!item.complete) {
            res.hidden = !item.hidden;
          }
        } else if (stateBtn.value === 'Active') {
          if (item.complete) {
            res.hidden = !item.hidden;
          }
        }
        return res;
      });
      return {
        todoData: filterTask,
      };
    });
  };

  onEnter = (event, id) => {
    if (event.code === 'Enter') {
      this.setState(({ todoData }) => {
        const newArray = todoData.map((item) => {
          const res = item;
          if (id === item.id) {
            res.value = event.target.value;
          }
          return res;
        });

        return {
          todoData: newArray,
        };
      });
    }
  };

  turnOnTimer = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        const res = item;
        if (item.id === id) {
          res.timerButtons = {
            play: !res.timerButtons.play,
            pause: !res.timerButtons.pause,
          };
        }
        return res;
      });
      return {
        todoData: newArray,
      };
    });
  };

  countDown = (id, min, sec) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        const res = item;
        if (item.id === id) {
          res.timer = {
            min: min,
            sec: sec,
          };
        }
        return res;
      });
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData, buttons } = this.state;

    return (
      <>
        <header className="header">
          <Header onAdd={this.onAdd} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.onDeleted}
            onCompleted={this.onCompleted}
            onEdited={this.onEdited}
            onEnter={this.onEnter}
            turnOnTimer={this.turnOnTimer}
            toTimerFormat={this.toTimerFormat}
            countDown={this.countDown}
            finishedTimer={this.finishedTimer}
          />
          <Footer buttons={buttons} onClearCompleted={this.onClearCompleted} onFilter={this.onFilter} data={todoData} />
        </section>
      </>
    );
  }
}
