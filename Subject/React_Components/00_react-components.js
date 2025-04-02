---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
0. Вот подробная реализация задачи To-Do List на Vanilla JavaScript:
⌛ Описание задачи:
1. Создайте список задач.
2. Реализуйте добавление новых задач.
3. Позвольте пользователю удалять задачи.
4. Позвольте отмечать задачи как выполненные.
---
🎯 Решение:
1. HTML-разметка
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
    }

    .todo-container {
      max-width: 400px;
      margin: 0 auto;
    }

    .input-container {
      display: flex;
      margin-bottom: 20px;
    }

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      margin-left: 10px;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    li.completed span {
      text-decoration: line-through;
      color: gray;
    }

    .delete-btn {
      background-color: #ff4d4d;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      padding: 5px 10px;
    }

    .delete-btn:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <div class="input-container">
      <input type="text" id="taskInput" placeholder="Enter a new task">
      <button id="addTaskBtn">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
2. JavaScript
```javascript
// Получаем элементы из DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Функция добавления задачи
function addTask() {
  const taskText = taskInput.value.trim(); // Убираем лишние пробелы
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Создаём новую задачу
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Отметить задачу как выполненную
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Кнопка удаления
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Удалить задачу
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Собираем задачу
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Добавляем в список
  taskList.appendChild(li);

  // Очищаем поле ввода
  taskInput.value = "";
}

// Событие на кнопку добавления
addTaskBtn.addEventListener("click", addTask);

// Событие на клавишу Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
```
Объяснение работы кода:
1. HTML:
   - Поле `<input>` для ввода задачи и кнопка `<button>` для добавления задачи.
   - `<ul>` отображает список задач, добавленных пользователем.
2. CSS:
   - Стилизация элементов списка (`<li>`) и кнопок (`Add`, `Delete`).
   - Класс `.completed` задаёт зачёркнутый стиль текста для выполненных задач.
3. Добавление задачи:
   - Поле ввода очищается после добавления задачи:
     ```javascript
     taskInput.value = "";
     ```
   - Проверка на пустую строку:
     ```javascript
     if (taskText === "") {
       alert("Task cannot be empty!");
       return;
     }
     ```
4. Удаление задачи:
   - Кнопка "Delete" удаляет соответствующий элемент `<li>`:
     ```javascript
     deleteBtn.addEventListener("click", () => {
       taskList.removeChild(li);
     });
     ```
5. Отметка выполнения:
   - Клик по тексту задачи добавляет/удаляет класс `completed`, чтобы зачеркнуть текст:
     ```javascript
     span.addEventListener("click", () => {
       li.classList.toggle("completed");
     });
     ```
6. Обработка клавиши `Enter`:
   - При нажатии `Enter` задача добавляется:
     ```javascript
     taskInput.addEventListener("keypress", (event) => {
       if (event.key === "Enter") {
         addTask();
       }
     });
     ```
Дополнительные улучшения
1. Сохранение задач в `localStorage`
Добавьте сохранение задач, чтобы они не исчезали при перезагрузке страницы:
```javascript
function saveTasks() {
  const tasks = Array.from(taskList.children).map((li) => ({
    text: li.querySelector("span").textContent,
    completed: li.classList.contains("completed"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    span.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Загружаем задачи при загрузке страницы
window.addEventListener("load", loadTasks);
// Сохраняем задачи при изменении
taskList.addEventListener("DOMSubtreeModified", saveTasks);
```
---
Запуск проекта:
1. Сохраните HTML-код в файл `index.html`.
2. Сохраните JavaScript-код в файл `script.js`.
3. Откройте файл `index.html` в браузере.
---------------------------------------------------------------------------------------------  








 


