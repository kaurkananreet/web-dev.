const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("description");

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

const eventsDiv = document.getElementById("events");
const keyText = document.getElementById("key");

addBtn.addEventListener("click", addEvent);

function addEvent() {
  const title = titleInput.value;
  const date = dateInput.value;
  const category = categoryInput.value;
  const desc = descInput.value;

  if (title === "" || date === "") {
    alert("Event title and date are required");
    return;
  }

  const eventBox = document.createElement("div");
  eventBox.className = "event";

  eventBox.innerHTML = `
    <h4>${title}</h4>
    <p>Date: ${date}</p>
    <p>Category: ${category}</p>
    <p>${desc}</p>
  `;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";

  removeBtn.addEventListener("click", function () {
    eventBox.remove();
  });

  eventBox.appendChild(removeBtn);
  eventsDiv.appendChild(eventBox);

  titleInput.value = "";
  dateInput.value = "";
  descInput.value = "";
}

clearBtn.addEventListener("click", function () {
  eventsDiv.innerHTML = "";
});

sampleBtn.addEventListener("click", function () {
  titleInput.value = "Tech Conference";
  dateInput.value = "2026-02-20";
  categoryInput.value = "Conference";
  descInput.value = "AI & ML discussion event";

  addEvent();
});

document.addEventListener("keydown", function (event) {
  keyText.innerText = "You pressed: " + event.key;
});