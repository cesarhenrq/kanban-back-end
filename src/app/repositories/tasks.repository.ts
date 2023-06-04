import Task, { ITask } from "../entities/task.model";

class TasksRepository {
  model: typeof Task;

  constructor(model: typeof Task) {
    this.model = model;
  }

  async create(task: ITask) {
    return await this.model.create(task);
  }

  async getById(id: string) {
    return await this.model.findById(id);
  }
}

export default TasksRepository;
