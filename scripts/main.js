
var txt = "Taylor Goldman"

var i = 0;
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

document.querySelector("#left5").addEventListener("click", (event) => {
  if(document.querySelector("#innerItemOne5").classList.contains("active")) {
    document.querySelector("#itemThree5").innerHTML = `<div id="innerItemThree5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5-3.png" alt="Third slide">
    </div>`;
    document.querySelector("#itemOne5").innerHTML = `<div id="innerItemOne5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5cover.png" alt="First slide">
    </div>`;
    document.querySelector("#tabThree5").innerHTML = `<li id="third5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabOne5").innerHTML = `<li id="first5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  } else if(document.querySelector("#innerItemTwo5").classList.contains("active")) {
    document.querySelector("#itemOne5").innerHTML = `<div id="innerItemOne5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5cover.png" alt="First slide">
    </div>`;
    document.querySelector("#itemTwo5").innerHTML = `<div id="innerItemTwo5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5-2.png" alt="Second slide">
    </div>`;
    document.querySelector("#tabOne5").innerHTML = `<li id="first5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabTwo5").innerHTML = `<li id="second5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  } else {
    document.querySelector("#itemTwo5").innerHTML = `<div id="innerItemTwo5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5-2.png" alt="Second slide">
    </div>`;
    document.querySelector("#itemThree5").innerHTML = `<div id="innerItemThree5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5-3.png" alt="Third slide">
    </div>`;
    document.querySelector("#tabTwo5").innerHTML = `<li id="second5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabThree5").innerHTML = `<li id="third5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  }
});
document.querySelector("#right5").addEventListener("click", (event) => {
  if(document.querySelector("#innerItemOne5").classList.contains("active")) {
    document.querySelector("#itemTwo5").innerHTML = `<div id="innerItemTwo5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5-2.png" alt="Second slide">
    </div>`;
    document.querySelector("#itemOne5").innerHTML = `<div id="innerItemOne5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5cover.png" alt="First slide">
    </div>`;
    document.querySelector("#tabTwo5").innerHTML = `<li id="second5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabOne5").innerHTML = `<li id="first5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  } else if(document.querySelector("#innerItemTwo5").classList.contains("active")) {
    document.querySelector("#itemThree5").innerHTML = `<div id="innerItemThree5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5-3.png" alt="Third slide">
    </div>`;
    document.querySelector("#itemTwo5").innerHTML = `<div id="innerItemTwo5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5-2.png" alt="Second slide">
    </div>`;
    document.querySelector("#tabThree5").innerHTML = `<li id="third5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabTwo5").innerHTML = `<li id="second5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  } else {
    document.querySelector("#itemOne5").innerHTML = `<div id="innerItemOne5" class="carousel-item active">
    <img class="d-block w-100" src="images/portfolio/project5cover.png" alt="First slide">
    </div>`;
    document.querySelector("#itemThree5").innerHTML = `<div id="innerItemThree5" class="carousel-item">
    <img class="d-block w-100" src="images/portfolio/project5-3.png" alt="Third slide">
    </div>`;
    document.querySelector("#tabOne5").innerHTML = `<li id="first5" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">`;
    document.querySelector("#tabThree5").innerHTML = `<li id="third5" data-target="#carouselExampleIndicators" data-slide-to="0">`;
  }
});


