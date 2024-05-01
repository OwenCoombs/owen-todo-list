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
            default:
                throw new Error('Error')
    }
}

