// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <div>
      <span>{task.name}</span>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
