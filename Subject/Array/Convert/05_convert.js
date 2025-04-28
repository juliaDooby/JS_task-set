---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Конвертировать цену:
---
5. Пример использования с реальными данными (API)
Если вам нужно использовать реальный API для получения курсов валют, вы можете использовать API, такие как [ExchangeRate-API](https://www.exchangerate-api.com/), чтобы получить актуальные курсы валют.
```javascript
import React, { useState, useEffect } from 'react';

function PriceConverterWithAPI() {
  const [price, setPrice] = useState(100);
  const [currency, setCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      });
  }, []);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * (rates[currency] || 1)).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены с использованием реального API</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            disabled={loading}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency} disabled={loading}>
            {Object.keys(rates).map((currencyCode) => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        <div>
          <p>Цена в {currency}: {convertedPrice}</p>
        </div>
      )}
    </div>
  );
}

export default PriceConverterWithAPI;
```
Объяснение:
- `useEffect` используется для загрузки актуальных курсов валют через API при монтировании компонента.
- При изменении валюты или цены происходит пересчёт с учётом актуального курса.
- Компонент отображает «Загрузка данных...» до тех пор, пока курсы валют не будут получены.
Резюме:
- В JavaScript можно создать простую функцию для конвертации цен, используя фиксированные курсы валют.
- В React мы можем сделать это интерактивно, позволяя пользователю выбирать цену и валюту.
- Для получения актуальных курсов валют можно использовать внешний API.
--------------------------------------------------------------------------------------------- 
