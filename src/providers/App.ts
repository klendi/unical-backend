import * as path from "path";
import * as dotenv from "dotenv";

import Express from "./Express";
import { Database } from "./Database";

import Locals from "./Locals";
import Log from "../middlewares/Logger";

class App {
  // Clear the console
  public clearConsole(): void {
    process.stdout.write("\x1B[2J\x1B[0f");
  }

  // Loads your dotenv file
  public loadConfiguration(): void {
    Log.info("Configuration :: Booting @ Master...");

    dotenv.config({ path: path.join(__dirname, "../../.env") });
  }

  // Loads your Server
  public async loadServer() {
    Log.info("Server :: Booting @ Master...");

    await Express.init();
  }

  // Loads the Database Pool
  public async loadDatabase() {
    Log.info("Database :: Booting @ Master...");
    await Database.init();
  }

  // // Loads the Worker Cluster
  // public loadWorker(): void {
  //   Log.info("Worker :: Booting @ Master...");
  // }
}

export default new App();
