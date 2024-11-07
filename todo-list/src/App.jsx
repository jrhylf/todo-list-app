// import logo from './logo.svg';
import './App.css';
import './css/custom_scroll_bar.css';

import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  // Initialize tasks from localStorage or set to an empty array if there's nothing
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [newTask, setNewTask] = useState('');

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <div className="taskList">
        <TaskList
          tasks={tasks}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
