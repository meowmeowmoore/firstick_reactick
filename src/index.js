import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header/header";
import TaskList from "./component/main/TaskList";
import Footer from "./component/footer/Footer";


export default class TodoApp extends Component {

    constructor() {
        super();

        this.state = {
            todoData: [
                {value: 'Completed task', complete: false, editing: false, hidden: false},
                {value: 'Editing task', complete: false, editing: false, hidden: false},
                {value: 'Active task', complete: false, editing: false, hidden: false}
            ],
            btns: [
                {value: 'All', selected: false},
                {value: 'Active', selected: false},
                {value: 'Completed', selected: false}
            ]
        };

        this.onCompleted = (id) => {
            this.setState(({todoData}) => {

                const newArray = todoData.map((item) => {
                    if (todoData[id] === item) {
                        item.complete = !item.complete;
                    }
                    return item;
                })
                return {
                    todoData: newArray,
                }
            })
        }

        this.onCreate = (value) => {
            const newElement = {
                value: value,
                complete: false,
                editing: false,
            };
            return newElement;
        }

        this.onAdd = (text) => {
            this.setState(({todoData}) => {
                const newElement = this.onCreate(text);
                const newArray = todoData.concat(newElement);

                return {
                    todoData: newArray,
                }
            })
        }

        this.onEdited = (id) => {
            this.setState(({todoData}) => {

                const newArray = todoData.map((item) => {
                    if (todoData[id] === item) {
                        item.editing = !item.editing;
                    }
                    return item;
                })
                return {
                    todoData: newArray,
                }
            })
        }

        this.onDeleted = (id) => {
            this.setState(({todoData}) => {
                const newArray = todoData.filter((item) => {
                    return item !== todoData[id];
                });

                return {
                    todoData: newArray
                }
            });
        }

        this.onClearCompleted = () => {
            this.setState(({todoData}) => {
                const newArray = todoData.filter((item) => {
                    if (!item.complete) {
                        return item;
                    }
                })
                return {
                    todoData: newArray,
                }
            })
        }

        this.onFilter = (id) => {
            this.toView(this.state.btns[id]);

            this.setState(({btns}) => {
                const newArray = btns.map((item) => {
                    item.selected = false;

                    if (btns[id] === item) {
                        item.selected = !item.selected;
                    }
                    return item;
                });

                return {
                    btns: newArray,
                }
            })

        }

        this.toView = (stateBtn) => {

            this.setState(({todoData}) => {
                const filterTask = todoData.map((item) => {
                    item.hidden = false;
                    if (stateBtn.value === 'Completed') {
                        if (!item.complete) {
                            item.hidden = !item.hidden;
                        }

                    } else if (stateBtn.value === "Active") {
                        if (item.complete) {
                            item.hidden = !item.hidden;
                        }
                    }
                    return item;
                });
                return {
                    todoData: filterTask,
                }
            })


        }
    }


    render() {
        return (
            <section className="todoapp">
                <Header
                    onAdd={this.onAdd}/>
                <TaskList
                    todos={this.state.todoData}
                    onDeleted={this.onDeleted}
                    onCompleted={this.onCompleted}
                    onEdited={this.onEdited}
                />
                <Footer buttons={this.state.btns}
                        toView={this.state.toView}
                        onClearCompleted={this.onClearCompleted}
                        onFilter={this.onFilter}/>
            </section>
        );
    }
}
;

ReactDOM.render(<TodoApp/>, document.getElementById("div"));
//привести в порядок в мэйне адишники
//ревью метода onDeleted
//очистка поля ввода