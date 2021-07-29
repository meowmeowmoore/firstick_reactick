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
            })
        }
    }

    render() {
        const {onAdd} = this.props;

        return (<input className='new-todo'
                       placeholder='What needs to be done?'
                       autoFocus
                       onKeyUp={(event)=> {
                           if(event.code === "Enter"){
                               return onAdd(this.state.value);
                           }}}
                       onChange={this.newTaskText}/>
        )
    }
}

