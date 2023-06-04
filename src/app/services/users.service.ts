import { object, string } from "yup";

import UsersRepository from "../repositories/users.repository";

import { IUser } from "../entities/user.model";

class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async create(payload: IUser) {
    try {
      const schema = object().shape({
        name: string().required().min(3),
        email: string().email().required(),
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

      const user = await this.repository.create(payload);

      return {
        statusCode: 201,
        message: "User created successfully",
        data: user,
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

export default UsersService;
