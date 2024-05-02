export const initialTaskState = {
    tasks: [
        // {
        //     title: '',
        //     desc: ''
        // }
    ]
}

export const taskReducer = (state, action) => {
    switch(action.type){
        case 'addTask':
            return { tasks: [...state.tasks, {title: action.title}] }
        case 'removeTask':
            return {tasks: state.tasks.filter((task, index) => index !== action.index)}
            default:
                throw new Error('Error')
    }
}

