import { initEvents } from "./util/events";
import { draw } from "./scenes/game";
import { values } from "./global";

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

  socket.on("connect", () => {
    socket.emit("name", name);

    initEvents();

    function mainLoop() {
      draw(socket, ctx);
      requestAnimationFrame(mainLoop);
    }

    mainLoop();

    setInterval(() => {
      // todo socket send syncTank
    });
  });
}