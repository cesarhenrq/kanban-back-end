import { object, string } from "yup";

import UsersRepository from "../repositories/users.repository";
import TasksRepository from "../repositories/tasks.repository";

import { ITask } from "../entities/task.model";

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

  async create(payload: ITask) {
    try {
      const schema = object().shape({
        title: string().required().min(3),
        content: string().required().min(3),
        status: string().oneOf(["Pendente", "Fazendo", "Concluido"]),
        user: string().required(),
      });

      try {
        await schema.validate(payload);
      } catch (error: any) {
        return {
          statusCode: 400,
          message: error.errors,
          data: null,
        };
      }

      const user = await this.usersRepository.getById(payload.user);

      if (!user) {
        return {
          statusCode: 404,
          message: "User not found",
          data: null,
        };
      }

      const task = await this.tasksRepository.create(payload);

      await this.usersRepository.associateTask(user._id, task._id);

      return {
        statusCode: 201,
        message: "Task created successfully",
        data: task,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message,
        data: null,
      };
    }
  }

  async updateStatus(payload: Pick<ITask, "id" | "status">) {
    try {
      const schema = object().shape({
        id: string().required(),
        status: string().oneOf(["Pendente", "Fazendo", "Concluido"]),
      });

      try {
        await schema.validate(payload);
      } catch (error: any) {
        return {
          statusCode: 400,
          message: error.errors,
          data: null,
        };
      }

      const task = await this.tasksRepository.getById(payload.id);

      if (!task) {
        return {
          statusCode: 404,
          message: "Task not found",
          data: null,
        };
      }

      const updatedTask = await this.tasksRepository.updateStatus(
        payload.id,
        payload.status
      );

      return {
        statusCode: 200,
        message: "Task updated successfully",
        data: updatedTask,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message,
        data: null,
      };
    }
  }

  async updateUser(userId: string, taskId: string) {
    try {
      const user = await this.usersRepository.getById(userId);

      if (!user) {
        return {
          statusCode: 404,
          message: "User not found",
          data: null,
        };
      }

      const task = await this.tasksRepository.getById(taskId);

      if (!task) {
        return {
          statusCode: 404,
          message: "Task not found",
          data: null,
        };
      }

      await this.usersRepository.dissociateTask(task.user, taskId);

      const updatedTask = await this.tasksRepository.updateUser(taskId, userId);

      await this.usersRepository.associateTask(userId, taskId);

      return {
        statusCode: 200,
        message: "Task updated successfully",
        data: updatedTask,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message,
        data: null,
      };
    }
  }
}

export default TasksService;
