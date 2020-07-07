import { BioDescription } from "./../models/BioDescription";
import * as express from "express";

import { User } from "../models/User";
import { validate, validateOrReject } from "class-validator";

import logger from "../middlewares/Logger";

export class UserController {
  public static async addUser(req: express.Request, res: express.Response) {
    const username = req.body.username.toLowerCase();

    const user = new User({ username, name: req.body.name });

    const errors = await validate(user);

    if (errors.length > 0) {
      return res
        .status(400)
        .send({ message: "Error at creating user", errors: errors });
    }

    await user.save();

    const bioObj = new BioDescription({
      content: req.body.bio,
      user_id: user.id,
    });

    const bioObjErrors = await validate(bioObj, {
      validationError: { target: false },
    });

    if (bioObjErrors.length > 0) {
      return res
        .status(400)
        .send({ message: "Error at creating user", errors: bioObjErrors });
    }
    await bioObj.save();
    return res.status(200).send({ message: "Success" });
  }
}
