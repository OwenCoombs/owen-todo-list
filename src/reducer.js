// Retrieve tasks from local storage and parse them as JSON
const storedTasks = JSON.parse(localStorage.getItem('tasks'));


console.log(storedTasks);

// Define the initial state for tasks. If there are stored tasks, use them, otherwise initialize an empty array.
export const initialTaskState = storedTasks ? { tasks: storedTasks } : { tasks: [] };

// Define a reducer function for tasks, which handles various actions to modify the state
export const taskReducer = (state, action) => {
    switch(action.type){
        // Action to add a task: Create a new state with the new task added to the tasks array
        case 'addTask':
            return { tasks: [...state.tasks, {title: action.title}] };
        
        // Action to remove a task: Create a new state with the specified task removed from the tasks array
        case 'removeTask':
            return { tasks: state.tasks.filter((task, index) => index !== action.index) };
        
        // Action to set tasks: Replace the current tasks with the provided tasks
        case 'setTasks':
            return { tasks: action.tasks };
        
        
        default:
            throw new Error('Error');
    }
}
