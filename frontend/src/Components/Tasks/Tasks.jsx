import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSingleTask } from "../../Redux/Actions/tasks"
import Task from "../Task/Task"
import "./Tasks.css"

const Tasks = () => {
    const dispatch = useDispatch()
    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addSingleTask(task))
        setTask("")
    }

    const data = useSelector((state) => state.task.tasks)
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    console.log(data)
    return (
        <div className="tasks">
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type to add task..."
                    value={task}
                    onChange={handleChange}
                    className="add-task-input"
                />
                <button className="btn">add</button>
            </form>

            {data.map((task, index) => {
                return <Task task={task} index={index + 1} key={task._id} />
            })}
        </div>
    )
}

export default Tasks
