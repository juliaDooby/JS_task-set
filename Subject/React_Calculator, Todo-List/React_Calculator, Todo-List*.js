---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Написать калькулятор:
---
Вот реализация простого калькулятора на Vanilla JavaScript и React. Пример включает базовые арифметические операции: сложение, вычитание, умножение и деление.
🎯 Решение:
1. Калькулятор на Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }

    .calculator {
      width: 300px;
      margin: 0 auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .display {
      width: 100%;
      height: 50px;
      font-size: 20px;
      text-align: right;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      box-sizing: border-box;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    button {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
    }

    button:hover {
      background-color: #0056b3;
    }

    button.operation {
      background-color: #ff4d4d;
    }

    button.operation:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" class="display" disabled />
    <div class="buttons">
      <button class="number">7</button>
      <button class="number">8</button>
      <button class="number">9</button>
      <button class="operation">/</button>
      <button class="number">4</button>
      <button class="number">5</button>
      <button class="number">6</button>
      <button class="operation">*</button>
      <button class="number">1</button>
      <button class="number">2</button>
      <button class="number">3</button>
      <button class="operation">-</button>
      <button class="number">0</button>
      <button class="clear">C</button>
      <button class="equals">=</button>
      <button class="operation">+</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ""; // Текущее введённое значение
let previousInput = ""; // Предыдущее введённое значение
let operation = null; // Текущая операция

// Обработка нажатия кнопок
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      currentInput += value;
      display.value = currentInput;
    } else if (button.classList.contains("operation")) {
      if (currentInput === "") return; // Игнорируем, если нет текущего значения
      previousInput = currentInput;
      currentInput = "";
      operation = value;
    } else if (button.classList.contains("equals")) {
      if (operation && previousInput !== "" && currentInput !== "") {
        currentInput = calculate(previousInput, currentInput, operation);
        display.value = currentInput;
        previousInput = "";
        operation = null;
      }
    } else if (button.classList.contains("clear")) {
      currentInput = "";
      previousInput = "";
      operation = null;
      display.value = "";
    }
  });
});

// Функция для выполнения операций
function calculate(a, b, operation) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operation) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 !== 0 ? (num1 / num2).toString() : "Error";
    default:
      return "";
  }
}
```
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Написать калькулятор:
---
2. Калькулятор на React
---
Код React
```jsx
import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (value) => {
    setDisplay(display + value);
  };

  const handleOperationClick = (value) => {
    if (!display) return;
    setPreviousInput(display);
    setDisplay("");
    setOperation(value);
  };

  const handleEqualsClick = () => {
    if (!operation || !previousInput || !display) return;
    const result = calculate(previousInput, display, operation);
    setDisplay(result);
    setPreviousInput("");
    setOperation(null);
  };

  const handleClearClick = () => {
    setDisplay("");
    setPreviousInput("");
    setOperation(null);
  };

  const calculate = (a, b, operation) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operation) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return num2 !== 0 ? (num1 / num2).toString() : "Error";
      default:
        return "";
    }
  };

  return (
    <div style={styles.calculator}>
      <input type="text" value={display} readOnly style={styles.display} />
      <div style={styles.buttons}>
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "/" ? handleOperationClick("/") : handleNumberClick(btn)
            }
            style={btn === "/" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "*" ? handleOperationClick("*") : handleNumberClick(btn)
            }
            style={btn === "*" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "-" ? handleOperationClick("-") : handleNumberClick(btn)
            }
            style={btn === "-" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClearClick();
              else if (btn === "=") handleEqualsClick();
              else if (btn === "+") handleOperationClick("+");
              else handleNumberClick(btn);
            }}
            style={btn === "+" || btn === "=" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  display: {
    width: "100%",
    height: "50px",
    fontSize: "20px",
    textAlign: "right",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    boxSizing: "border-box",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  },
  operationButton: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "white",
  },
};

