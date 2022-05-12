import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTask, editTask } from "../../Redux/Actions/tasks"
import "./Task.css"

const Task = (props) => {
    const dispatch = useDispatch()
    const [editForm, setEditForm] = useState(false)
    const [utask, setUtask] = useState(props.task.task)

    const handleDelete = () => {
        dispatch(deleteTask(props.task))
    }

    const handleBack = () => {
        setEditForm(false)
        setUtask(props.task.task)
    }

    const handleEdit = () => {
        props.task.task = utask
        dispatch(editTask(props.task))
        setEditForm(false)
    }

    const handleChange = (e) => {
        setUtask(e.target.value)
    }

    useEffect(() => {
        setEditForm(false)
        console.log("hii")
    }, [props.task.task])
    return (
        <div class="single-task">
            {editForm ? (
                <div className="edit-form">
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input
                            autoFocus
                            type="text"
                            value={utask}
                            name="utask"
                            onChange={handleChange}
                        />
                    </form>
                    <div className="buttons">
                        <button className="btn back-btn" onClick={handleBack}>
                            Back
                        </button>
                        <button className="btn edit-btn" onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="task-box btn">{props.index}</div>
                    <div className="task-box task-main">{props.task.task}</div>
                    <div className="buttons">
                        <button className="btn del-btn" onClick={handleDelete}>
                            Delete
                        </button>
                        <button
                            className="btn edit-btn"
                            onClick={() => setEditForm(!editForm)}
                        >
                            Edit
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Task
