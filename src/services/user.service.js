import pool from "../config/db.js";

export const verifyCredentials = async (usuario) => {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE usuario = ?",
    [usuario]
  );
  return rows[0]; // Devuelve el primer usuario encontrado (o undefined)
};