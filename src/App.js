import React, { useState, useEffect } from 'react';

// CSS
import './App.css';

// Components
import { Button, Input } from './Components';

// Script
import createTask from './task-functions/createTask';
import deleteTask from './task-functions/deleteTask';

function App() {
  // Initialize tasks state from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  // Effect to store tasks in localStorage whenever tasks are updated
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handles adding a task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = createTask(tasks, newTask);  // Logic: createTask updates the task list
      setTasks(updatedTasks);
      setNewTask('');  // Clear the input field after adding
    }
  };

  // Handles deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = deleteTask(tasks, index);  // Logic: deleteTask updates the task list
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List App</h1>
      </header>

      <main className='main-container'>
        <section className='list-container'>
          <h2 className='form-title'>Good day, list down your plans!</h2>

          {/* Input field and Add Button */}
          <div className='input-container'>
            <Input
              type="text"
              placeholder="Enter new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}  // Update state when typing
            />
            <Button
              text="Add"
              onClick={handleAddTask}  // Trigger task creation
              className="task-btn"
            />
          </div>

          {/* To-Do List */}
          <div className='to-do-container'>
            {tasks.length === 0 && <h2>No plans for today!</h2>}  {/* Show only if no tasks */}

            <ul id='to-do-list'>
              {tasks.map((task, index) => (
                <li key={index} className='to-do-item'>
                  <span> {task.text} </span>
                  <Button
                    text="Delete"
                    onClick={() => handleDeleteTask(index)}  // Delete specific task
                    className="delete-btn"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* <footer>
        <h2>Developed by John Rhyl Fernandez</h2>
      </footer> */}
    </div>
  );
}

export default App;
