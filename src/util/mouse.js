export function initEvents(canvas, mouse, key) {
  canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, true);

  window.addEventListener("keydown", e => {
    keys[e.key] = true;
  }, true);

  window.addEventListener("keyup", e => {
    keys[e.key] = false;
  }, true);
}