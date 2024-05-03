import { useContext, useEffect, useState } from 'react'; 
import './App.css'; 
import NavBar from './navbar'; 
import { TaskContext } from './main'; 
import realconfetti from './assets/realconfetti.gif'; 

function App() {
  // State variables
  const [newTask, setNewTask] = useState(''); 
  const [overlayVisible, setOverlayVisible] = useState(false); // State for overlay visibility
  const { state, dispatch } = useContext(TaskContext); 

  // useEffect hook to load tasks from localStorage 
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from localStorage
    if (storedTasks) {
      dispatch({ type: 'setTasks', tasks: JSON.parse(storedTasks) }); // Dispatch action to set tasks from localStorage
    }
  }, [dispatch]);

  // useEffect hook to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Store tasks in localStorage
  }, [state.tasks]);

  // Function to remove task by index
  const removeTask = (index) => {
    dispatch({ type: 'removeTask', index }); // Dispatch action to remove task
  };

 

  // Function to handle task click (remove task and show overlay)
  const handleTaskClick = (index) => {
    setOverlayVisible(true); // Set overlay visibility to true
    removeTask(index); // Remove task by index
    // Hide overlay after 4 seconds
    setTimeout(() => {
      setOverlayVisible(false); // Set overlay visibility to false after 4 seconds
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
          /> {/* Input field for new task */}
          <button
            onClick={() => dispatch({ type: 'addTask', title: newTask })}
            id='taskBtn'
          >
            Add Task
          </button> {/* Button to add new task */}
        </div>
        <div>
          {/* Render tasks */}
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
      {/* Render overlay if overlayVisible is true */}
      {overlayVisible && (
        <div className="overlay">
          <img src={realconfetti} alt="Overlay GIF" />
        </div>
      )}
    </div>
  );
}

export default App; // Export App component
