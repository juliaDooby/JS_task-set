---------------------------------------------------------------------------------------------  
⋙ ❍ Список to do:
---
Javascript
Давай разберем код пошагово, объясняя каждый этап.  
---
1. Подключаемся к элементам HTML  
Сначала нам нужно получить доступ к элементам HTML, с которыми будем работать.  
В HTML у нас есть:  
- Поле ввода (`<input>`), куда пользователь вводит текст задачи  
- Кнопка (`<button>`) для добавления задачи  
- Список (`<ul>`), в который будем добавлять задачи  

В JavaScript мы получаем эти элементы с помощью `document.getElementById`:
```javascript
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
```
Теперь мы можем работать с этими элементами в коде.
---
2. Функция для добавления новой задачи  
Создадим функцию `addTask()`, которая:  
1. Получает текст из поля ввода  
2. Проверяет, что поле не пустое  
3. Создает новый элемент списка (`<li>`)  
4. Добавляет в него текст задачи  
5. Создает кнопку удаления  
6. Добавляет все это в список  

Вот реализация:
```javascript
function addTask() {
    const taskText = taskInput.value.trim(); // Получаем текст и удаляем пробелы по краям
    if (taskText === "") return; // Если поле пустое, выходим из функции

    const taskItem = document.createElement("li"); // Создаем новый элемент <li>
    taskItem.textContent = taskText; // Устанавливаем текст задачи

    // Создаем кнопку удаления
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem); // Удаляем задачу при нажатии на кнопку
    };

    taskItem.appendChild(deleteButton); // Добавляем кнопку в задачу
    taskList.appendChild(taskItem); // Добавляем задачу в список

    taskInput.value = ""; // Очищаем поле ввода
}
```
---
3. Добавляем обработчик клика по кнопке  
Теперь нужно сделать так, чтобы при нажатии кнопки `"Добавить"` срабатывала наша функция `addTask()`.  
Для этого используем `addEventListener`:

```javascript
addTaskButton.addEventListener("click", addTask);
```

Теперь при клике на кнопку `addTaskButton` будет вызвана функция `addTask()`.
---
4. Добавляем поддержку клавиши Enter  
Чтобы пользователь мог добавлять задачи не только кнопкой, но и нажатием клавиши **Enter**, добавляем обработчик события `keypress`:

```javascript
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
```

Когда пользователь нажимает `Enter`, проверяем, какая это клавиша (`event.key === "Enter"`) и вызываем функцию `addTask()`.
---------------------------------------------------------------------------------------------  
