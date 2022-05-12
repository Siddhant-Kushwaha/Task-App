import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Register.css"
import { register } from "../../Redux/Actions/login"
import Navbar from "../Navbar/Navbar"

const Register = () => {
    const [cred, setCred] = useState({ name: "", pass: "", email: "" })
    const dispatch = useDispatch()
    const registerErr = useSelector((state) => state.login.registerFail)
    const registerSuc = useSelector((state) => state.login.registerSuc)

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            register({
                username: cred.name,
                password: cred.pass,
                email: cred.email,
            })
        )
    }

    return (
        <>
            <Navbar />
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <caption>REGISTER</caption>
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={cred.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={cred.email}
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
                    {registerErr ? (
                        <div className="err">Error Registering!</div>
                    ) : (
                        ""
                    )}
                    {registerSuc ? (
                        <div className="success">Registration Successfull</div>
                    ) : (
                        ""
                    )}
                </form>
            </div>
        </>
    )
}

export default Register
