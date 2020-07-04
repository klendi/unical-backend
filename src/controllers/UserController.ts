import * as express from "express";

import { User } from "../models/User";
import { validate, validateOrReject } from "class-validator";

import logger from "../middlewares/Logger";

export class UserController {
  public static async addUser(req: express.Request, res: express.Response) {
    const username = req.body.username.toLowerCase();

    const user = new User({ username });

    const errors = await validate(user, { validationError: { target: false } });

    if (errors.length > 0) {
      console.error(errors);
      return res
        .status(400)
        .send({ message: "Error at creating user", errors: errors });
    }

    await user.save();

    return res.status(200).send({ message: "Success" });
  }
}
