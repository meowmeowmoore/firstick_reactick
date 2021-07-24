import React from 'react';
import { formatDistance, subDays } from 'date-fns';

const Task = ({value}) => {

    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
                <span className="description">{value}</span>
                <span className="created">
                    {formatDistance(subDays(new Date(), 5), new Date())}
                </span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    );
}
export default Task;
