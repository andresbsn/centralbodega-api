import { getAllIESSGuayaquil } from "../services/iessguayaquil.service.js";

export const GetAllIESSGuayaquil = async (req, res) => {
  try {
    const data = await getAllIESSGuayaquil();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener IESS Guayaquil:", error);
    res.status(500).json({ error: "Error al consultar la tabla IESS_GUAYAQUIL" });
  }
};
