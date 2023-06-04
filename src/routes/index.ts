import { Router } from "express";

import userRouter from "./user.routes";
import taskRouter from "./task.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/tasks", taskRouter);

export default router;
