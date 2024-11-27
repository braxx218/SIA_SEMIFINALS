// controllers/itemController.js
const task = require("../models/taskModel");

// Get all task
const getAllTask = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Task retrieved successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific item by ID
const getTaskById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const task = task.find((t) => t.id === id);
      if (task) {
        res
          .status(200)
          .json({ message: "Task retrieved successfully", data: task });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  };

const addTask = async (req, res) => {
  try {
    const newTask = req.body;
    task.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing item
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task[index] = { ...task[index], ...req.body };
      res
        .status(200)
        .json({ message: "Task updated successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete an item
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task.splice(index, 1);
      res
        .status(200)
        .json({ message: "Task deleted successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllTask,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};