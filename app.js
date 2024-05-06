const container = document.getElementById("container");
const colorButton = document.getElementById("changeColor");
const normalButton = document.getElementById("normal");
const sizeButton = document.getElementById("changeSize");
const eraseButton = document.getElementById("erase");

function blackWhite(div) {
  div.addEventListener("mouseover", () => {
    div.classList.add("backgroundColorBlack");
  });
}

function eraser() {
  var divs = document.querySelectorAll(".etch");
  divs.forEach(function (div) {
    div.classList.remove("backgroundColorBlack");
  });
}

// function divRGB(div) {
//   let red = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   div.setAttribute("style", `background: rgb(${red}, ${green}, ${blue})`);
// }

function makeBoard() {
  container.innerHTML = "";
  let boxes = prompt("Write a number bewteen 20 and 100");
  if (boxes < 20 || boxes > 100 || boxes === NaN || boxes === undefined) {
    alert("Please write a number bewteen 20 and 100");
    writeBoard(20);
  } else {
    writeBoard(boxes);
  }
}

function writeBoard(boxes) {
  let boxesArea = 960;
  let boxeSizes = boxesArea / boxes;
  let totalDivs = boxes * boxes;
  for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement("div");
    div.id = `${i}`;
    div.setAttribute("style", `width: ${boxeSizes}px; height: ${boxeSizes}px;`);
    div.classList.add("etch");
    container.appendChild(div);
    blackWhite(div);
  }
}

makeBoard();

sizeButton.addEventListener("click", function () {
  makeBoard();
});

eraseButton.addEventListener("click", function () {
  eraser();
});