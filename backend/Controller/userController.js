const UserBusinessLogic = require("../BusinessLogic/userBusinessLogic");

module.exports = class UserController {
  constructor() {
    this.userBusinessLogic = new UserBusinessLogic();
  }

  async create(req, res) {
    try {
      let user = await this.userBusinessLogic.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async associatePaymentMethod(req, res) {
    try {
      const user = await this.userBusinessLogic.associatePaymentMethod(req);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getByUsername(req, res) {
    try {
      let user = await this.userBusinessLogic.getUserByUsername(req);
      res.json(JSON.stringify(user, null, 2));
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      let user = await this.userBusinessLogic.getAll();
      res.json(JSON.stringify(user, null, 2));
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
