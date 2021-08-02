import React, {Component} from 'react';

export default class NewTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

        this.newTaskText = (event) => {

            this.setState({
                value: event.target.value,
            });
            if (event.code === "Enter") {
                this.props.onAdd(this.state.value);
            }
            return {}

        }
    }

    render() {

        return (<input className='new-todo'
                       placeholder='What needs to be done?'
                       autoFocus
                       onKeyUp={this.newTaskText}/>
        )
    }
}

