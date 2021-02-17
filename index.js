const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(require("express").static(__dirname + "/public"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

http.listen(8080);

io.on("connection", socket => {
  console.log(socket.id, "connected");

  socket.on("disconnect", () => {
    console.log(socket.id, "disconnected");
  });

  socket.on("name", n => {
    if (n.length > 16) return socket.disconnect();
    socket.emit("createTank");
  });
});


console.log("Ready on http://localhost:8080");