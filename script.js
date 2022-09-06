`use strict`;

// document.querySelector(`.score`).textContent = `10`;

// document.querySelector(`.guess`).value = 25;

let secretNumber = Math.ceil(Math.random() * 20); // random number between 1 and 20
console.log(secretNumber);
// document.querySelector(`.number`).textContent = secretNumber;
let score = 20;
let highscore = 0;

let check = () => {
  let guess = document.querySelector(`.guess`).value;
  //console.log(guess, typeof guess); // as, it is a string, we need to convert it to a number
  guess = Number(guess); // converted string to a number
  //   console.log(guess, typeof guess);

  if (!guess) {
    //for no input
    document.querySelector(`.message`).textContent = `No Number!`;
  } else if (guess === secretNumber) {
    if (score > 1) {
      //for correct number
      document.querySelector(`.message`).textContent = `🎉 You Won the Game!`;
      document.querySelector(`.number`).textContent = secretNumber;

      //css
      document.querySelector(`body`).style.backgroundColor = `green`;
      document.querySelector(`.number`).style.width = `30rem`;
      //for highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
      }
    } else {
      document.querySelector(`.message`).textContent = `👎 You Lost the Game!`;
      document.querySelector(`.number`).textContent = secretNumber;

      document.querySelector(`.score`).textContent = 0;
      //css
      document.querySelector(`body`).style.backgroundColor = `red`;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `👆 Too High...` : `👇 Too Low...`;
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `👎 You Lost the Game!`;
      document.querySelector(`.number`).textContent = secretNumber;

      document.querySelector(`.score`).textContent = 0;
      //css
      document.querySelector(`body`).style.backgroundColor = `red`;
    }
  }
};

let reset = () => {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `rgb(100, 100, 250)`;
};

//dont use brackets for the function, as it will call the function rightaway, we need to call it when click event happens
document.querySelector(`.check`).addEventListener(`click`, check);
document.querySelector(`.again`).addEventListener(`click`, reset);
