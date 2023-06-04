import UsersRepository from "../repositories/users.repository";
import TasksRepository from "../repositories/tasks.repository";

class TasksService {
  private usersRepository: UsersRepository;
  private tasksRepository: TasksRepository;

  constructor(
    usersRepository: UsersRepository,
    tasksRepository: TasksRepository
  ) {
    this.usersRepository = usersRepository;
    this.tasksRepository = tasksRepository;
  }
}

export default TasksService;
