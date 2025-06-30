import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
