import UsersRepository from "../repositories/users.repository";

class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }
}

export default UsersService;
