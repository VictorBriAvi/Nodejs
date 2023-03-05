/* Se intalo npm i eslint-config-prettier eslint-plugin-prettier nodemon -D  */
/* npm i express */
/* npm i faker@5.5.3 -S */
/* La res es la request, la peticion */
/* La res seria la respuesta (responde) */
/*  npm i @hapi/boom para manejos de errores */
/* npm i joi */
/*  npm i -D mocha chai  (Esto funciona para hacer testing*/

/* 
  CORS
  HTTP
  BUILD
  LOGS
  SEGURIDAD
  TESTING

*/

const express = require("express");
const cors = require("cors");
const { errorLogs, handlerError } = require("./middleware/error.handle");
const apiRouter = require("./server");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

apiRouter(app);

app.use(handlerError);
app.use(errorLogs);

app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
