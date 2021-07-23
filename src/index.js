import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header/header";
import TaskList from "./component/main/TaskList";

const TodoApp = () => {
    return (
      <section className="todoapp">
        <Header />
        <TaskList />
      </section>
    );
};

ReactDOM.render(<TodoApp />, document.body);
