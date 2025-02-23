import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");

const creaateTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerHTML = value;
  taskContent.appendChild(titleTask);
  taskContent.appendChild(deleteIcon());

  task.appendChild(taskContent);
  list.appendChild(task);
};

btn.addEventListener("click", creaateTask);
