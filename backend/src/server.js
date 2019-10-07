const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
require('dotenv').config();

const app = express();
const server = http.Server(app);
const io = socketio(server);


mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@omnistack9-cy7ko.mongodb.net/aircnc?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const connectedUsers = {};

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
});

 app.use((req, res, next) =>{
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
 })
// GET, POST, PUT, DELETE REST API
// req.query = Acessar query params(para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
