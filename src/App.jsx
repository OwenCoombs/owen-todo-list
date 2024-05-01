import { useContext, useState } from 'react'
import './App.css'
import NavBar from './navbar';
import { TaskContext } from './main';

function App() {
  const [newTask, setNewTask] = useState('');
  const { state, dispatch } = useContext(TaskContext)
 
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h2>To-Do</h2>
      <div>
        <input 
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={() => dispatch({ type: 'addTask', title: newTask })}>Add Task</button>
      </div>
        <div>
          {/* Map over the tasks array and display each task */}
          {state.tasks && state.tasks.map((task, index) => (
            <div key={index}>
              <h4>{task.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

