const noteItem = document.querySelectorAll("article");
const noteNumber = document.getElementById("notifs");
const markAll = document.getElementById("mark");

console.log(`Array length is: ${noteItem.length}`);

document.addEventListener("DOMContentLoaded", noteCheck);
markAll.addEventListener("click", markAllNotes);

function noteCheck() {
  for (i = 0; i < noteItem.length; i++) {
    noteItem[i].addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("unread")) {
        console.log("Contains unread");
        e.currentTarget.classList.remove("unread");
      }
      noteCheck();
    });

    noteNumber.textContent = document.querySelectorAll(".unread").length;
  }
}

function markAllNotes() {
  for (i = 0; i < noteItem.length; i++) {
    if (noteItem[i].classList.contains("unread")) {
      noteItem[i].classList.remove("unread");
    }
    noteNumber.textContent = document.querySelectorAll(".unread").length;
  }
}
