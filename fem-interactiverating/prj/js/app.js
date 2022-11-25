// 1. Get option user selects after submit
// 2. Change color of user selected option
// 3. Show confirmation
// 4. Remove initial screen

const optionDivs = document.querySelectorAll(".option");
const topDiv = document.getElementById("topdiv");
const midDiv = document.getElementById("middiv");
const confirmDiv = document.getElementById("confirmdiv");
const submitBtn = document.getElementById("submit");
const selectionTxt = document.getElementById("select");
let optionArray = [];
let lastOption = 0;
let zeroInput = false;

optionDivs.forEach(function (btn) {
  optionArray = optionDivs;
  console.log(optionArray);
  btn.addEventListener("click", function (e) {
    let getStyles = e.currentTarget.classList;
    if (getStyles.contains("option-1")) {
      lastOption = e.currentTarget.textContent;
      console.log("Option 1 chosen");
      e.currentTarget.classList.toggle("selected");
      selectionTxt.textContent =
        "You selected " + "1 out of" + " " + optionArray.length;
    } else if (getStyles.contains("option-2")) {
      lastOption = e.currentTarget.textContent;
      console.log("Option 2 chosen");
      e.currentTarget.classList.toggle("selected");
      selectionTxt.textContent =
        "You selected " + "2 out of" + " " + optionArray.length;
    } else if (getStyles.contains("option-3")) {
      lastOption = e.currentTarget.textContent;
      console.log("Option 3 chosen");
      e.currentTarget.classList.toggle("selected");
      selectionTxt.textContent =
        "You selected " + "3 out of" + " " + optionArray.length;
    } else if (getStyles.contains("option-4")) {
      lastOption = e.currentTarget.textContent;
      console.log("Option 4 chosen");
      e.currentTarget.classList.toggle("selected");
      selectionTxt.textContent =
        "You selected " + "4 out of" + " " + optionArray.length;
    } else if (getStyles.contains("option-5")) {
      lastOption = e.currentTarget.textContent;
      console.log("Option 4 chosen");
      e.currentTarget.classList.toggle("selected");
      selectionTxt.textContent =
        "You selected " + "5 out of" + " " + optionArray.length;
    } else {
      lastOption = 0;
    }
  });
});

submitBtn.addEventListener("click", getRating);

function getRating() {
  let updatedArray = [...document.querySelectorAll(".option.selected")];
  console.log(lastOption);
  if (updatedArray.length > 1) {
    for (let i = 0; i < updatedArray.length; i++) {
      updatedArray[i].classList.remove("selected");
    }
  }
  lastRating();
}

function lastRating() {
  console.log(`Last choice was ${lastOption}`);
  //   optionArray[0].classList.toggle("selected");
  if (lastOption == 1) {
    optionArray[0].classList.toggle("selected");
    console.log(optionArray[lastOption]);
  } else if (lastOption == 2) {
    optionArray[1].classList.toggle("selected");
    console.log(optionArray[lastOption]);
  } else if (lastOption == 3) {
    optionArray[2].classList.toggle("selected");
    console.log(optionArray[lastOption]);
  } else if (lastOption == 4) {
    optionArray[3].classList.toggle("selected");
    console.log(optionArray[lastOption]);
  } else if (lastOption == 5) {
    optionArray[4].classList.toggle("selected");
    console.log(optionArray[lastOption]);
  } else {
    zeroInput = true;
  }
  setTimeout(animateDivs, 200);
}

function animateDivs() {
  if (zeroInput === true) {
    let noInputContent = `
                          <h1 class="header">Oops!</h1>
                          <p class="para">You didn't make a choice!</p>
                          <button class="btn btn-submit" onclick="window.location.reload()">Try again</button>
                          `;
    topDiv.style.display = "none";
    midDiv.style.display = "none";
    confirmDiv.classList.add("puff-in-center");
    confirmDiv.innerHTML = noInputContent;
    confirmDiv.style.display = "flex";
  } else {
    topDiv.classList.add("puff-out-center");
    midDiv.classList.add("puff-out-center");
    setTimeout(display, 300);
    function display() {
      topDiv.style.display = "none";
      midDiv.style.display = "none";
      confirmDiv.classList.add("puff-in-center");
      confirmDiv.style.display = "flex";
    }
  }
}
