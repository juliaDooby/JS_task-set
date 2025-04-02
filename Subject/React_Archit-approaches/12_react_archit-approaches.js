--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
12. Динамическое обновление состояния с использованием `useReducer`
⌛ Задача: Управление сложным состоянием с помощью `useReducer`.
🎯 Решение:
```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0, text: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'UPDATE_TEXT':
      return { ...state, text: action.text };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>

      <input
        type="text"
        value={state.text}
        onChange={(e) => dispatch({ type: 'UPDATE_TEXT', text: e.target.value })}
      />
      <p>{state.text}</p>
    </div>
  );
}
```
Объяснение:
- `useReducer` используется для более сложных состояний, где нам нужно управлять несколькими значениями или выполнять различные операции с состоянием в одном редьюсере.
---------------------------------------------------------------------------------------------
