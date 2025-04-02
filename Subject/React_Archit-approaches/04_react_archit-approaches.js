--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
4. Создание глобального состояния с Context API + useReducer
⌛ Задача: Использование `useReducer` в связке с `Context API` для более сложного глобального состояния.
🎯 Решение:
```javascript
import React, { createContext, useReducer, useContext } from 'react';

// Создаем контекст
const CountContext = createContext();

// Определяем редуктор
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Провайдер
function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

// App
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

Объяснение:
- С помощью `useReducer` и `Context API` можно создать глобальное состояние с более сложной логикой обновления, при этом компоненты могут легко подписываться на это состояние через контекст.
--------------------------------------------------------------------------------------------- 
