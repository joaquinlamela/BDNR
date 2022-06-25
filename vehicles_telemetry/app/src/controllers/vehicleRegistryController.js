import vehicleRegistryService from "../services/vehicleRegistryService";

class VehicleRegistryController {
  async create(req, res) {
    try {
      const registry = await vehicleRegistryService.create(req.body);
      res.json(registry);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getByRegistryId(req, res) {
    try {
      const registryId = req.params.registryId
      let register = await vehicleRegistryService.getByRegistryId(registryId);
      res.json(JSON.stringify(register, null, 2));  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const vehicleId = req.query.vehicle-id
      let registers = await vehicleRegistryService.getAll(vehicleId);
      res.json(JSON.stringify(registers, null, 2));
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

export default new VehicleRegistryController()