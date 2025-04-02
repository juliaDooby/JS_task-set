--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
1. Использование `useContext` для передачи состояния через контекст
⌛ Задача: Передача состояния через Context API без необходимости передавать props на каждом уровне.
🎯 Решение:
```javascript
import React, { createContext, useState, useContext } from 'react';

// Создаем Context
const CountContext = createContext();

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildComponent />
    </CountContext.Provider>
  );
}

function ChildComponent() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
Объяснение:
- Контекст позволяет передавать данные напрямую всем компонентам внутри провайдера без необходимости прокидывать их через каждый промежуточный компонент.
---------------------------------------------------------------------------------------------  
