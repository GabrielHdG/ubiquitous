var lupa = document.getElementById("svgLupa");
var search = document.getElementById("searchBar");

lupa.onclick = mouseOver;

function mouseOver() {
  search.style.width = "400px";
  search.style.border = "1px solid black";
  search.style.borderRadius = "57px 0 0 57px";
}
