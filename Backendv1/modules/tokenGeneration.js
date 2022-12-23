import jwt from "jsonwebtoken";

const privateKey = process.env.PRIVATE_KEY;

export function genToken(element) {
  const token = jwt.sign(element, privateKey);
  return token;
}

export function validateToken(req, res, next) {
  try {
    const { token } = req.headers;
    console.log(token);
    const value = jwt.verify(token, privateKey);
    req.value = value;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}
