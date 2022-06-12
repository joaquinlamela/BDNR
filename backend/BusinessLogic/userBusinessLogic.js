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

  async getUserByUsername(req) {
    let username = req.params.username;
    if (username) {
      return await this.userRepository.getUserByUsername(username);
    }
    throw new Error("El usuario no fue encontrado.");
  }
};
