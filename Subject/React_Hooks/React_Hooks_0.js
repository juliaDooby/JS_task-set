Z
---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
1. Использование `useState` для хранения состояния
⌛ Задача: Напишите компонент, который использует `useState` для хранения счётчика и кнопки для его увеличения.
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useState(0)` инициализирует состояние счётчика значением 0.
- `setCount(count + 1)` обновляет состояние при клике на кнопку.
---
2. Использование `useEffect` для выполнения побочных эффектов
⌛ Задача: Напишите компонент, который выводит сообщение в консоль при монтировании.
Пример:
```javascript
import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Check your console!</h1>;
}
```
🎯 Решение:
- Хук `useEffect` с пустым массивом зависимостей `[]` выполняется только один раз при монтировании компонента, аналогично `componentDidMount` в классовых компонентах.
---
3. Использование `useEffect` для очистки ресурсов
⌛ Задача: Напишите компонент, который устанавливает таймер, и очищает его при размонтировании компонента.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  return <p>{seconds} seconds</p>;
}
```
🎯 Решение:
- `useEffect` возвращает функцию очистки, которая вызывается при размонтировании компонента. В данном случае мы очищаем таймер.
---
4. Использование `useMemo` для оптимизации вычислений
⌛ Задача: Напишите компонент, который выполняет тяжёлые вычисления, и использует `useMemo` для оптимизации.
Пример:
```javascript
import { useMemo, useState } from 'react';

function FibonacciCalculator() {
  const [number, setNumber] = useState(0);

  const fib = useMemo(() => {
    const calculateFib = (n) => (n <= 1 ? n : calculateFib(n - 1) + calculateFib(n - 2));
    return calculateFib(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Fibonacci: {fib}</p>
    </div>
  );
}
```
🎯 Решение:
- `useMemo` используется для мемоизации результата вычислений. Ресчитает значение только при изменении `number`, что предотвращает повторные тяжёлые вычисления при каждом рендере.
---
5. Использование `useCallback` для мемоизации функции
⌛ Задача: Напишите компонент, который использует `useCallback` для мемоизации обработчика кликов.
Пример:
```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useCallback` мемоизирует функцию `increment`, предотвращая её пересоздание при каждом рендере компонента `Parent`.
---
6. Использование `useRef` для хранения мутируемого значения
⌛ Задача: Напишите компонент, который использует `useRef` для хранения предыдущего значения состояния.
Пример:
```javascript
import { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useRef` хранит мутируемое значение между рендерами. В данном случае мы сохраняем предыдущее значение состояния.
---
7. Обработка асинхронных запросов с `useEffect`
⌛ Задача: Напишите компонент, который загружает данные с API при монтировании.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
🎯 Решение:
- В `useEffect` выполняется асинхронная операция загрузки данных, и состояние обновляется по завершению запроса.
---
8. Управление состоянием нескольких значений с `useReducer`
⌛ Задача: Напишите компонент, который управляет состоянием нескольких значений с помощью `useReducer`.
Пример:
```javascript
import { useReducer } from 'react';

const initialState = { count: 0, name: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'setName':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'setName', payload: 'Alice' })}>Set Name</button>
    </div>
  );
}
```
🎯 Решение:
- `useReducer` используется для управления более сложными состояниями и логикой действий.
---
9. Задержка обновления состояния с `setTimeout` и `useEffect`
⌛ Задача: Напишите компонент, который задерживает обновление состояния на 2 секунды.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DelayedUpdate() {
  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    const timer = setTimeout(() => setMessage('Updated after 2 seconds'), 2000);
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return <p>{message}</p>;
}
```
🎯 Решение:
- `setTimeout` используется для задержки обновления состояния на определённое время. Функция очистки отменяет таймер при размонтировании.
---
10. Хранение значений, которые не рендерят компонент с `useRef`
⌛ Задача: Напишите компонент, который использует `useRef` для хранения значений, которые не должны вызывать рендер при изменении.
Пример:
```javascript
import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useRef` позволяет хранить значения между рендерами, но не вызывает повторный рендер компонента при изменении этих значений.
---
11. Обновление состояния при изменении props с `useEffect`
⌛ Задача: Напишите компонент, который обновляет состояние на основе изменения пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Child({ value }) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return <p>{internalValue}</p>;
}
```
🎯 Решение:
- `useEffect` обновляет состояние `internalValue` при изменении пропса `value`.
---
12. Отслеживание изменений формы с `useState`
⌛ Задача: Напишите компонент, который отслеживает изменения в полях формы.
Пример:
```javascript
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
```
🎯 Решение:
- Используется `useState` для отслеживания значений формы, и `handleChange` обновляет состояние при изменении любого поля.
---
13. Использование `useEffect` для подписки на события
⌛ Задача: Напишите компонент, который подписывается на события и очищает подписку при размонтировании.
Пример:
```javascript
import { useEffect } from 'react';

function EventListener() {
  useEffect(() => {
    const handleResize = () => console.log('Window resized');
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Resize the window and check the console!</p>;
}
```
🎯 Решение:
- Используем `useEffect`, чтобы подписаться на событие `resize` и очистить подписку при размонтировании компонента.
---
14. Отображение состояния загрузки с `useState`
⌛ Задача: Напишите компонент, который отображает индикатор загрузки, пока данные не загружены.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>{data.message}</p>;
}
```
🎯 Решение:
- Сначала показываем индикатор загрузки, а после завершения асинхронной операции отображаем полученные данные.
---
15. Использование `useEffect` для выполнения побочных эффектов при изменении пропсов
⌛ Задача: Напишите компонент, который выполняет побочный эффект при изменении пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer({ delay }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [delay]);  // Перезапускаем таймер, если изменился delay

  return <p>Time: {time}</p>;
}
```
🎯 Решение:
- `useEffect` с зависимостью от пропса `delay` позволяет перезапускать таймер, когда изменяется этот пропс.
