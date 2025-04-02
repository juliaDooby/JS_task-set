---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Написать калькулятор:
---
1. Калькулятор на React
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
