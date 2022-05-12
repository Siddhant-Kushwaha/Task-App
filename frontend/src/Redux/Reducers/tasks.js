const initialState = {
    tasks: [],
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASKS":
            return {
                tasks: action.payload,
            }
        case "ADD_TASK":
            return {
                tasks: [...state.tasks, action.payload],
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    console.log(task)
                    console.log(action.payload)
                    return task._id !== action.payload._id
                }),
            }

        case "UPDATE_TASK":
            console.log("UPDATE_TASK")
            let updated = state.tasks.findIndex((obj) => {
                console.log(obj._id)
                console.log(action.payload)
                return obj._id === action.payload._id
            })
            // console.log(updated)
            // console.log(state.tasks)
            const newTasks = [...state.tasks]
            newTasks[updated].task = action.payload.task
            return {
                tasks: newTasks,
            }

        case "LOGOUT":
            return {
                tasks: [],
            }
        default:
            return state
    }
}