export default Calculator;
```
Объяснение
Vanilla JS:
- Состояние:
  - `currentInput` и `previousInput` хранят текущее и предыдущее введённые значения.
- Обработка событий:
  - Кнопки добавляют цифры, задают операции или очищают экран.
- Выполнение операций:
  - Функция `calculate` выполняет вычисления.
React:
- Состояния:
  - Хуки `useState` хранят текущие значения и выбранную операцию.
- Обработчики событий:
  - `handleNumberClick`, `handleOperationClick` и другие функции обновляют состояния и выполняют действия.
- UI:
  - Кнопки генерируются с помощью массива для упрощения кода.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Расчёт стоимости:
---
⌛ Задача: Написать расчёт стоимости:
🎯 Решение:
1. Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cost Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    input, select, button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    .result {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Cost Calculator</h1>
    <input type="number" id="quantity" placeholder="Enter quantity" />
    <select id="pricePerUnit">
      <option value="10">Price per unit: $10</option>
      <option value="20">Price per unit: $20</option>
      <option value="30">Price per unit: $30</option>
    </select>
    <button id="calculateBtn">Calculate</button>
    <p class="result" id="result">Total cost: $0</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
// Получение элементов из DOM
const quantityInput = document.getElementById('quantity');
const priceSelect = document.getElementById('pricePerUnit');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

// Обработчик для расчёта стоимости
calculateBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value) || 0;
  const pricePerUnit = parseInt(priceSelect.value) || 0;

  const totalCost = quantity * pricePerUnit;

  result.textContent = `Total cost: $${totalCost}`;
});
```
Объяснение (Vanilla JS):
1. HTML:
   - Поле ввода `<input>` используется для ввода количества.
   - Селект `<select>` позволяет выбрать цену за единицу.
   - Кнопка `<button>` запускает расчёт.
   - Элемент `<p>` отображает итоговую стоимость.
2. JS:
   - Получаем значения из полей с помощью `value`.
   - Рассчитываем итоговую стоимость, умножая количество на цену.
   - Выводим результат в текст элемента `<p>`.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Расчёт стоимости:
---
2. Реализация на React
Код React
```jsx
import React, { useState } from "react";

function CostCalculator() {
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(10);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    setTotalCost(quantity * pricePerUnit);
  };

  return (
    <div style={styles.container}>
      <h1>Cost Calculator</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Enter quantity"
        style={styles.input}
      />
      <select
        value={pricePerUnit}
        onChange={(e) => setPricePerUnit(Number(e.target.value))}
        style={styles.input}
      >
        <option value={10}>Price per unit: $10</option>
        <option value={20}>Price per unit: $20</option>
        <option value={30}>Price per unit: $30</option>
      </select>
      <button onClick={calculateCost} style={styles.button}>
        Calculate
      </button>
      <p style={styles.result}>Total cost: ${totalCost}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default CostCalculator;
```
Объяснение (React):
1. Состояния (`useState`):
   - `quantity`: Сохраняет введённое количество.
   - `pricePerUnit`: Хранит выбранную цену за единицу.
   - `totalCost`: Рассчитанная общая стоимость.
2. Обновление состояний:
   - При изменении значения в поле ввода или селекте вызывается `onChange`, который обновляет соответствующее состояние через `setQuantity` или `setPricePerUnit`.
3. Рассчёт стоимости:
   - При нажатии кнопки `Calculate` вызывается функция `calculateCost`, которая умножает `quantity` на `pricePerUnit` и сохраняет результат в `totalCost`.
4. Стили:
   - Стили задаются в объекте `styles` для упрощения.
---
Как запустить React-приложение:
1. Создайте новый проект React:
   ```bash
   npx create-react-app cost-calculator
   cd cost-calculator
   ```
2. Замените содержимое `src/App.js` на код React.
3. Запустите проект:
   ```bash
   npm start
   ```
