

import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => editTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;
