import App from "../providers/App";
import { Database } from "./../providers/Database";

export class TestUtils {
  public static async mock() {
    await App.loadServer();
    await Database.init();
  }

  public static rollback() {
    console.log("Rollback");
    //
  }

  public static seedDatabase() {}
}
