import { getAllPymes } from "../services/pymesguayas.service.js";

export const GetAllPymes = async (req, res) => {
  try {
    const data = await getAllPymes();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener pymes:", error);
    res.status(500).json({ error: "Error al consultar las pymes" });
  }
};
