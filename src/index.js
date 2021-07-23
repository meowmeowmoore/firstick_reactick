import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header/header";
import TaskList from "./component/main/TaskList";

const TodoApp = () => {
    const todoData = [
        {className:'completed', id:1},
        {className:'editing', id:2},
        {id:'3'}
    ];

    return (
      <section className="todoapp">
        <Header />
        <TaskList todos={todoData} />
      </section>
    );
};

ReactDOM.render(<TodoApp />, document.body);
