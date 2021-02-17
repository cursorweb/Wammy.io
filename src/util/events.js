import { values } from "../global";

export function initEvents() {
  values.canvas.width = innerWidth;
  values.canvas.height = innerHeight;

  values.canvas.addEventListener("mousemove", e => {
    const rect = values.canvas.getBoundingClientRect();
    values.mouse.x = e.clientX - rect.left;
    values.mouse.y = e.clientY - rect.top;
  }, true);

  window.addEventListener("keydown", e => {
    values.keys[e.key] = true;
    // e.preventDefault();
  }, true);

  window.addEventListener("keyup", e => {
    values.keys[e.key] = false;
    // e.preventDefault();
  }, true);

  window.onbeforeunload = () => {
    // return "Are you sure you want to quit?";
  };

  window.addEventListener("resize", () => {
    values.canvas.width = innerWidth;
    values.canvas.height = innerHeight;
  });
}