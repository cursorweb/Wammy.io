import { initEvents } from "./util/events";
import { draw } from "./scenes/game";
import { values } from "./global";
import { Tank } from "./class/tank";

/**
 * @param {string} name
 */
export function begin(name) {
  const socket = io();

  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector(".game");
  const ctx = canvas.getContext("2d");

  values.canvas = canvas;
  values.ctx = ctx;
  values.mouse = {};
  values.keys = {};
  values.socket = socket;
  values.tanks = {};

  initEvents();

  socket.on("connect", () => {
    socket.emit("name", name);

    socket.on("spawned", tank => {
      values.player = new Tank(tank.name, tank.x, tank.y, tank.type, tank.health);
      mainLoop();

      setInterval(() => {
        socket.emit("syncTank", values.player);
      }, 12);
    });

    socket.on("updateTank", tanks => {
      let output = {};

      for (const k in tanks) {
        if (k == socket.id) continue;
        const tank = tanks[k];
        output[k] = new Tank(tank.name, tank.x, tank.y, tank.type, tank.health);
      }

      values.tanks = output;
    });

    function mainLoop() {
      draw();
      requestAnimationFrame(mainLoop);
    }
  });
}