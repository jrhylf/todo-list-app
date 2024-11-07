import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList />
      <TaskInput tasks={tasks} />
    </div>
  );
}

export default App;
