import Task from "../entities/task.model";

class TasksRepository {
  model: typeof Task;

  constructor(model: typeof Task) {
    this.model = model;
  }
}

export default TasksRepository;
