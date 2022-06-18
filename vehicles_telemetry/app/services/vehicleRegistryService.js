import vehicleRegistryRepository from "../repositories/vehicleRegistryRepository";

export class VehicleRegistryService {
  async create(register) {
    return vehicleRegistryRepository.create(register);
  }

  async getAll(vehicleId) {
    return vehicleRegistryRepository.getAll(vehicleId);
  }

  async getByRegistryId(registryId) {
    return  vehicleRegistryRepository.getByRegistryId(registryId);
  }
};

export default new VehicleRegistryService()