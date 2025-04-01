---------------------------------------------------------------------------------------------
📌 [ЗАДАЧИ MIDDLE/SENIOR В ОДНОМ ИЗВЕСТНОМ БАНКЕ ✅]:
---------------------
⋙ ❍ Дан не сложный компонент на реакте и необходимо провести ревью (заюзать хуки useMemo / useCallback, вынести повторяющийся код в функцию или переменную и что-то там еще было) ?
---
44. Давайте посмотрим на ваш компонент и проведем ревью, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Давайте оптимизируем этот компонент:
1. Хранение удвоенного значения с помощью `useMemo`:
 ```javascript
 const doubleCount = useMemo(() => count * 2, [count]);
 ```
2. Оптимизация обработчиков событий с помощью `useCallback`:
 ```javascript
 const handleIncrement = useCallback(() => {
   setCount((prevCount) => prevCount + 1);
 }, []);

 const handleDecrement = useCallback(() => {
   setCount((prevCount) => prevCount - 1);
 }, []);
 ```
3. Вынос повторяющегося кода в функцию или переменную:
 ```javascript
 const increment = () => {
   setCount((prevCount) => prevCount + 1);
 };

 const decrement = () => {
   setCount((prevCount) => prevCount - 1);
 };
 ```
Вот полный код с примененными оптимизациями:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
/Давайте проведем ревью компонента, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Оптимизированный код:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
---------------------------------------------------------------------------------------------
