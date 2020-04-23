var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("#css");
var body = document.getElementById("gradient");
var button = document.getElementById("randombtn");

function getRandomRgb() {
  var randomColor = "#"+ Math.floor(Math.random()*8**8).toString(16);
  return randomColor;
}

function backgroundColorChange() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ")";
  css.textContent = body.style.background + ";"
}

function randomBackgroundColorChange() {

  var randomColor1 = getRandomRgb();
  var randomColor2 = getRandomRgb();

	color1.value = randomColor1;
  color2.value = randomColor2;

  body.style.background =
    "linear-gradient(to right, " +
    randomColor1 +
    ", " +
    randomColor2 +
    ")";

  css.textContent = body.style.background + ";"

}

color1.addEventListener("input", backgroundColorChange)
color2.addEventListener("input", backgroundColorChange)
button.addEventListener("click", randomBackgroundColorChange)
