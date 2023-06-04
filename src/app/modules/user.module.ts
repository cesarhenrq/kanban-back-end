import User from "../entities/user.model";

import UsersRepository from "../repositories/users.repository";

import UsersService from "../services/users.service";

import UsersController from "../controllers/users.controller";

class UserModule {
  static build() {
    const usersRepository = new UsersRepository(User);
    const usersService = new UsersService(usersRepository);
    const usersController = new UsersController(usersService);

    return usersController;
  }
}

export default UserModule;
