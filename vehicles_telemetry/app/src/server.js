import express, { urlencoded, json } from "express";
import router from "./routes/vehicleRegistryRoutes";
import cors from "cors";
import { getPort } from "./utils/environment";
const app = express();

export async function initServer () {
  const port = getPort()

  app.use(cors());
  app.use(urlencoded({ limit: "125mb", extended: false }));
  app.use(json({ limit: "125mb" }));
  app.use(router);
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
}
