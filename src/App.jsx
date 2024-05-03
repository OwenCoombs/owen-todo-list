import { useContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './navbar';
import { TaskContext } from './main';
import unchecked from './assets/unchecked.svg';
import realconfetti from './assets/realconfetti.gif'


function App() {
  const [newTask, setNewTask] = useState('');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { state, dispatch } = useContext(TaskContext);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch({ type: 'setTasks', tasks: JSON.parse(storedTasks) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const removeTask = (index) => {
    dispatch({ type: 'removeTask', index });
  };
// when clicked will remove task and show overlay
  const handleTaskClick = (index) => {
    setOverlayVisible(true);
    removeTask(index);
    // Hide overlay after 4 seconds
    setTimeout(() => {
      setOverlayVisible(false);
    }, 4000);
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
          <button
            onClick={() => dispatch({ type: 'addTask', title: newTask })}
            id='taskBtn'
          >
            Add Task
          </button>
        </div>
        <div>
          {state.tasks &&
            state.tasks.map((task, index) => (
              <div key={index}>
                <ul id='list'>
                  <li id='list' onClick={() => handleTaskClick(index)}>
                    {task.title}
                  </li>
                </ul>
              </div>
            ))}
        </div>
        <div>
          <h3 id='howto'>How To Use</h3>
          <p id='howtoP'>
            Once you create a task <br /> you can click on the task <br /> to
            delete it.
          </p>
        </div>
      </div>
      {overlayVisible && (
        <div className="overlay">
          <img src={realconfetti} alt="Overlay GIF" />
        </div>
      )}
    </div>
  );
}

export default App;
