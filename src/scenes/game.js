import { values } from "../global";

export function draw() {
  const { ctx, socket, player, tanks } = values;

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  ctx.save();
  ctx.scale(1, 1); // todo: sight
  ctx.translate(innerWidth / 2, innerHeight / 2);
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.ellipse(0, 0, 20, 20, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // game graphics
  ctx.save();
  ctx.translate(innerWidth / 2 - player.x, innerHeight / 2 - player.y);
  ctx.scale(1, 1); // todo: sight

  for (const k in tanks) {
    const tank = tanks[k];

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.ellipse(tank.x, tank.y, 20, 20, 0, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    text(tank.name, tank.x, tank.y);
  }
  ctx.restore();

  // menu graphics (lb, score)
}

function text(s, x, y, color = "#fff", border = "#000", size = 12, center = true) {
  const { ctx } = values;

  ctx.font = `${size}px Ubuntu, sans-serif`;
  if (center) ctx.textAlign = "center";
  ctx.fillStyle = color;
  ctx.strokeStyle = border;
  ctx.lineWidth = 4;
  ctx.strokeText(s, x, y);
  ctx.fillText(s, x, y);
}