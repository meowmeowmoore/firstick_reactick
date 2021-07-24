import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header/header";
import TaskList from "./component/main/TaskList";
import Footer from "./component/footer/Footer";


const TodoApp = () => {
    const todoData = [
        {value:'Completed task', className:'completed', id:1},
        {value: 'Editing task', className:'editing', id:2},
        {value: 'Active task', id:'3'}
    ];

    const btns = [
        {value: 'All', id: 'btn-1', className: 'selected'},
        {value: 'Active', id: 'btn-2'},
        {value: 'Completed', id: 'btn-3'}
    ];

    return (
      <section className="todoapp">
        <Header />
        <TaskList todos={todoData} />
          <Footer buttons={btns} />
      </section>
    );
};

ReactDOM.render(<TodoApp />, document.body);
