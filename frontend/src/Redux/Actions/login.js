import axios from "axios"

import { fetchTasks } from "../Actions/tasks"

export const loginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user,
    }
}

export const loginError = () => {
    return {
        type: "LOGIN_FAILURE",
    }
}

export const registerSuccess = () => {
    return {
        type: "REGISTER_SUCCESS",
    }
}

export const registerFailure = () => {
    return {
        type: "REGISTER_FAILURE",
    }
}

export const logout = () => {
    return { type: "LOGOUT" }
}

export function login({ username, password }) {
    return function (dispatch) {
        axios
            .post("http://localhost:3000/api/users/auth/login", {
                username,
                password,
            })
            .then((user) => {
                console.log(user)
                dispatch(loginSuccess(user.data))
                localStorage.setItem("token", user.data.accessToken)
                dispatch(fetchTasks())
            })
            .catch((err) => {
                dispatch(loginError())
            })
    }
}

export function register({ username, password, email }) {
    return function (dispatch) {
        axios
            .post("http://localhost:3000/api/users/auth/register", {
                username,
                password,
                email,
            })
            .then(() => {
                dispatch(registerSuccess())
            })
            .catch((err) => {
                dispatch(registerFailure())
            })
    }
}
