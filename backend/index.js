const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
const authRoute = require("./routes/auth")
const taskRoute = require("./routes/task")

var cors = require("cors")

app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => {
        console.log("error :", err)
    })

app.get("/api/test", () => {
    console.log("test is successfull")
})

app.use("/api/users/auth/", authRoute)
app.use("/api/tasks", taskRoute)

app.listen(3000, () => {
    console.log("server running")
})
