const text = document.querySelector(".text")! as HTMLInputElement;
const active = document.querySelector(".active")! as HTMLParagraphElement;
const secondDiv = document.querySelector(".secondDiv") as HTMLDivElement;
const allDiv = document.querySelector(".allDiv") as HTMLDivElement;
const allText = document.querySelector(".allText")!;
const iconMoon = document.querySelector(".icon-moon") as HTMLImageElement;
const iconSun = document.querySelector(".icon-sun") as HTMLImageElement;
const par = document.querySelector(".par")!;

const completeds = document.querySelector(
  ".completeds"
)! as HTMLParagraphElement;
const todoContainer = document.querySelector(".todoContainer")! as HTMLElement;
const myDiv = document.querySelector(".myDiv")!;

const bgMobile = document.querySelector(".bg-img")! as HTMLImageElement;
iconMoon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  text.classList.toggle("darks");
  iconMoon.style.display = "none";
  iconSun.style.display = "block";

  const divInContainer = todoContainer.querySelector(".myDiv");
  if (divInContainer) {
    divInContainer.classList.add("darks");
    allDiv.classList.add("darks");
    secondDiv.classList.add("darks");
    active.classList.add("texts");
    par.classList.add("texts");
    completeds.classList.add("texts");
    allText.classList.add("texts");
  } else {
    allDiv.classList.add("darks");
    secondDiv.classList.add("darks");
    active.classList.add("texts");
    par.classList.add("texts");
    completeds.classList.add("texts");
    allText.classList.add("texts");
  }

  if (document.body.classList.contains("dark")) {
    bgMobile.src = "images/bg-mobile-dark.jpg";
    allDiv.classList.add("darks");
    secondDiv.classList.add("darks");
    active.classList.add("texts");
    par.classList.add("texts");
    completeds.classList.add("texts");
    allText.classList.add("texts");
  } else if (!document.body.classList.contains("dark")) {
    bgMobile.src = "images/bg-mobile-light.jpg";
    // allDiv.classList.add("white");
    // secondDiv.classList.add("white");
    // active.classList.add("texts");
    // par.classList.add("texts");
    // completeds.classList.add("texts");
    // allText.classList.add("texts");
  }
});

iconSun.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  text.classList.toggle("darks");
  iconMoon.style.display = "block";
  iconSun.style.display = "none";

  const divInContainer = todoContainer.querySelector(".myDiv");
  if (divInContainer && document.body.classList.contains("dark")) {
    myDiv.classList.add("darks");
    divInContainer.classList.toggle("darks");
    allDiv.classList.toggle("darks");
    secondDiv.classList.toggle("darks");
    active.classList.toggle("texts");
    par.classList.toggle("texts");
    completeds.classList.toggle("texts");
    allText.classList.toggle("texts");
  }

  if (document.body.classList.contains("dark")) {
    allDiv.classList.toggle("darks");
    secondDiv.classList.toggle("darks");
    active.classList.toggle("texts");
    par.classList.toggle("texts");
    completeds.classList.toggle("texts");
    allText.classList.toggle("texts");
    bgMobile.src = "images/bg-mobile-dark.jpg";
  } else {
    bgMobile.src = "images/bg-mobile-light.jpg";
  }
});

const secondContainer = document.querySelector(
  ".secondContainer"
)! as HTMLElement;
const thirdContainer = document.querySelector(
  ".thirdContainer"
)! as HTMLElement;

const clearCompleted = document.querySelector(
  ".completed"
) as HTMLParagraphElement;

let span = document.getElementById("span")! as HTMLSpanElement;
const spanText = span.textContent;

text.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.keyCode === 13) {
    const checkBox = document.createElement("input")! as HTMLInputElement;
    const div = document.createElement("div");

    const divList = [...todoContainer.querySelectorAll("div")];
    // const divCount = divList.indexOf(divList[divList.length + 1]);
    let divCount = todoContainer.querySelectorAll("div").length + 1;
    console.log(`Number of div elements inside todoContainer: ${divCount}`);

    const par = document.createElement("p")!;
    par.className = "par";
    secondDiv.style.display = "block";

    const img = document.createElement("img");
    div.className = "myDiv";
    // img.src = "cross.svg";
    img.src = `${"images/cross"}.svg`;
    // creating the clear cpmpleted text

    // creating the div to host values
    allDiv.style.display = "block";
    const h1 = document.createElement("h4")!;
    h1.textContent = text.value;
    img.className = "imgOne";
    checkBox.type = "checkbox";
    checkBox.className = "inputCheck";
    h1.className = "hOne";
    div.append(h1, checkBox);

    todoContainer.append(div, img);

    checkBox.addEventListener("click", () => {
      h1.classList.toggle("toggle");
      h1.classList.toggle("color");

      if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
        divCount--;
        span.textContent = `${divCount}`;
      }

      clearCompleted.addEventListener("click", () => {
        if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
          todoContainer.style.display = "none";
        }
      });
    });

    const imgOne = document.querySelector(".imgOne")! as HTMLImageElement;
    imgOne.addEventListener("click", () => {
      div.style.display = "none";
      imgOne.style.display = "none";
    });

    span.textContent = `${divCount}`;

    if (text.value.trim() === "") {
      alert("What is on your mind");
      window.location.reload();
    }

    active.addEventListener("click", () => {
      if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
        div.style.display = "none"; // Hide the div
        imgOne.style.display = "none";
      } else {
        div.style.display = "block"; // Show the div
        imgOne.style.display = "block";
      }
    });

    completeds.addEventListener("click", () => {
      if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
        div.style.display = "block"; // Hide the div
      } else {
        div.style.display = "none"; // Show the div
        imgOne.style.display = "block";
      }
    });

    allText.addEventListener("click", () => {
      if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
        div.style.display = "block"; // Hide the div
        imgOne.style.display = "block";
      } else {
        imgOne.style.display = "block";
        div.style.display = "block"; // Show the div
      }
    });
  }
});
