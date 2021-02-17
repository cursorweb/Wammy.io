import { values } from "../global";

export function draw() {
  const { ctx, socket, player, tanks } = values;
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.ellipse(player.x, player.y, 20, 20, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();

  for (const k in tanks) {
    const tank = tanks[k];

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.ellipse(tank.x, tank.y, 20, 20, 0, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.fillText(tank.name, tank.x, tank.y);
  }
}