Результат:
И в версии Vanilla JS, и в версии React пользователь может:
- Вводить количество.
- Выбирать цену за единицу.
- Нажимать кнопку для расчёта стоимости.
- Видеть общий результат в реальном времени.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Список to do:
---
⌛ Задача: Реализовать To-Do List с возможностью добавления, удаления и отметки задач как выполненных. Используйте React.
Функциональность:
1. Пользователь может добавлять задачи.
2. Пользователь может удалять задачи.
3. Пользователь может отмечать задачи как выполненные.
4. Список задач отображается на экране.
🎯 Решение:
1. Начальная структура приложения
Создадим компонент `TodoApp`, который будет содержать все функции и рендерить список задач.
```jsx
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // Игнорируем пустые задачи
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask(""); // Сброс поля ввода
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
Объяснение:
1. Состояние задач:
   - Используем хук `useState` для хранения списка задач:
     ```jsx
     const [tasks, setTasks] = useState([]);
     ```
   - Каждая задача представлена объектом с тремя свойствами:
     - `id`: Уникальный идентификатор задачи.
     - `text`: Текст задачи.
     - `completed`: Флаг выполнения (`true`/`false`).
2. Добавление задачи:
   - Создаётся новый объект задачи:
     ```jsx
     const task = { id: Date.now(), text: newTask, completed: false };
     ```
   - Новая задача добавляется к списку с помощью:
     ```jsx
     setTasks([...tasks, task]);
     ```
3. Удаление задачи:
   - Фильтруем список задач, исключая задачу с соответствующим `id`:
     ```jsx
     setTasks(tasks.filter((task) => task.id !== id));
     ```
4. Отметка задачи как выполненной:
   - Используем метод `map`, чтобы изменить свойство `completed` для нужной задачи:
     ```jsx
     setTasks(
       tasks.map((task) =>
         task.id === id ? { ...task, completed: !task.completed } : task
       )
     );
     ```
5. Рендеринг задач:
   - Используем `map` для отображения каждой задачи в списке:
     ```jsx
     tasks.map((task) => (
       <li key={task.id}>
         <span>{task.text}</span>
       </li>
     ));
     ```
   - Добавляем стили для зачёркивания выполненных задач:
     ```jsx
     style={{ textDecoration: task.completed ? "line-through" : "none" }}
     ```
Дополнительные улучшения:
1. Пустой список
Добавьте сообщение, если список задач пуст:
```jsx
{tasks.length === 0 && <p>Список задач пуст</p>}
```
2. Валидация
Игнорируйте ввод пустых задач:
```jsx
if (newTask.trim() === "") return;
```
3. Сохранение задач в `localStorage`
Сохраните задачи в `localStorage`, чтобы они сохранялись между перезагрузками страницы:
```jsx
useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
---
Пример стилей (CSS):
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  cursor: pointer;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1a1a;
}
```
Как это использовать:
1. Создайте новый проект React с помощью:
   ```bash
   npx create-react-app todo-app
   cd todo-app
   ```
2. Замените содержимое `App.js` на код из задачи.
3. Добавьте стили в файл `App.css`.
4. Запустите проект:
   ```bash
   npm start
   ```
---------------------------------------------------------------------------------------------  
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
---
Итог  
Теперь у нас есть полноценный **To-Do List**:  
✔ Можно вводить текст задачи  
✔ Нажимать кнопку "Добавить" или клавишу **Enter**  
✔ Видеть добавленные задачи в списке  
✔ Удалять задачи кнопкой **"Удалить"**  

Если нужно что-то улучшить или добавить, пиши! 🚀
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Написать калькулятор:
---
Вот реализация простого калькулятора на Vanilla JavaScript и React. Пример включает базовые арифметические операции: сложение, вычитание, умножение и деление.
🎯 Решение:
1. Калькулятор на Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }

    .calculator {
      width: 300px;
      margin: 0 auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .display {
      width: 100%;
      height: 50px;
      font-size: 20px;
      text-align: right;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      box-sizing: border-box;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    button {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
    }

    button:hover {
      background-color: #0056b3;
    }

    button.operation {
      background-color: #ff4d4d;
    }

    button.operation:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" class="display" disabled />
    <div class="buttons">
      <button class="number">7</button>
      <button class="number">8</button>
      <button class="number">9</button>
      <button class="operation">/</button>
      <button class="number">4</button>
      <button class="number">5</button>
      <button class="number">6</button>
      <button class="operation">*</button>
      <button class="number">1</button>
      <button class="number">2</button>
      <button class="number">3</button>
      <button class="operation">-</button>
      <button class="number">0</button>
      <button class="clear">C</button>
      <button class="equals">=</button>
      <button class="operation">+</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ""; // Текущее введённое значение
let previousInput = ""; // Предыдущее введённое значение
let operation = null; // Текущая операция

// Обработка нажатия кнопок
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      currentInput += value;
      display.value = currentInput;
    } else if (button.classList.contains("operation")) {
      if (currentInput === "") return; // Игнорируем, если нет текущего значения
      previousInput = currentInput;
      currentInput = "";
      operation = value;
    } else if (button.classList.contains("equals")) {
      if (operation && previousInput !== "" && currentInput !== "") {
        currentInput = calculate(previousInput, currentInput, operation);
        display.value = currentInput;
        previousInput = "";
        operation = null;
      }
    } else if (button.classList.contains("clear")) {
      currentInput = "";
      previousInput = "";
      operation = null;
      display.value = "";
    }
  });
});

// Функция для выполнения операций
function calculate(a, b, operation) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operation) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 !== 0 ? (num1 / num2).toString() : "Error";
    default:
      return "";
  }
}
```
---------------------
2. Калькулятор на React
---
Код React
```jsx
import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (value) => {
    setDisplay(display + value);
  };

  const handleOperationClick = (value) => {
    if (!display) return;
    setPreviousInput(display);
    setDisplay("");
    setOperation(value);
  };

  const handleEqualsClick = () => {
    if (!operation || !previousInput || !display) return;
    const result = calculate(previousInput, display, operation);
    setDisplay(result);
    setPreviousInput("");
    setOperation(null);
  };

  const handleClearClick = () => {
    setDisplay("");
    setPreviousInput("");
    setOperation(null);
  };

  const calculate = (a, b, operation) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operation) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return num2 !== 0 ? (num1 / num2).toString() : "Error";
      default:
        return "";
    }
  };

  return (
    <div style={styles.calculator}>
      <input type="text" value={display} readOnly style={styles.display} />
      <div style={styles.buttons}>
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "/" ? handleOperationClick("/") : handleNumberClick(btn)
            }
            style={btn === "/" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "*" ? handleOperationClick("*") : handleNumberClick(btn)
            }
            style={btn === "*" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "-" ? handleOperationClick("-") : handleNumberClick(btn)
            }
            style={btn === "-" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClearClick();
              else if (btn === "=") handleEqualsClick();
              else if (btn === "+") handleOperationClick("+");
              else handleNumberClick(btn);
            }}
            style={btn === "+" || btn === "=" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  display: {
    width: "100%",
    height: "50px",
    fontSize: "20px",
    textAlign: "right",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    boxSizing: "border-box",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  },
  operationButton: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "white",
  },
};

export default Calculator;
```
Объяснение
Vanilla JS:
- Состояние:
  - `currentInput` и `previousInput` хранят текущее и предыдущее введённые значения.
