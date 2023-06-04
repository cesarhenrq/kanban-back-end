import User, { IUser } from "../entities/user.model";

class UsersRepository {
  model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(user: IUser) {
    return await this.model.create(user);
  }

  async getById(id: string) {
    return await this.model.findById(id);
  }
}

export default UsersRepository;
