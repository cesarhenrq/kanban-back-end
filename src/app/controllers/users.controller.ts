import UsersService from "../services/users.service";

class UsersController {
  private service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }
}

export default UsersController;
