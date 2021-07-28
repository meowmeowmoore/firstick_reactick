import React, {Component} from 'react';
import { formatDistance, subDays } from 'date-fns';


export default class Task extends Component {

    render() {
        const {value, onCompleted, onDeleted} = this.props;

        return (
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                <label>
                    <span
                        className="description"
                        onClick={onCompleted}>{value}</span>
                    <span className="created">
                    {formatDistance(subDays(new Date(), 5), new Date())}
                </span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"
                        onClick={onDeleted}></button>
            </div>
        );
    }
};