- Обработка событий:
  - Кнопки добавляют цифры, задают операции или очищают экран.
- Выполнение операций:
  - Функция `calculate` выполняет вычисления.
React:
- Состояния:
  - Хуки `useState` хранят текущие значения и выбранную операцию.
- Обработчики событий:
  - `handleNumberClick`, `handleOperationClick` и другие функции обновляют состояния и выполняют действия.
- UI:
  - Кнопки генерируются с помощью массива для упрощения кода.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Расчёт стоимости:
---
⌛ Задача: Написать расчёт стоимости:
🎯 Решение:
1. Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cost Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    input, select, button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    .result {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Cost Calculator</h1>
    <input type="number" id="quantity" placeholder="Enter quantity" />
    <select id="pricePerUnit">
      <option value="10">Price per unit: $10</option>
      <option value="20">Price per unit: $20</option>
      <option value="30">Price per unit: $30</option>
    </select>
    <button id="calculateBtn">Calculate</button>
    <p class="result" id="result">Total cost: $0</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
// Получение элементов из DOM
const quantityInput = document.getElementById('quantity');
const priceSelect = document.getElementById('pricePerUnit');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

// Обработчик для расчёта стоимости
calculateBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value) || 0;
  const pricePerUnit = parseInt(priceSelect.value) || 0;

  const totalCost = quantity * pricePerUnit;

  result.textContent = `Total cost: $${totalCost}`;
});
```
Объяснение (Vanilla JS):
1. HTML:
   - Поле ввода `<input>` используется для ввода количества.
   - Селект `<select>` позволяет выбрать цену за единицу.
   - Кнопка `<button>` запускает расчёт.
   - Элемент `<p>` отображает итоговую стоимость.
2. JS:
   - Получаем значения из полей с помощью `value`.
   - Рассчитываем итоговую стоимость, умножая количество на цену.
   - Выводим результат в текст элемента `<p>`.
---
2. Реализация на React
Код React
```jsx
import React, { useState } from "react";

