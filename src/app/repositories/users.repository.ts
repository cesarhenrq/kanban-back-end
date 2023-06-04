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

  async associateTask(userId: string, taskId: string) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        $push: { tasks: taskId },
      },
      { new: true }
    );
  }

  async dissociateTask(userId: string, taskId: string) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        $pull: { tasks: taskId },
      },
      { new: true }
    );
  }
}

export default UsersRepository;
