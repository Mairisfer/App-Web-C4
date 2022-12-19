export default function validatePassword(req, res, next) {
  const { password } = req.body.user;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        "Asegura tu contraseña e username tenga al menos 5 caracteres, un caracter especial, mayuscula y numero",
    });
  }
  next();
}
