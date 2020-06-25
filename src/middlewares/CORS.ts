import * as cors from "cors";
import { Application } from "express";

import Log from "./Logger";
import Locals from "../providers/Locals";

class CORS {
  public mount(_express: Application): Application {
    Log.info("Booting the 'CORS' middleware...");

    const options = {
      origin: Locals.config().url,
      optionsSuccessStatus: 200, // Some legacy browsers choke on 204
    };

    //@ts-ignore
    _express.use(cors(options));

    return _express;
  }
}

export default new CORS();
