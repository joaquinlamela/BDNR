const UserRepository = require("../DataAccess/userRepository");

module.exports = class UserBusinessLogic {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(user) {
    return await this.userRepository.create(user);
  }

  async getAll() {
    return await this.userRepository.getAll();
  }
};
