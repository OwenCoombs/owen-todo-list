import { useContext, useEffect, useState } from 'react'; 
import './App.css'; 
import NavBar from './navbar'; 
import { TaskContext } from './main'; 
import realconfetti from './assets/realconfetti.gif'; 

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

  const toggleTaskCompletion = (index) => {
    dispatch({ type: 'toggleTask', index }); 
  };

  const removeTask = (index) => {
    dispatch({ type: 'removeTask', index }); 
  };

  return (
    <div className="container">
      <NavBar />
      <h2>To-Do</h2>
      <div id='form'>
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Enter new task"
        />
        <button
          onClick={() => {
            if (newTask.trim()) {
              dispatch({ type: 'addTask', title: newTask });
              setNewTask('');
            }
          }}
          id='taskBtn'
        >
          Add Task
        </button>
      </div>
      <ul id='list'>
        {state.tasks &&
          state.tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? 'completed' : ''}
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.title}
              {task.completed && (
                <button
                  className="deleteBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTask(index);
                  }}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
      </ul>
      <h3 id='howto'>How To Use</h3>
      <p id='howtoP'>
        Once you create a task, click on the task to mark it as complete. A delete button will appear to remove the task.
      </p>
      {overlayVisible && (
        <div className="overlay">
          <img src={realconfetti} alt="Overlay GIF" />
        </div>
      )}
    </div>
  );
}

export default App;





