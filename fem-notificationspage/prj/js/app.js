const noteItem = document.querySelectorAll("article");
const noteNumber = document.getElementById("notifs");
let newNumber = 0;
let currTarget = "";
let array = Array.from(noteItem);
let isNew = false;

console.log(`Array length is: ${noteItem.length}`);

document.addEventListener("DOMContentLoaded", noteCheck);

function noteCheck() {
  console.log("noteCheck function called");
  noteNumber.textContent = noteItem.length;
  newNumber = noteItem.length;
  for (i = 0; i < noteItem.length; i++) {
    console.log(`This is the array: ${array}`);
    noteItem[i].addEventListener("click", function (e) {
      console.log(e.currentTarget.classList);
      if (e.currentTarget.classList.contains("clicked")) {
        console.log("Clicked");
        e.currentTarget.setAttribute("notif-status", "old");
        e.currentTarget.classList.remove("clicked");
        e.currentTarget.setAttribute("disabled", "");
      } else {
        e.currentTarget.classList.remove("new-item");
        e.currentTarget.classList.remove("new");
        e.currentTarget.classList.add("clicked");
      }
    });
    console.log(noteItem[i]);
    if (noteItem[i].classList.contains("new")) {
      noteItem[i].classList.add("new-item");
      noteItem[i].setAttribute("notif-status", "new");
    }
  }
}

// function check() {
//   for (i = 0; i < noteItem.length; i++) {
//     if (noteItem[i].classList.contains("clicked")) {
//       console.log(`${noteItem[i].classList} contains clicked`);
//       noteItem[i].classList.remove("clicked");
//       console.log(array.length);
//       array.pop();
//       console.log(array.length);
//     }
//   }
// }

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
