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
