const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const config = require("../config/development.json");
const url = config.Db.TeslaDb;

const User = require("../Models/user");

async function init() {
  try {
    await loadCollections(User);
    console.log("Conectado a la base de datos Tesla");
  } catch (err) {
    throw new Error(`No se pudo conectar a la base de datos ${err}`);
  }
}

async function loadCollections(model) {
  const connection = await Mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const schema = new Schema(model, { id: false }, { versionKey: false });

  schema.set("toObject", {
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.__v;
    },
  });

  module.exports.Users = connection.model("Users", User, "Users");
}

module.exports = {
  init,
};
