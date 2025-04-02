--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
9. Использование `useContext` для централизованного состояния
⌛ Задача: Использование `useContext` для создания глобального состояния без использования Redux.
🎯 Решение:
```javascript
import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const CountContext = createContext();

// Провайдер
function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// App.js
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```
Объяснение:
- В этом примере мы создаём глобальное состояние с использованием `useContext` и `useState`. Мы не используем Redux, но можем централизовать состояние на уровне контекста, доступного всем дочерним компонентам.
---------------------------------------------------------------------------------------------  
