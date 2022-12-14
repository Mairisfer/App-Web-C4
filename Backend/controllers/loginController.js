import clientModel from "../models/clientModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN =
  "d598a01a32a72750581370261ef554a717d21a4dc4cf3f125edbe62cbb85f68388d6ad25f028035d6ff6b7e086ab0f81505e694045ce6ad94d88a96838658933";

export default async function login(req, res) {
  const { username, password } = req.headers;

  if (username == null || password == null) {
    res.sendStatus(401);
    return;
  }

  const user = await clientModel.findOne({
    username: username,
  });

  if (user == null) {
    res.sendStatus(401);
    return;
  }

  const valido = await bcrypt.compare(password, user.password);

  if (valido) {
    const token = jwt.sign(username, ACCESS_TOKEN);
    console.log(token);
    res.status(200).json({ token });
  } else {
    res.sendStatus(401);
  }
}
