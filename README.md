# panelCentralBodega-api

Backend del sistema **Central Bodega**, encargado de exponer la información de PYMES e IESS a través de una API.

---

## 🔧 Tecnologías

- Node.js
- Express
- MySQL o PostgreSQL (ajustar según corresponda)
- dotenv

---

## 📁 Estructura del Proyecto

```
panelCentralBodega-api/
├── controllers/
├── routes/
├── services/
├── database/
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Cómo iniciar

1. Cloná el repositorio:

```bash
git clone https://github.com/andresbsn/centralbodega-api.git
cd panelCentralBodega-api
```

2. Instalá las dependencias:

```bash
npm install
```

3. Creá un archivo `.env` con la configuración necesaria:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=centralbodega
```

4. Iniciá el servidor:

```bash
npm run dev
```

---

## 📡 Endpoints principales

| Método | Ruta                | Descripción                          |
|--------|---------------------|--------------------------------------|
| GET    | /pymesguayas/all    | Lista de PYMES del Guayas            |
| GET    | /iessguayaquil/all  | Lista de registros IESS de Guayaquil |

---

## 🧑‍💻 Autor

Proyecto desarrollado por **Andrés B.**  
📂 [GitHub](https://github.com/andresbsn)
