"use strict";

const catg = document.querySelector(".catg");
const words = document.querySelector(".words");
const theDraw = document.querySelector(".hangman_draw");
const theWin = document.querySelector(".win");
const theGameover = document.querySelector(".gameover");
const resetBtn = document.querySelectorAll(".reset");
const winAudio = document.getElementById("win");
const gameOverAudio = document.getElementById("gameover");
// ================================================================================

// random words
const randomWords = {
  programming: ["R", "JAVA", "JAVASCRIPT", "PYTHON", "PHP"],
  majors: ["MECHATRONICS", "COMPUTER", "ELCTRICAL", "MECHANICAL", "SCIENTIST"],
  players: ["MESSI", "RONALDO", "HAZARD", "SALAH", "PELE"],
  Players: ["PEDRI", "INISTA", "SHIKABALA", "MARMOUSH", "YAMAL"],
  countries: ["EGYPT", "USA", "ENGLAND", "GERMANY", "SPAIN"],
  Countries: ["ITALY", "RUSSIA", "FRANCE", "PORTUGAL", "BRAZIL"],
};

// ================================================================================
// init var
let gameactive = true;
let choosenWord;
let trys = 0;
let wordsSpan;
// ================================================================================

// init function
function initGame() {
  // redeclare var
  trys = 0;
  gameactive = true;

  // removing wrong trys
  theDraw.className = "hangman_draw";
  // random numbers
  let allKeys = Object.keys(randomWords);
  const randomArr = Math.trunc(Math.random() * 6);
  const randomEl = Math.trunc(Math.random() * 5);
  const randomPropArr = allKeys[randomArr];
  const randomPropEl = randomWords[randomPropArr][randomEl];

  catg.textContent = randomPropArr;

  choosenWord = Array.from(randomPropEl);
  // removing all old spans
  words.innerHTML = "";
  // creating new span
  choosenWord.forEach((letter) => {
    let emptySpan = document.createElement("span");
    emptySpan.textContent = "-";
    words.appendChild(emptySpan);
  });
  // removing clicked letters
  document.querySelectorAll(".letr").forEach((btn) => {
    btn.classList.remove("clicked");
  });
  // removing win and lose temp
  document.getElementById("hidden_lose").style.display = "none";
  document.getElementById("hidden_win").style.display = "none";
  // stoping audio
  gameOverAudio.pause();
  gameOverAudio.currentTime = 0;
  winAudio.pause();
  winAudio.currentTime = 0;

// restart backgroundColor
 document.querySelector("body").style.backgroundColor =
          "var(--color_bg)";
// selecting new spans
  wordsSpan = document.querySelectorAll(".words span");
}
initGame();

// gameover function
function gameover() {
  gameactive = false;
  document.getElementById("hidden_lose").style.display = "flex";
  document.querySelector(
    ".thecorword"
  ).textContent = `The word is ${choosenWord.join("")}`;
}
// win function
function win() {
  gameactive = false;
  document.getElementById("hidden_win").style.display = "flex";
}
// =================================================================================
// letters keybord
document.addEventListener("click", (e) => {
  // state
  let state = false;
  //   ========================

  if (e.target.className == "letr" && gameactive) {
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
        document.querySelector("body").style.backgroundColor =
          "var(--color_secbg)";
        document.getElementById("win").play();
        win();
      }
    }
    console.log(state);
  }
});

// reset
document.querySelectorAll(".reset").forEach((btn) => {
  btn.addEventListener("click", initGame);
});




