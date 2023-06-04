import User from "../entities/user.model";

class UsersRepository {
  model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }
}

export default UsersRepository;
