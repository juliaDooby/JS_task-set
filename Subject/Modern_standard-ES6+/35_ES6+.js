---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
⋙ ❍ ПоМапить классы (map):
---
35.
2. Реализация на React
В React маппинг классов реализуется с помощью библиотеки `classnames` или встроенной логики.
🎯 Реализация без библиотек
```jsx
import React, { useState } from "react";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`item ${item.isSelected ? "selected" : ""}`}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
🎯 Реализация с использованием библиотеки `classnames`
Установите библиотеку:
```bash
npm install classnames
```
Используем `classnames` для динамического маппинга классов:
```jsx
import React, { useState } from "react";
import classNames from "classnames";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={classNames("item", { selected: item.isSelected })}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
---
CSS для React
```css
.item {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.selected {
  background-color: #007bff;
  color: white;
}
```
Объяснение React-кода
1. Состояние:
   - Используется `useState` для хранения массива элементов с их состоянием.
2. Маппинг классов:
   - Без `classnames`:
     ```jsx
     className={`item ${item.isSelected ? "selected" : ""}`}
     ```
   - С использованием `classnames`:
     ```jsx
     classNames("item", { selected: item.isSelected })
     ```
3. Динамическое обновление:
   - `setItems` обновляет состояние списка, чтобы отобразить изменение класса.
---
Сравнение JavaScript и React
| Характеристика   | Vanilla JavaScript                             | React                                |
|-----------------------|----------------------------------------------------|------------------------------------------|
| Обновление данных | Ручная перерисовка DOM                             | Использование `state` и автоматический рендер |
| Маппинг классов   | `classList.add` и `classList.remove`               | Использование `className` или `classnames` |
| Простота в использовании | Быстрее для простых задач                     | Более подходящий для сложных интерфейсов |
---------------------------------------------------------------------------------------------
