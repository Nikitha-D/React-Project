// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (taskId, taskName) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, name: taskName } : task)));
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {editingTask ? (
        <EditTask task={editingTask} updateTask={updateTask} />
      ) : (
        <AddTask addTask={addTask} />
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;


