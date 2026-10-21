# 🎮 Hangman Game

A browser-based Hangman game built with plain **HTML, CSS and JavaScript**, with no frameworks or dependencies. Guess the hidden word one letter at a time before the hangman drawing is completed. Sound effects play for correct guesses, wrong guesses, winning and losing.

## ✨ Features

- **9 word categories**: Cars, Company, Teams, Majors, Players (two lists), Countries (two lists) and Capitals, with 15 words each.
- **Random selection**: a random category and word are picked on every new game, and the category name is shown as a hint.
- **On-screen A–Z keyboard**: each letter can be used once and is greyed out after it is clicked.
- **Animated hangman drawing**: stand, hang, rope, head, body, hands and legs are drawn in stages as you make mistakes.
- **8 wrong guesses allowed** before the game is over.
- **Win and game-over screens**: the correct word is revealed when you lose.
- **Sound effects** for a correct letter, a wrong letter, a win and a game over.
- **Reset button** to start a fresh round at any time.

## 🛠️ Built With

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and audio elements |
| CSS3 (+ `normalize.css`) | Layout, styling and the hangman drawing |
| JavaScript (ES6) | Game logic, word selection and DOM updates |

## 📁 Project Structure

```
hangman/
├── index.html      # Page markup (keyboard, drawing, word area, audio)
├── style.css       # Game styling and hangman drawing stages
├── normalize.css   # CSS reset
├── script.js       # Game logic and word lists
├── suc.mp3         # Correct guess sound
├── fail.mp3        # Wrong guess sound
├── win.mp3         # Win sound
└── gameover.mp3    # Game over sound
```

## 🚀 Getting Started

No installation or build step is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/YassaEmad/HANGMAN-GAME.git
   ```
2. Open the project folder:
   ```bash
   cd HANGMAN-GAME
   ```
3. Open `index.html` in any modern web browser (or use a tool like the VS Code *Live Server* extension).

## 🕹️ How to Play

1. A random category appears at the top and the word is shown as dashes (`-`).
2. Click a letter on the keyboard.
   - **Correct letter**: it appears in every position where it occurs in the word.
   - **Wrong letter**: another part of the hangman is drawn.
3. Reveal the whole word to win. If you make **8 wrong guesses**, you lose.
4. Press **reset** to play again with a new word.

## 🔧 Customizing

To add your own words or categories, edit the `randomWords` object at the top of `script.js`. Use uppercase letters with no spaces:

```js
const randomWords = {
  Animals: ["LION", "TIGER", "ELEPHANT"],
  // ...
};
```

## 👤 Author

**Yassa Emad**: [GitHub @YassaEmad](https://github.com/YassaEmad)
