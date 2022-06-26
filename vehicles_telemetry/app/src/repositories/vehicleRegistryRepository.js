import {wideColumnDbClient} from '../utils/dbConnection'
import { getWideColumnDbConfig } from '../utils/environment'

const wideColumnDb = getWideColumnDbConfig()

const tableName = `${wideColumnDb.keyspace}.${wideColumnDb.databaseName}`

class VehicleRegistryRepository {

  async create(data) {
    try {
      const tableNames = '(id,' + Object.keys(data).join(',') +')'
      const values = '(uuid(),' + Object.values(data).join(',') +')'
      const query = `insert into ${tableName} ${tableNames} values ${values}`;

      await wideColumnDbClient.execute(query);
    } catch (err) {
      throw new Error(`Error connecting with database: ${err}`);
    }
  }

  async getAll(vehicleId) {
    try {
      const filter = vehicleId ? `WHERE vehicle_id = ${vehicleId}` : ''
      const query = `SELECT * FROM ${tableName} ${filter}`;

      const result = await wideColumnDbClient.execute(query)

      return result['rows']
    } catch (err) {
      throw new Error(`Error connecting with database ${err}`);
    }
  }

  async getByRegistryId(registryId) {
    try {
      const query = `SELECT * FROM ${tableName} WHERE id = ${registryId}`;

      const result = await wideColumnDbClient.execute(query)

      return result['rows']
    } catch (err) {
      throw new Error(`Error connecting with database ${err}`);
    }
  }
};

export default new VehicleRegistryRepository()