const express = require("express");
const { addTasks, getTasks } = require("../controllers/taskController");

const router = express.Router();

router.post("/add-task", addTasks);
router.get("/get-tasks", getTasks);

module.exports = router;
