import { Router } from "express";
import vehicleRegistryController from "../controllers/vehicleRegistryController";

const router = Router();

router.post("/vehicles-entries", (req, res, nxt) => vehicleRegistryController.create(req, res, nxt));

router.get("/vehicles-entries", (req, res, nxt) => vehicleRegistryController.getAll(req, res, nxt));

router.get("/vehicles-entries/:id", (req, res, nxt) =>
vehicleRegistryController.getByRegistryId(req, res, nxt)
);


export default router;
