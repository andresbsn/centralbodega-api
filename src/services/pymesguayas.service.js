import pool from "../config/db.js";

export const getAllPymes = async () => {
  const [rows] = await pool.query("SELECT * FROM MYPIMES_GUAYAS LIMIT 100");
  return rows;
};
