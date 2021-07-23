import React from 'react';

const Task = () => {
    return (
        <li className='completed'>
            <div className='view'>
                <input className='toggle'
                       type="checkbox">
                    <label>
                        <span className='description'>Completed task</span>
                        <span className='created'></span>
                    </label>
                </input>
            </div>
        </li>
    );
}
export default Task;
