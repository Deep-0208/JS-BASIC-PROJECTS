document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-Input");
    const newTaskButton = document.getElementById("new-Task");
    const container = document.querySelector(".container");
  
    newTaskButton.addEventListener("click", addTask);
  
    function addTask() {
      const task = taskInput.value.trim();
      if (task === "") return;
  
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
      taskItem.textContent = task;
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        container.removeChild(taskItem);
      });
  
      taskItem.appendChild(deleteButton);
      container.appendChild(taskItem);
  
      taskInput.value = "";
    }
  });
  