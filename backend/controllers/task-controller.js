import asyncHandler from 'express-async-handler';
import Tasks from '../models/task-model.js';

// @desc get all tasks
// @route GET /api/tasks
// @access public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Tasks.find();
  res.status(200).json(tasks);
});

// @desc create a task
// @route POST /api/tasks
// @access public
const createTask = asyncHandler(async (req, res) => {
  if (!req.body.task) {
    res.status(400);
    throw new Error('please add a goal');
  }

  const task = await Tasks.create({
    task: req.body.task,
    isCompleted: req.body.isCompleted
  });

  res.status(200).json(task);
});

// @desc update a task
// @route PUT /api/tasks/:id
// @access public
const updateTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error(`Task ${req.params.id} doesn't exist`);
  }

  const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedTask);
});

// @desc delete a task
// @route DELETE /api/tasks/:id
// @access public
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error(`Task ${req.params.id} doesn't exist`);
  }

  await task.remove();
  res.status(200).json(`${req.params.id} deleted`);
});

export { getTasks, deleteTask, updateTask, createTask };