function CostCalculator() {
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(10);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    setTotalCost(quantity * pricePerUnit);
  };

  return (
    <div style={styles.container}>
      <h1>Cost Calculator</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Enter quantity"
        style={styles.input}
      />
      <select
        value={pricePerUnit}
        onChange={(e) => setPricePerUnit(Number(e.target.value))}
        style={styles.input}
      >
        <option value={10}>Price per unit: $10</option>
        <option value={20}>Price per unit: $20</option>
        <option value={30}>Price per unit: $30</option>
      </select>
      <button onClick={calculateCost} style={styles.button}>
        Calculate
      </button>
      <p style={styles.result}>Total cost: ${totalCost}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default CostCalculator;
```
Объяснение (React):
1. Состояния (`useState`):
   - `quantity`: Сохраняет введённое количество.
   - `pricePerUnit`: Хранит выбранную цену за единицу.
   - `totalCost`: Рассчитанная общая стоимость.
2. Обновление состояний:
   - При изменении значения в поле ввода или селекте вызывается `onChange`, который обновляет соответствующее состояние через `setQuantity` или `setPricePerUnit`.
3. Рассчёт стоимости:
   - При нажатии кнопки `Calculate` вызывается функция `calculateCost`, которая умножает `quantity` на `pricePerUnit` и сохраняет результат в `totalCost`.
4. Стили:
   - Стили задаются в объекте `styles` для упрощения.
---
Как запустить React-приложение:
1. Создайте новый проект React:
   ```bash
   npx create-react-app cost-calculator
   cd cost-calculator
   ```
2. Замените содержимое `src/App.js` на код React.
3. Запустите проект:
   ```bash
   npm start
   ```
Результат:
И в версии Vanilla JS, и в версии React пользователь может:
- Вводить количество.
- Выбирать цену за единицу.
- Нажимать кнопку для расчёта стоимости.
- Видеть общий результат в реальном времени.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Список to do:
---
⌛ Задача: Реализовать To-Do List с возможностью добавления, удаления и отметки задач как выполненных. Используйте React.
Функциональность:
1. Пользователь может добавлять задачи.
2. Пользователь может удалять задачи.
3. Пользователь может отмечать задачи как выполненные.
4. Список задач отображается на экране.
🎯 Решение:
1. Начальная структура приложения
Создадим компонент `TodoApp`, который будет содержать все функции и рендерить список задач.
```jsx
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // Игнорируем пустые задачи
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask(""); // Сброс поля ввода
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
Объяснение:
1. Состояние задач:
   - Используем хук `useState` для хранения списка задач:
     ```jsx
     const [tasks, setTasks] = useState([]);
     ```
   - Каждая задача представлена объектом с тремя свойствами:
     - `id`: Уникальный идентификатор задачи.
     - `text`: Текст задачи.
     - `completed`: Флаг выполнения (`true`/`false`).
2. Добавление задачи:
   - Создаётся новый объект задачи:
     ```jsx
     const task = { id: Date.now(), text: newTask, completed: false };
     ```
   - Новая задача добавляется к списку с помощью:
     ```jsx
     setTasks([...tasks, task]);
     ```
3. Удаление задачи:
   - Фильтруем список задач, исключая задачу с соответствующим `id`:
     ```jsx
     setTasks(tasks.filter((task) => task.id !== id));
     ```
4. Отметка задачи как выполненной:
   - Используем метод `map`, чтобы изменить свойство `completed` для нужной задачи:
     ```jsx
     setTasks(
       tasks.map((task) =>
         task.id === id ? { ...task, completed: !task.completed } : task
       )
     );
     ```
5. Рендеринг задач:
   - Используем `map` для отображения каждой задачи в списке:
     ```jsx
     tasks.map((task) => (
       <li key={task.id}>
         <span>{task.text}</span>
       </li>
     ));
     ```
   - Добавляем стили для зачёркивания выполненных задач:
     ```jsx
     style={{ textDecoration: task.completed ? "line-through" : "none" }}
     ```
Дополнительные улучшения:
1. Пустой список
Добавьте сообщение, если список задач пуст:
```jsx
{tasks.length === 0 && <p>Список задач пуст</p>}
```
2. Валидация
Игнорируйте ввод пустых задач:
```jsx
if (newTask.trim() === "") return;
```
3. Сохранение задач в `localStorage`
Сохраните задачи в `localStorage`, чтобы они сохранялись между перезагрузками страницы:
```jsx
useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
---
Пример стилей (CSS):
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  cursor: pointer;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1a1a;
}
```
Как это использовать:
1. Создайте новый проект React с помощью:
   ```bash
   npx create-react-app todo-app
   cd todo-app
   ```
2. Замените содержимое `App.js` на код из задачи.
3. Добавьте стили в файл `App.css`.
4. Запустите проект:
   ```bash
   npm start
   ```
---------------------------------------------------------------------------------------------  
