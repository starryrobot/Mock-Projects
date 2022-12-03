const interactDiv = document.getElementById("interact");
const adviceID = document.getElementById("number");
const adviceText = document.getElementById("text");
let adviceArray = [];

interactDiv.addEventListener("click", renderAdvice);
document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  fetch("https://api.adviceslip.com/advice").then((res) => {
    if (res.ok) {
      interactDiv.classList.add("anim-glow-default");
      interactDiv.style.backgroundColor = "hsl(150, 100%, 66%)";
      console.log("API okay");
      res.json().then((data) => {
        adviceArray = {
          id: data.slip.id,
          advice: data.slip.advice,
        };
        console.log(adviceArray);
      });
      console.log(adviceArray);
    } else {
      interactDiv.classList.remove("anim-glow-default");
      interactDiv.classList.add("anim-glow-error");
      interactDiv.style.backgroundColor = "hsl(12, 98%, 44%)";
      console.log("That's an ERROR!");
    }
  });
}

function renderAdvice() {
  adviceID.textContent = `Advice #${adviceArray.id}`;
  adviceText.textContent = `"${adviceArray.advice}"`;
  onReady();
}
