// variables declaration
let generatedRgb = document.getElementById("generated-rgb");
let newColors = document.getElementById("new-colors");
let result = document.getElementById("result");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");
let colors = document.querySelectorAll(".colors");
let body = document.querySelector("body");
let nav = document.querySelector("header nav");

// functions declaration
function initialize() {
  let length = colors.length;
  easyBtn.addEventListener("click", setToEasy);
  hardBtn.addEventListener("click", setToHard);
  for (let i = 0; i < length; i++) {
    colors[i].addEventListener("click", checkColor);
  }

  if (hardBtn.classList.contains("current")) {
    setToHard();
  } else {
    setToEasy();
  }
}

function setColorsVisibility() {
  let length = colors.length;
  for (let i = 0; i < length; i++) {
    colors[i].style.visibility = "visible";
  }
}

function setTitleRgb() {
  generatedRgb.innerText =
    "rgb(" +
    Math.floor(Math.random() * 250) +
    ", " +
    Math.floor(Math.random() * 250) +
    ", " +
    Math.floor(Math.random() * 250) +
    ")";
  nav.style.backgroundColor = "#3f72af";
}

function setToHard() {
  let randomPlace = Math.floor(Math.random() * 6);
  let length = colors.length;
  hardBtn.classList.add("current");
  easyBtn.classList.remove("current");
  for (let i = 0; i < length; i++) {
    colors[i].style.display = "block";
  }
  setColorsVisibility();
  setTitleRgb();
  setShowcaseColors();
  colors[randomPlace].style.backgroundColor = generatedRgb.innerText;
}

function setToEasy() {
  let length = colors.length;
  let randomPlace = Math.floor(Math.random() * 3);
  easyBtn.classList.add("current");
  hardBtn.classList.remove("current");
  for (let i = 0; i < length; i++) {
    if (i < 3) {
      colors[i].style.display = "block";
    } else {
      colors[i].style.display = "none";
    }
  }
  setColorsVisibility();
  setTitleRgb();
  setShowcaseColors();
  colors[randomPlace].style.backgroundColor = generatedRgb.innerText;
}

function setShowcaseColors() {
  let firstColor = 0;
  let secondColor = 0;
  let thirdColor = 0;
  for (let i = 0; i < colors.length; i++) {
    firstColor = Math.floor(Math.random() * 250);
    secondColor = Math.floor(Math.random() * 250);
    thirdColor = Math.floor(Math.random() * 250);
    colors[i].style.backgroundColor =
      "rgb(" + firstColor + "," + secondColor + "," + thirdColor + ")";
  }
}

function checkColor() {
  let audio;
  if (this.style.backgroundColor === generatedRgb.innerText.toLowerCase()) {
    audio = new Audio("/sounds/success.mp3");
    audio.play();
    result.innerText = "correct";
    nav.style.backgroundColor = generatedRgb.innerText;
    for (let i = 0; i < colors.length; i++) {
      colors[i].style.visibility = "visible";
      colors[i].style.backgroundColor = generatedRgb.innerText;
    }
  } else {
    audio = new Audio("/sounds/failure.mp3");
    audio.play();
    this.style.visibility = "hidden";
    result.innerText = "wrong";
  }
}

// main

body.onload = function() {
  initialize();
};

newColors.onclick = function() {
  initialize();
};
