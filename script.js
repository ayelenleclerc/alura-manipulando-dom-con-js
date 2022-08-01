(() => {
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

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (evento) => {
    const element = evento.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };

  const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
  };

  const deleteTask = (evento) => {
    const element = evento.target;
    element.parentElement.parentElement.remove();
  };
})();
