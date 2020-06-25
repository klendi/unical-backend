import express from "express";

import Locals from "./Locals";
import Routes from "./Routes";
import Logger from "../middlewares/Logger";
// import Bootstrap from '../middlewares/Kernel';
// import ExceptionHandler from '../exception/Handler';

class Express {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = <express.Application>express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    // this.express = Bootstrap.init(this.express);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }

  /**
   * Starts the express server
   */
  public init(): any {
    const port: number = Locals.config().port;

    // Registering Exception / Error Handlers
    // this.express.use(ExceptionHandler.logErrors);
    // this.express.use(ExceptionHandler.errorHandler);
    // this.express = ExceptionHandler.notFoundHandler(this.express);

    // Start the server on the specified port
    this.express.listen(port, (_error: any) => {
      if (_error) {
        return Logger.error("Error at running server, error: ", _error);
      }
      try {
        //@ts-ignore
        Logger.error.d("hello");
      } catch (e) {
        console.log("Error here", e);
        Logger.error(e);
      }

      Logger.info("Hello world", "hellooo");
    });
  }
}

/** Export the express module */
export default new Express();
