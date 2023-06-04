import User from "../entities/user.model";
import Task from "../entities/task.model";

import UsersRepository from "../repositories/users.repository";
import TasksRepository from "../repositories/tasks.repository";

import TasksService from "../services/tasks.service";

import TasksController from "../controllers/tasks.controller";

class TaskModule {
  static build() {
    const usersRepository = new UsersRepository(User);
    const tasksRepository = new TasksRepository(Task);
    const tasksService = new TasksService(usersRepository, tasksRepository);
    const tasksController = new TasksController(tasksService);

    return tasksController;
  }
}

export default TaskModule;
