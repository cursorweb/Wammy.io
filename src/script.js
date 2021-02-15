// import { Button } from "./util/button";
import { initMouse } from "./util/mouse";

/**
 * @param {string} name
 */
export function begin(name) {
  const socket = io("/");

  socket.on("connect", () => {
    socket.emit("name", name);

    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector(".game");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);
  });
}