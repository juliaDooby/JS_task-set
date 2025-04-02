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
