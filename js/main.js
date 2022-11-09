let count = 0;
const text = document.getElementById("count-text");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    if (count > 0) {
      text.style.color = "green";
    } else if (count < 0) {
      text.style.color = "red";
    } else {
      text.style.color = "initial";
    }
    text.textContent = count;
    checkNum(count);
  });
});

function checkNum(num) {
  if (num == 0) {
    console.log("Number is 0");
    text.classList.toggle("anin-number");
  }
}
