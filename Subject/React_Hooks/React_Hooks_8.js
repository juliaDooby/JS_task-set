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
