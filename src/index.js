import { begin } from "./script";

let canConnect = true;

document.querySelector(".play").addEventListener("click", () => {
  if (!canConnect) return;
  document.querySelector(".game").style.display = "block";
  begin(document.querySelector(".name").value.slice(0, 16));
  canConnect = false;
});

document.querySelector(".name").addEventListener("keypress", e => {
  if (e.which == 13) document.querySelector(".play").click();
});