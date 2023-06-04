import { Router } from "express";

import TaskModule from "../app/modules/task.module";

const taskRouter = Router();

const taskModule = TaskModule.build();

taskRouter.post("/", taskModule.create.bind(taskModule));

taskRouter.put("/", taskModule.updateStatus.bind(taskModule));

taskRouter.put("/:taskId/:userId", taskModule.updateUser.bind(taskModule));

taskRouter.get("/:userId", taskModule.getTasksByUser.bind(taskModule));

export default taskRouter;
