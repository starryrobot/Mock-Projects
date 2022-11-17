const noteItem = document.querySelectorAll("article");
const noteNumber = document.getElementById("notifs");
let newNumber = 0;
let currTarget = "";
let array = [];

console.log(`Array length is: ${noteItem.length}`);

document.addEventListener("DOMContentLoaded", function () {
  noteNumber.textContent = noteItem.length;
  newNumber = noteItem.length;
  for (i = 0; i < noteItem.length; i++) {
    let array = new Array(noteItem[i][8]);
    console.log(`This is the array: ${array}`);
    noteItem[i].addEventListener("click", function (e) {
      console.log(this);
      e.currentTarget.classList.remove("new-item");
      e.currentTarget.classList.remove("new");
      e.currentTarget.classList.add("clicked");
      if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
      }
    });
    console.log(noteItem[i]);
    if (noteItem[i].classList.contains("new")) {
      noteItem[i].classList.add("new-item");
    }
  }
});

// function checkNotes() {
//   console.log("checkNotes function called");
//   for (i = 0; i < noteItem.length; i++) {
//     if (noteItem[i].classList.contains("clicked")) {
//       console.log(array.length);
//       array.pop();
//       noteNumber.textContent = array.length;
//     }
//   }
// }

// function ()

// function checkNotes() {
//   console.log("checkNotes function called");
//   for (i = 0; i < noteItem.length; i++) {
//     noteItem[i].classList.remove("clicked");
//   }
// }
