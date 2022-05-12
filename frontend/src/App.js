import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login"
import Tasks from "./Components/Tasks/Tasks"
import { useSelector } from "react-redux"

function App() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    return (
        <div className="App">
            <Navbar />
            {!isLoggedIn ? <Login /> : <Tasks />}
        </div>
    )
}

export default App
