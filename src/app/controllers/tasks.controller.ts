import TasksService from "../services/tasks.service";

class TasksController {
  private service: TasksService;

  constructor(service: TasksService) {
    this.service = service;
  }
}

export default TasksController;
