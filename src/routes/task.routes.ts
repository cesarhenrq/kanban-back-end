import { Router } from "express";

import TaskModule from "../app/modules/task.module";

const taskRouter = Router();

const taskModule = TaskModule.build();

taskRouter.post("/", taskModule.create.bind(taskModule));

export default taskRouter;
