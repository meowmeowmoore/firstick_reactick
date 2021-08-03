import React, {Component} from 'react';

export default class NewTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

        this.newTaskText = (event) => {
            this.setState({
                value: event.target.value
            });

        }

        this.addToList = (event) => {
            let text = '';

            if (event.code === "Enter") {
                this.props.onAdd(this.state.value);
                this.setState({
                    value: text,
                })
            }

        }
    }

    render() {

        return (<input className='new-todo'
                       placeholder='What needs to be done?'
                       autoFocus
                       onChange={this.newTaskText}
                       onKeyUp={this.addToList}
                       value={this.state.value}/>
        )
    }
}

