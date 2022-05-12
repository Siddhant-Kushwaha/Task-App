import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../Redux/Actions/login"
import "./Navbar.css"

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const dispatch = useDispatch()
    const handleAddTask = () => {
        document.querySelector(".add-task-input").focus()
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar">
            <div className="left">
                <button className="btn add-btn" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            <div className="middle">TASK APP</div>
            {isLoggedIn ? (
                <div className="right">
                    <button className="btn logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className="right">
                    <Link to="/register">
                        <button className="btn register-btn">Register</button>
                    </Link>
                    <Link to="/">
                        <button className="btn login-btn">Login</button>
                    </Link>
                </div>
            )}
        </nav>
    )
}
export default Navbar
