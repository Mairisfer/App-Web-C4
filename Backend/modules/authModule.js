import bcrypt from "bcrypt";
import clientModel from "../models/clientModel.js";
import { genToken } from "./tokenGeneration.js";

export async function login(req, res) {
  try {
    const { username, password } = req.headers;
    console.log(username);

    const document = await clientModel.findOne({ name: username });

    const access = await bcrypt.compare(password, document.password);
    if (access) {
      const token = genToken({ username });
      res.status(200).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}
