import { Request, Response } from "express";

import UsersService from "../services/users.service";

class UsersController {
  private service: UsersService;

  constructor(service: UsersService) {
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
}

export default UsersController;
