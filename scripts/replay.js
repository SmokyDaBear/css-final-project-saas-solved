element = document.getElementById("video-play-button-top");
element.addEventListener("click", animateRight);
element.addEventListener("click", animatedBottom);
function animateRight() {
  var rightElements = document.getElementsByClassName("logos-from-right");
  rightElements.classList.remove("logos-from-bottom");
  rightElements.classList.add(logos - from - bottom);
}
function animatedBottom() {
  var bottomElements = document.getElementsByClassName("logos-from-bottom");
}
