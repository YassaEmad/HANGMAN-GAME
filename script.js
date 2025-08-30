"use strict";

const catg = document.querySelector(".catg");
const words = document.querySelector(".words");
const theDraw = document.querySelector(".hangman_draw");
const theWin = document.querySelector(".win");
const theGameover = document.querySelector(".gameover");
const resetBtn = document.querySelectorAll(".reset");
// ================================================================================

// random words
const randomWords = {
  programming: ["R", "JAVA", "JAVASCRIPT", "PYTHON", "PHP"],
  majors: ["MECHATRONICS", "COMPUTER", "ELCTRICAL", "MECHANICAL", "scientist"],
  players: ["MESSI", "RONALDO", "HAZARD", "SALAH", "PELE"],
  Players: ["PEDRI", "INISTA", "SHIKABALA", "MARMOUSH", "YAMAL"],
  countries: ["EGYPT", "USA", "ENGLAND", "GERMANY", "SPAIN"],
  Countries: ["ITALY", "RUSSIA", "FRANCE", "PORTUGAL", "BRAZIL"],
};
let allKeys = Object.keys(randomWords);
const randomArr = Math.trunc(Math.random() * 6);
const randomEl = Math.trunc(Math.random() * 5);
const randomPropArr = allKeys[randomArr];
const randomPropEl = randomWords[randomPropArr][randomEl];
console.log(randomPropEl);
// ================================================================================
// gameover function
function gameover() {
  document.getElementById("hidden_lose").style.display = "flex";
  document.querySelector(
    ".thecorword"
  ).textContent = `The word is ${choosenWord.join("")}`;
}
// win function
function win() {
  document.getElementById("hidden_win").style.display = "flex";
}
// reset function
function reset() {
  window.location.reload();
}
// ================================================================================
// intit
catg.textContent = randomPropArr;

// letters guess
let choosenWord = Array.from(randomPropEl);
choosenWord.forEach((letter) => {
  let emptySpan = document.createElement("span");
  emptySpan.textContent = "-";
  words.appendChild(emptySpan);
});

// =================================================================================
const wordsSpan = document.querySelectorAll(".words span");
let trys = 0;
// =================================================================================
// letters keybord
document.addEventListener("click", (e) => {
  // state
  let state = false;
  //   ========================

  if (e.target.className == "letr") {
    e.target.classList.add("clicked");

    // getletter
    let getLeter = e.target.textContent;
    choosenWord.forEach((wordL, wordIndex) => {
      if (getLeter == wordL) {
        state = true;
        wordsSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.textContent = wordL;
          }
        });
      }
    });
    if (state === false) {
      trys++;
      theDraw.classList.add(`wrong-${trys}`);
      document.getElementById("fail").play();
      if (trys === 8) {
        document.getElementById("gameover").play();
        gameover();
      }
    } else {
      document.getElementById("suc").play();
      if (choosenWord.join("") === words.textContent) {
        document.getElementById("win").play();
        win();
      }
    }
    console.log(state);
  }
});

// reset
document.querySelectorAll(".reset").forEach((btn) => {
  btn.addEventListener("click", reset);
});
