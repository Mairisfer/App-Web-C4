import bcrypt from "bcrypt";
import clientModel from "../models/clientModel.js";
import { genToken } from "../modules/tokenGeneration.js";

export async function createClient(req, res) {
  try {
    const { username } = req.body;
    let { password } = username;

    password = await bcrypt.hash(password, 7);
    username.password = password;

    const document = await clientModel.create(username);

    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readClient(req, res) {
  const { username } = req;
  let documento;

  try {
    documento = await clientModel.findOne({
      username: username,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

export function updateClient(req, res) {}

export function deleteClient(req, res) {}
