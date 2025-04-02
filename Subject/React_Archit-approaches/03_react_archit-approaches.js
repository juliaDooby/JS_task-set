--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
3. Обновление состояния с `useReducer`
⌛ Задача: Использование `useReducer` для более сложного управления состоянием в компонентах.
🎯 Решение:
```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
```
Объяснение:
- `useReducer` полезен для сложных состояний, когда логика изменения состояния выходит за рамки простого использования `useState`. Он работает как Redux, но внутри компонента.
---------------------------------------------------------------------------------------------  
