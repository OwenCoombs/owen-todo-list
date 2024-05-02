const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    // if (storedTasks) {
    //   dispatch({type: 'setTasks', tasks: JSON.parse(storedTasks) });
    // }
    console.log(storedTasks)

    // 
export const initialTaskState = storedTasks ? {tasks: storedTasks } :  {
    tasks: [
        
    ]
}

export const taskReducer = (state, action) => {
    switch(action.type){
        case 'addTask':
            return { tasks: [...state.tasks, {title: action.title}] }
        case 'removeTask':
            return {tasks: state.tasks.filter((task, index) => index !== action.index)}
        case 'setTasks':
            return { tasks: action.tasks };
            default:
                throw new Error('Error')
    }
}

