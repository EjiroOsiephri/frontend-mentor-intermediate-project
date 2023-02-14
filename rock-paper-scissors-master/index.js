const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const imagesContainer = document.querySelector(".images-container");
const imagesTriangle = document.querySelector(".img-triangle");
const image = document.querySelectorAll("img");
const images = document.querySelectorAll(".call");
const firstOne = document.getElementById("firstOne");
const secondOne = document.getElementById("secondOne");
const computerContribution = document.querySelector(".computerContribution");
const computerImage = document.querySelector(".computerImage");
let computerChoice;
rock.addEventListener("click", () => {
  const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  const img = document.createElement("img");

  if (computerChoiceNum === 1) {
    computerChoice = "rock";
    // const create = document.createElement("img");
    // create.src = `${computerChoiceNum}`;
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  scissors.style.display = "none";
  paper.style.display = "none";
  imagesTriangle.style.display = "none";
  rock.style.marginTop = "200px";
  rock.style.marginLeft = "-80px";
  firstOne.textContent = "You picked";
  firstOne.style.marginTop = "-400px";
  firstOne.style.marginLeft = "20px";
  secondOne.textContent = "The house picked";
  secondOne.style.marginLeft = "150px";
  secondOne.style.marginTop = "-25px";
  console.log(computerChoiceNum, computerChoice);
  computerImage.classList.add(`${computerChoice}`);
  computerImage.src = `${computerChoice}.svg`;
  computerContribution.style.marginTop = "170px";
  if (computerChoice === "rock") {
    computerContribution.style.marginTop = "-100px";
    computerContribution.style.marginLeft = "100px";
    firstOne.style.marginTop = "-90px";
    firstOne.style.marginLeft = "-85px";
    // secondOne.style.marginRight = "540px";
    secondOne.style.transform = "translateX(-80px)";
    secondOne.style.whiteSpace = "nowrap";
  } else if (computerChoice === "paper") {
    computerContribution.style.marginTop = "-28px";
    computerContribution.style.marginLeft = "160px";
    firstOne.style.marginTop = "-190px";
    firstOne.style.marginLeft = "-130px";
    secondOne.style.marginLeft = "-15px";
  }
});

//   let result;
//   if (computerChoice === "rock") {
//     result = "It's a tie!";
//   } else if (computerChoice === "paper") {
//     result = "You lose!";
//   } else {
//     result = "You win!";
//   }
scissors.addEventListener("click", () => {
  const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  const img = document.createElement("img");

  if (computerChoiceNum === 1) {
    computerChoice = "rock";
    // const create = document.createElement("img");
    // create.src = `${computerChoiceNum}`;
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  scissors.style.display = "block";
  paper.style.display = "none";
  rock.style.display = "none";
  imagesTriangle.style.display = "none";
  rock.style.marginTop = "200px";
  rock.style.marginLeft = "-80px";
  firstOne.textContent = "You picked";
  firstOne.style.marginTop = "-400px";
  firstOne.style.marginLeft = "20px";
  secondOne.textContent = "The house picked";
  secondOne.style.marginLeft = "150px";
  secondOne.style.marginTop = "-25px";
  console.log(computerChoiceNum, computerChoice);
  computerImage.classList.add(`${computerChoice}`);
  computerImage.src = `${computerChoice}.svg`;
  computerContribution.style.marginTop = "170px";
  if (computerChoice === "rock") {
    computerContribution.style.marginTop = "-100px";
    computerContribution.style.marginLeft = "100px";
    firstOne.style.marginTop = "-90px";
    firstOne.style.marginLeft = "-85px";
    // secondOne.style.marginRight = "540px";
    secondOne.style.transform = "translateX(-80px)";
    secondOne.style.whiteSpace = "nowrap";
  } else if (computerChoice === "paper") {
    computerContribution.style.marginTop = "-28px";
    computerContribution.style.marginLeft = "160px";
    firstOne.style.marginTop = "-190px";
    firstOne.style.marginLeft = "-130px";
    secondOne.style.marginLeft = "-15px";
  }
});

//   let result;
//   if (computerChoice === "rock") {
//     result = "It's a tie!";
//   } else if (computerChoice === "paper") {
//     result = "You lose!";
//   } else {
//     result = "You win!";
//   }
