import { verifyCredentials } from "../services/user.service.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ mensaje: "Faltan datos" });
  }

  try {
    const usuarioDB = await verifyCredentials(user);

    if (!usuarioDB) {
      return res.status(401).json({ mensaje: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, usuarioDB.contraseña);
    if (!validPassword) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    res.status(200).json({ mensaje: "Login exitoso", usuario: usuarioDB.usuario });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};
