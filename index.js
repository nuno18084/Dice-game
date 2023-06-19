const randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

if (randomNumber1 === 1) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 === 6) {
  const img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice6.png");
}

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

if (randomNumber2 === 1) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 === 6) {
  const img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  const wins1 = document.getElementsByTagName("h1");
  wins1[0].innerHTML = "🚩 Play 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  const wins2 = document.getElementsByTagName("h1");
  wins2[0].innerHTML = "Play 2 wins! 🚩";
} else {
  const ties = document.getElementsByTagName("h1");
  ties[0].innerHTML = "Draw!";
}
