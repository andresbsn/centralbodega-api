import pool from "../config/db.js";

export const getAllIESSGuayaquil = async () => {
  const [rows] = await pool.query("SELECT * FROM iess_guayaquil_2016 LIMIT 100");
  return rows;
};