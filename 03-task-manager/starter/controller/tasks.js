const Task = require("../model/tasks")

const getAllTasks = async function (req, res) {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (err) {
        console.log(err);
        res.status(400).json({ result: err.message })
    }
}

const createTask = async function (req, res) {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        console.log(err);
        res.status(400).json({ result: err.message })
    }
}

const getDetails = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({ task })
    } catch (err) {
        console.log(err);
        res.status(400).json({ result: err.message })
    }
}

const updateTask = async (req, res) => {
    try {
        //find and update ka find tl and twae yin update tl
        // a myrr G shi yin sort twy htae pee shr loh ya tl
        // updateOne ka first one ko update tl
        // find and update ka pre-modified version ko return pyan tl tae. just seeems like it returns the res kinda
        // updateOne ka writeResult ko return pyan tl
        // both are atomic
        const result = await Task.updateOne({ _id: req.params.id }, req.body)
        result.n === 0 ? res.status(200).json({ "result": "ma shi wo" }) :
            res.status(200).json({ result })
    } catch (err) {
        console.log(err);
        res.status(400).json({ result: err.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const result = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({ result })
    } catch (err) {
        console.log(err);
        res.status(400).json({ result: err.message })
    }
}

module.exports = { getAllTasks, createTask, getDetails, updateTask, deleteTask }