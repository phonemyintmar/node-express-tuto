const express = require("express")
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getDetails,
    updateTask,
    deleteTask } = require("../controller/tasks")



router.route('/').get(getAllTasks).post(createTask)
router.route("/:id").get(getDetails).patch(updateTask).delete(deleteTask)


module.exports = router