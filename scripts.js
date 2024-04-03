function toggleFunction() {
  var x = document.getElementById("main-header");
  if (x.classList.contains("menu")) {
    x.classList.remove("menu");
  } else {
    x.classList.add("menu");
  }
}
