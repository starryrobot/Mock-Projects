const toggleBtn = document.getElementById("toggle");
const mobMenu = document.getElementById("menu");
const body = document.body;
toggleBtn.addEventListener("click", function () {
  console.log("Hamburger clicked");
  mobMenu.classList.toggle("selected");
  body.classList.toggle("fade");
});
