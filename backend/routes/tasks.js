const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */
router.put("/update/:name", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(req.params.name, req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});
/* CREATE 'DELETE' REQUEST */

router.put("/delete/:name", async (req, res) => {
  try {
    const task = await Task.findByOneAndDelete(req.params.name);
    
    if (!task) res.status(404).send("No item found");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
