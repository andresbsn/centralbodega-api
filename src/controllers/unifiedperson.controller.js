// src/controllers/personasunificadas.controller.js
import { searchUnifiedPersonService } from "../services/unifiedperson.service.js";
import { getDetailPersonService } from "../services/unifiedperson.service.js";

export const searchUnifiedPerson = async (req, res) => {
  const { nombre, limit = 50, offset = 0 } = req.query;

  if (!nombre) {
    return res.status(400).json({ mensaje: "Falta el parámetro 'nombre'" });
  }

  try {
    const { resultados, total } = await searchUnifiedPersonService(nombre, parseInt(limit), parseInt(offset));
    res.json({ resultados, total });
  } catch (error) {
    console.error("Error al buscar personas unificadas:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};


export const getDetailPerson = async (req, res) => {
  const { id } = req.params;

  try {
    const detalles = await getDetailPersonService(id);
    res.json(detalles);
  } catch (error) {
    console.error("Error al obtener detalles de persona:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};