import axios from "axios"

export const addTasks = (data) => {
    return {
        type: "ADD_TASKS",
        payload: data,
    }
}

export const addTask = (data) => {
    return {
        type: "ADD_TASK",
        payload: data,
    }
}

export const delTask = (data) => {
    return {
        type: "DELETE_TASK",
        payload: data,
    }
}

export const updateTask = (data) => {
    return {
        type: "UPDATE_TASK",
        payload: data,
    }
}

export const fetchTasks = () => {
    return function (dispatch) {
        axios
            .get("http://localhost:3000/api/tasks/", {
                headers: {
                    token: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((task) => {
                console.log(task)
                dispatch(addTasks(task.data))
            })
    }
}

export const addSingleTask = (data) => {
    return function (dispatch) {
        axios
            .post(
                "http://localhost:3000/api/tasks/",
                { task: data },
                {
                    headers: {
                        token: "Bearer " + localStorage.getItem("token"),
                    },
                }
            )
            .then((task) => {
                console.log(task)
                dispatch(addTask(task.data))
            })
    }
}

export const deleteTask = (data) => {
    return function (dispatch) {
        console.log(data)
        axios
            .delete(`http://localhost:3000/api/tasks/${data._id}`, {
                headers: {
                    token: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((task) => {
                dispatch(delTask(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const editTask = (data) => {
    return function (dispatch) {
        console.log(data)
        axios
            .put(`http://localhost:3000/api/tasks/${data._id}`, data, {
                headers: {
                    token: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((task) => {
                dispatch(updateTask(task.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
