import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Login.css"
import { login } from "../../Redux/Actions/login"

const Login = () => {
    const [cred, setCred] = useState({ name: "", pass: "" })
    const dispatch = useDispatch()
    const loginErr = useSelector((state) => state.login.error)

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            login({
                username: cred.name,
                password: cred.pass,
            })
        )
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <caption>LOGIN</caption>
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={cred.name}
                    onChange={handleChange}
                />
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    name="pass"
                    id="pass"
                    value={cred.pass}
                    onChange={handleChange}
                />
                <button className="btn">Submit</button>
                {loginErr ? <div className="err">Error Loggin In!</div> : ""}
            </form>
        </div>
    )
}

export default Login
