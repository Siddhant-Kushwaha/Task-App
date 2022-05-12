const router = require("express").Router()
const Task = require("../models/Task")

const { verifyTokenAndAuthorization, verifyToken } = require("./verify")

router.post("/", verifyToken, async (req, res) => {
    const newTask = new Task({
        ...req.body,
        userId: req.user.id,
    })
    try {
        const savedTask = await newTask.save()
        res.status(200).json(savedTask)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    console.log(req.body)
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        console.log(updatedTask)
        res.status(200).json(updatedTask)
    } catch (err) {
        res.status(500).json(err)
    }
})

// // delete user

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("Task has been deleted successfully!")
    } catch (err) {
        res.status(500).send(err)
    }
})

// get User Task
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const task = await Task.findOne({ userId: req.params.id })
        res.status(200).json(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get("/", verifyToken, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id })
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
