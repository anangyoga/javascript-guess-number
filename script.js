const btn = document.getElementById("btn");
const prompt_box = document.getElementById("prompt_box");
const prompt_txt = document.getElementById("prompt_txt");
const txt = document.getElementById("txt");
const num = document.getElementById("num");
let chancesTxt = document.getElementById("chancesTxt");

let number;
let randomNumber = Math.floor(Math.random() * 10) + 1;
let chances = 3;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  console.log(num.value);
  e.preventDefault();

  chances--;
  chancesTxt.innerHTML = `Chances: -${chances}`;
  if (chances == 0) {
    activateBox("Lose");
  }

  number = num.value;
  cekNum(number);
  num.value = "";
});

cekNum = (number) => {
  if (number == randomNumber) {
    activateBox("Win");
  } else if (number > randomNumber) {
    txt.innerText = "Your guess is too high";
  } else {
    txt.innerText = "Your guess is too small";
  }
};

activateBox = (e) => {
  prompt_box.classList.add("active");
  prompt_txt.innerHTML = `You ${e} The Game`;
};
play = (e) => {
  prompt_box.classList.remove("active");
  chances = 3;
  chancesTxt.innerHTML = `Chances: -${chances}`;
  txt.innerHTML = "";
};
