---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Конвертировать цену:
---
4. Конвертация цены с использованием React
В React, мы можем создать компонент для отображения и конвертации цен, который будет принимать значения через props и вычислять цену на основе выбора валюты.
🎯 Решение с React:
```jsx
import React, { useState } from 'react';

function PriceConverter() {
  const [price, setPrice] = useState(100); // Начальная цена
  const [currency, setCurrency] = useState('USD');

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * conversionRates[currency]).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
      </div>

      <div>
        <p>Цена в {currency}: {convertedPrice}</p>
      </div>
    </div>
  );
}

export default PriceConverter;
```
Объяснение:
- `useState` используется для управления состоянием цены и выбранной валюты.
- `conversionRates` содержит коэффициенты для каждой валюты.
- Мы отображаем цену в выбранной валюте, вычисляя её с помощью коэффициента преобразования и округляя до двух знаков после запятой с помощью `.toFixed(2)`.
- Пользователь может изменять цену и валюту через поля ввода и выпадающий список.
---------------------------------------------------------------------------------------------  
