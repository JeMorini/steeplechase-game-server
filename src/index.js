const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected client");

  socket.on("jump", (data) => {
    io.emit("jumpReceived", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected Client");
  });
});

server.listen(8091, () => {
  console.log("Socket.io server running on port 8091");
});
