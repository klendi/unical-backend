import { Router } from "express";
import { UserController } from "../controllers/UserController";

class Api {
  public apiRouter = Router();

  constructor() {
    this.initate();
  }

  private initate(): void {
    // this.apiRouter.use('/users',  [Tokencheck, TokenVerify],UserRouter);
    // this.apiRouter.use('/users',UserRouter);
    this.apiRouter.post("/user/create", UserController.addUser);
  }
}

export default new Api().apiRouter;
