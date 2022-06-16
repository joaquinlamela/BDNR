const Db = require("../Tools/DBConnection");

module.exports = class UserRepository {
  async create(data) {
    try {
      console.log("data", data);
      return await Db.Users.create(data);
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }

  async getAll() {
    try {
      return await Db.Users.find();
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }

  async getUserByUsername(username) {
    try {
      return await Db.Users.find({
        Username: new RegExp("^" + username + "$", "i"),
      });
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }

  async associatePaymentMethod(username, data) {
    try {
      return await Db.Users.findOneAndUpdate(
        { Username: new RegExp("^" + username + "$", "i") },
        { $push: { PaymentMethods: data } },
        {
          new: true,
        }
      );
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }
};
