var svg = document.getElementById("svg-2");
var color = document.getElementById("ir");
var pat = document.getElementById("path-test");

svg.onmouseover = mouseOver;

function mouseOver() {
  pat.style.fill("color");
  pat.style.transition = "1s";
}
