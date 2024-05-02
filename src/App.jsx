import { useContext, useState } from 'react'
import './App.css'
import NavBar from './navbar';
import { TaskContext } from './main';
import unchecked from './assets/unchecked.svg'



function App() {
  const [newTask, setNewTask] = useState('');
  const { state, dispatch } = useContext(TaskContext)

  const removeTask = (index) => {
    dispatch({ type: 'removeTask', index });
    
  };
 
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h2>To-Do</h2>
        <div id='form'>
          <input 
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button onClick={() => dispatch({ type: 'addTask', title: newTask })} id='taskBtn'>Add Task
          
          </button>
        </div>
        <div>
          {/* Map over the tasks array and display each task */}
          {state.tasks && state.tasks.map((task, index) => (
            <div key={index}>
              <ul id='list'>
                <li id='list' onClick={() => removeTask(index)}>
                  {task.title}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 id='howto'>How To Use</h3>
          <p id='howtoP'>Once you create a task <br /> you can click on the task <br /> to delete it.</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;

