import React from "react";

const TasksFilter = ({value, className}) => {

    return <button className={className ? className : null}>
        {value}
    </button>;

};

export default TasksFilter;