import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from "prop-types";
import TaskList from "./TaskList";

const Task = ({value, onCompleted, onDeleted, onEdited, date}) => {

    let distanceToNow = `created ${formatDistanceToNow(new Date(date),
        {addSuffix: true, includeSeconds: true})}`;
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
                    <span
                        className="description"
                        onClick={onCompleted}>
                        {value}
                    </span>
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
};

export default Task;

Task.propTypes = {
    value: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdited: PropTypes.func,
}

TaskList.defaultProps = {
    value: '',
    date: new Date(2021, 1, 1),
    onCompleted: () => {},
    onDeleted: () => {},
    onEdited: () => {},
}