import { Request, Response } from "express";

import TasksService from "../services/tasks.service";

class TasksController {
  private service: TasksService;

  constructor(service: TasksService) {
    this.service = service;
  }

  async create(request: Request, response: Response) {
    const { body: payload } = request;

    const { statusCode, message, data } = await this.service.create(payload);

    return response.status(statusCode).json({
      message,
      data,
    });
  }

  async updateStatus(request: Request, response: Response) {
    const { body: payload } = request;

    const { statusCode, message, data } = await this.service.updateStatus(
      payload
    );

    return response.status(statusCode).json({
      message,
      data,
    });
  }

  async updateUser(request: Request, response: Response) {
    const {
      params: { userId, taskId },
    } = request;

    const { statusCode, message, data } = await this.service.updateUser(
      userId,
      taskId
    );

    return response.status(statusCode).json({
      message,
      data,
    });
  }

  async getTasksByUser(request: Request, response: Response) {
    const {
      params: { userId },
    } = request;

    const { query } = request;

    const { statusCode, message, data } = await this.service.getTasksByUser(
      userId,
      query
    );

    return response.status(statusCode).json({
      message,
      data,
    });
  }
}

export default TasksController;
