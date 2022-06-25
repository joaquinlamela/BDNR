
class VehicleRegistryRepository {
  async create(data) {
    try {
      // const query = 'SELECT name, email FROM users WHERE key = ?';

      // const rows = await wideColumnDbClient.execute(query, [ 'someone' ]);

      console.log("data", data);
      // return await Users.create(data);
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }

  async getAll(vehicleId) {
    try {
      // return await Users.find();
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }

  async getByRegistryId(registryId) {
    try {
      // return await Users.find({
      //   Username: new RegExp("^" + username + "$", "i"),
      // });
    } catch (err) {
      throw new Error(`No se puede conectar con la base de datos ${err}`);
    }
  }
};

export default new VehicleRegistryRepository()