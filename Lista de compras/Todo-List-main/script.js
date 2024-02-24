const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

addButton.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  listContainer.appendChild(li);

  const span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);

  inputBox.value = "";
  storeData();
}

listContainer.addEventListener("click", function(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("checked");
    storeData();
  } else if (clickedElement.tagName === "SPAN") {
    clickedElement.parentElement.remove();
    storeData();
  }
});

function storeData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
