import Task from "../models/Tasks";

export const findAllTasks = async(req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}


export const createTask = async ( req, res) => {
    const newTasks = new Task({ title: req.body.title, description: req.body.description });
    const taskSaved = await newTasks.save();
    res.json(taskSaved);
}
