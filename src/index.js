import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/header';
import TaskList from './component/main/TaskList';
import Footer from './component/footer/Footer';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoData: [
        { value: 'Completed task', complete: false, editing: false, hidden: false, date: new Date(2021, 6, 21) },
        { value: 'Editing task', complete: false, editing: false, hidden: false, date: new Date(2021, 6, 31) },
        { value: 'Active task', complete: false, editing: false, hidden: false, date: new Date(2021, 7, 1) },
      ],
      buttons: [
        { value: 'All', selected: true },
        { value: 'Active', selected: false },
        { value: 'Completed', selected: false },
      ],
    };

    this.onCompleted = (id) => {
      this.setState(({ todoData }) => {
        const newArray = todoData.map((item) => {
          const res = item;
          if (todoData[id] === item) {
            res.complete = !res.complete;
          }
          return res;
        });
        return {
          todoData: newArray,
        };
      });
    };

    this.onCreate = (value) => ({
      value,
      complete: false,
      editing: false,
      hidden: false,
      date: new Date(),
    });

    this.onAdd = (text) => {
      this.setState(({ todoData }) => {
        const newElement = this.onCreate(text);
        const newArray = todoData.concat(newElement);

        return {
          todoData: newArray,
        };
      });
    };

    this.onEdited = (id) => {
      this.setState(({ todoData }) => {
        const newArray = todoData.map((item) => {
          const res = item;
          if (todoData[id] === item) {
            res.editing = !res.editing;
          }
          return res;
        });
        return {
          todoData: newArray,
        };
      });
    };

    this.onDeleted = (id) => {
      this.setState(({ todoData }) => {
        const newArray = todoData.filter((item) => item !== todoData[id]);

        return {
          todoData: newArray,
        };
      });
    };

    this.onClearCompleted = () => {
      this.setState(({ todoData }) => {
        const newArray = todoData.filter((item) => !item.complete);
        return {
          todoData: newArray,
        };
      });
    };

    this.onFilter = (id) => {
      const { buttons } = this.state;
      this.toView(buttons[id]);

      this.setState(() => {
        const newArray = buttons.map((item) => {
          const res = item;
          res.selected = false;

          if (buttons[id] === item) {
            res.selected = !item.selected;
          }
          return res;
        });

        return {
          buttons: newArray,
        };
      });
    };

    this.toView = (stateBtn) => {
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

    this.onEnter = (event, id) => {
      if (event.code === 'Enter') {
        this.setState(({ todoData }) => {
          const newArray = todoData.map((item) => {
            const res = item;
            if (todoData[id] === item) {
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
  }

  render() {
    const { todoData, buttons } = this.state;
    return (
      <section className="todoapp">
        <Header onAdd={this.onAdd} />
        <TaskList
          todos={todoData}
          onDeleted={this.onDeleted}
          onCompleted={this.onCompleted}
          onEdited={this.onEdited}
          onEnter={this.onEnter}
        />
        <Footer
          buttons={buttons}
          toView={this.toView}
          onClearCompleted={this.onClearCompleted}
          onFilter={this.onFilter}
          data={todoData}
        />
      </section>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('div'));
