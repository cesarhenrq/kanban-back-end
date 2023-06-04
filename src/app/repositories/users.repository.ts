import User, { IUser } from "../entities/user.model";

class UsersRepository {
  model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(user: IUser) {
    return await this.model.create(user);
  }
}

export default UsersRepository;
