var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
//due background belli che ho trovato:

//linear-gradient(to right, rgb(16, 148, 213), rgb(199, 26, 63))
//linear-gradient(to right, rgb(16, 148, 213), rgb(255, 102, 136))