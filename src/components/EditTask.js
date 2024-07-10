// src/components/EditTask.js
import React, { useState } from 'react';

const EditTask = ({ task, updateTask }) => {
  const [taskName, setTaskName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, taskName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
