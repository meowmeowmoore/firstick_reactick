import React, {Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {

    render() {


        const {value, onCompleted, onDeleted, onEdited, date} = this.props;

        let distanceToNow = `created ${formatDistanceToNow(new Date(date),  { addSuffix: true, includeSeconds: true })}`

        return (
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                    <span
                        className="description"
                        onClick={onCompleted}>{value}</span>
                    <span className="created">
                        {distanceToNow}
                </span>
                </label>
                <button className="icon icon-edit"
                onClick={onEdited}/>
                <button className="icon icon-destroy"
                        onClick={onDeleted}/>
            </div>
        );
    }
};
