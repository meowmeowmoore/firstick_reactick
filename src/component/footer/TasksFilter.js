import React from "react";

const TasksFilter = ({value, selected, onFilter}) => {

    let classNames = '';
    if (selected) {
        classNames += 'selected';

    }
    return <button className={classNames}
        onClick={onFilter}>
        {value}
    </button>;

};

export default TasksFilter;