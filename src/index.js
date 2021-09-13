import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './component/todoApp';

const App = () => (
  <section className="todoapp">
    <TodoApp />
  </section>
);

ReactDOM.render(<App />, document.getElementById('div'));
