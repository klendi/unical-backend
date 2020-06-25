import { Application } from "express";
import Locals from "./Locals";
import ApiRoutes from "../routes";
import Log from "../middlewares/Logger";

class Routes {
  public mountApi(_express: Application): Application {
    const apiPrefix = Locals.config().apiPrefix;
    Log.info("Routes :: Mounting API Routes...");
    return _express.use(`/${apiPrefix}`, ApiRoutes);
  }
}

export default new Routes();
