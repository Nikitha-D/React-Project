// src/components/Task.js
import React from 'react';
import './Task.css'; 
function Task({ task }) {
  return (
    <div className="task">
      <span>{task.name}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Task;
