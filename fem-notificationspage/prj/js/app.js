const noteItem = document.querySelectorAll("article");
const noteNumber = document.getElementById("notifs");
let newNumber = 0;

console.log(`Array length is: ${noteItem.length}`);

document.addEventListener("DOMContentLoaded", function () {
  noteNumber.textContent = noteItem.length;
  newNumber = noteItem.length;
  for (i = 0; i < noteItem.length; i++) {
    noteArray = noteItem[i];
    console.log(`The array is: ${noteArray}`);
    noteItem[i].addEventListener("click", function (e) {
      e.currentTarget.classList.remove("new-item");
      e.currentTarget.classList.remove("new");
      e.currentTarget.classList.add("clicked");
    });
    console.log(noteItem[i]);
    if (noteItem[i].classList.contains("new")) {
      noteItem[i].classList.add("new-item");
    }
    checkNotes;
  }
});

function checkNotes() {
  console.log("checkNotes function called");
  for (i = 0; i < noteItem.length; i++) {
    noteItem[i].classList.remove("clicked");
  }
}
