import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { Provider } from "react-redux"
import { loginReducer } from "./Redux/Reducers/login"
import { tasksReducer } from "./Redux/Reducers/tasks"
import Register from "./Components/Register/Register"

const store = createStore(
    combineReducers({ login: loginReducer, task: tasksReducer }),
    applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </Provider>
)
