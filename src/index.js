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
                {value: 'Completed task', complete: false, id: 1},
                {value: 'Editing task', complete: false, id: 2},
                {value: 'Active task', complete: false, id: 3}
            ],
            btns: [
                {value: 'All', id: 'btn-1', selected: true},
                {value: 'Active', id: 'btn-2'},
                {value: 'Completed', id: 'btn-3'}
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

        this.onCreate = (value, id) => {
            const newElement =  {
                value: value,
                complete: false,
                id: id
            };
            return newElement;
        }

        this.onAdd = (text) => {
            this.setState(({todoData}) => {
                const newElement = this.onCreate(text, this.state.todoData.length + 1);
                const newArray = todoData.concat(newElement);

                return {
                    todoData: newArray,
                }
            })
        }

        this.onDeleted = (id) => {
            this.setState(({todoData}) => {

                const idx = todoData.findIndex((el) => el.id === id);

                const before = todoData.slice(0, idx);
                const after = todoData.slice(idx + 1);

                const newArray = [...before, ...after];

                return {
                    todoData: newArray
                }
            });
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
                />
                <Footer buttons={this.state.btns}/>
            </section>
        );
    }
}
;

ReactDOM.render(<TodoApp/>, document.getElementById("div"));
