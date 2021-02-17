const Tank = require("./class/tank");
const { randomNum } = require("./util/random");

function init(io) {
  /** @type {{ [i: string]: Tank }} */
  let tanks = {};

  io.on("connection", socket => {
    console.log(socket.id, "connected");

    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
      if (tanks[socket.id]) {
        // todo: also tell them the id so they can properly animate him
        delete tanks[socket.id];
        io.emit("updateTank", serializeTanks());
      }
    });

    socket.on("name", n => {
      if (n.length > 16) return socket.disconnect();

      let tank = new Tank(n, randomNum(0, 50), randomNum(0, 50), "basic", 50);
      tanks[socket.id] = tank;

      socket.emit("spawned", tank.toObject());
      io.emit("updateTank", serializeTanks());
    });
  });

  function serializeTanks() {
    const output = {};
    for (const k in tanks) output[k] = tanks[k].toObject();

    return output;
  }
}

module.exports = { init };