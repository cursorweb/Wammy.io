import { values } from "../global";

export function sharpenCanvas() {
  const { canvas, ctx } = values;

  let dpr = devicePixelRatio || 1;
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;

  // canvas.style.width = innerWidth + "px";
  // canvas.style.height = innerHeight + "px";

  ctx.scale(dpr, dpr);
}