import vehicleRegistryService from "../services/vehicleRegistryService";

class VehicleRegistryController {
  async create(req, res) {
    try {
      await vehicleRegistryService.create(req.body);
      res.status(201).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getByRegistryId(req, res) {
    try {
      const { id } = req.params
      const register = await vehicleRegistryService.getByRegistryId(id);
      res.json(register);  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const vehicleId = req.query['vehicle-id']
      let registers = await vehicleRegistryService.getAll(vehicleId);
      res.json(registers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

export default new VehicleRegistryController()