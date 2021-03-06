const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const { init } = require("./game");

app.use(require("express").static(__dirname + "/public"));
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

http.listen(8080);

init(io);

console.log("Ready on http://localhost:8080");