

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector(".game");
const ctx = canvas.getContext("2d");

const socket = io("/", { autoConnect: false });

socket.connect();

socket.on("connect", () => {
  
});