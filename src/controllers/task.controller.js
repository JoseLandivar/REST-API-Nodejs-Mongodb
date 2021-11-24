import Task from "../models/Tasks";

export const findAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Algo salio mal rey'
        })
    }
}


export const createTask = async ( req, res) => {
    try {
        const newTasks = new Task({ 
            title: req.body.title, 
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSaved = await newTasks.save();
        res.json(taskSaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error intentando crear la tarea rey'
        })
    }
    

};

export const findAllDoneTasks = async (req,res) => {
    const tasks = await Task.find({done: true});
    res.json(tasks);
}

export const findOneTask = async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: "Task were delete successfully",
    });
};
 
export const updateTask = async (req,res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
    res.json({ message: "Task was update Successfull"})
}