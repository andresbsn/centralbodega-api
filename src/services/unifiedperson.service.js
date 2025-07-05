// src/services/personasunificadas.service.js
import pool from "../config/db.js";

export const searchUnifiedPersonService = async (nombre, limit = 20, offset = 0) => {
  const query = `
    SELECT SQL_CALC_FOUND_ROWS * FROM personas_unificadas
    WHERE nombre_completo LIKE ?
    LIMIT ? OFFSET ?
  `;

  const [rows] = await pool.query(query, [`%${nombre}%`, limit, offset]);

  const [[{ total }]] = await pool.query("SELECT FOUND_ROWS() AS total");

  return { resultados: rows, total };
};


export const getDetailPersonService = async (id_persona) => {
  const [rsi] = await pool.query("SELECT * FROM base_rsi WHERE id_personas = ?", [id_persona]);
  const [iess] = await pool.query("SELECT * FROM iess_guayaquil_2016 WHERE id_personas = ?", [id_persona]);
  const [cte] = await pool.query("SELECT * FROM base_cte_todo WHERE id_personas = ?", [id_persona]);

  return {
    rsi: rsi[0] || null,
    iess: iess[0] || null,
    cte: cte.length > 0 ? cte : null,
  };
};