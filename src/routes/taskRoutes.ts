import express from "express";
import * as taskService from "../services/taskService";
import { authHeaderCheck } from "../middleware/authHeaderCheck";

const router = express.Router();

router.get("/", taskService.getTasks);
router.post("/", taskService.createTask);
router.delete("/:id", authHeaderCheck, taskService.deleteTask);

export default router;
