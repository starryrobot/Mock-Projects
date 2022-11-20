/* Js flow

1. On completion of all fields reveal card details
2. On confirm display div containing confirmation details, hide original content */

/* Get all elements of card component */
const ccLogo = document.querySelector(".ccard-logo");
const formSubmit = document.getElementById("btn");
const form = document.querySelector("form");
const hidden = document.getElementById("confirm-hidden");
const cardCC = document.getElementById("cardno");
const cardName = document.getElementById("cardname");
const cardExp = document.getElementById("expdate");
const cardCVC = document.getElementById("cvc");
const inputName = document.getElementById("input-ch");
const inputNumb = document.getElementById("input-cn");
const inputCVC = document.getElementById("input-cvc");
const inputExp = document.getElementById("input-xp");
const inputExp2 = document.getElementById("input-xp2");
let ccNumRegex = new RegExp(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/);
let ccNameRegex = new RegExp(/^[a-zA-Z]*\s[a-zA-Z]*\s[a-zA-Z]*$/);
let ccName = "";
let ccNum = "";
let ccCVC = "";
let ccExpiry = "";
let ccExpiry2 = "";
let cardChecked = false;

form.addEventListener("keyup", function (e) {
  ccName = document.getElementById("input-ch").value;
  ccNum = document.getElementById("input-cn").value;
  ccCVC = document.getElementById("input-cvc").value;
  ccExpiry = document.getElementById("input-xp").value;
  ccExpiry2 = document.getElementById("input-xp2").value;

  if (ccName === null || cardName.length < 3 || !ccNameRegex.test(ccName)) {
    inputName.style.border = "2px solid red";
  } else {
    inputName.style.border = "2px solid green";
    cardName.style.opacity = 1;
    cardName.textContent = ccName;
  }

  if (ccNum === null || !ccNumRegex.test(ccNum)) {
    inputNumb.style.border = "2px solid red";
  } else {
    inputNumb.style.border = "2px solid green";
    cardCC.style.opacity = 1;
    cardCC.textContent = ccNum;
  }

  if (ccCVC === null || ccCVC < 3) {
    inputCVC.style.border = "2px solid red";
  } else {
    inputCVC.style.border = "2px solid green";
    cardCVC.style.opacity = 1;
    cardCVC.textContent = ccCVC;
  }

  if ((ccExpiry && ccExpiry2 === null) || (ccExpiry && ccExpiry2 < 2)) {
    inputExp.style.border = "2px solid red";
    inputExp2.style.border = "2px solid red";
  } else {
    inputExp.style.border = "2px solid green";
    inputExp2.style.border = "2px solid green";
    cardExp.style.opacity = 1;
    cardExp.textContent = ccExpiry + "/" + ccExpiry2;
  }
});

formSubmit.addEventListener("click", checkDetails);

function checkDetails(e) {
  console.log(`Card details are:`);
  console.log(`Card holder: ${ccName}`);
  console.log(`Card number: ${ccNum}`);
  console.log(`Card CVC: ${ccCVC}`);
  console.log(`Card Expiry Month: ${ccExpiry}`);
  console.log(`Card Expiry Year: ${ccExpiry2}`);
  if (ccNumRegex.test(ccNum) == true) {
    form.style.opacity = 0;
    hidden.style.opacity = 1;
  } else {
    console.log("Fails");
  }
  e.preventDefault();
}
