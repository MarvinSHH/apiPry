const express = require("express");
const mongoose = require("mongoose");
import cors from "cors";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const device = require("./src/routes/dispositivo");
const product = require("./src/routes/productos");
const typeUser = require("./src/routes/tipoUsuario");
const user = require("./src/routes/usuarios");

//CORES
const ACCEPTEP_ORIGINS = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || ACCEPTEP_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//midlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ response: "Prueba de Devices" });
});

app.use("/api/", device);
app.use("/api/", product);
app.use("/api/", typeUser);
app.use("/api/", user);

//coneccion con la base de dato
mongoose
  .connect(process.env.mongouri)
  .then(() => console.log("conectado a la base"))
  .catch((error) => console.log(error));
app.listen(port, () => {
  console.log("corriendo en el puerto " + port);
});
