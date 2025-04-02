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
