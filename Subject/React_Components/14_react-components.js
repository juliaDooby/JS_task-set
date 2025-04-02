---------------------------------------------------------------------------------------------   
⋙ ❍ React компоненты:
---
14. Хранение состояния в `useReducer`
⌛ Задача: Используйте `useReducer` для управления состоянием.
🎯 Решение:
```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default Counter;
```
Объяснение: `useReducer` используется для более сложного управления состоянием.
--------------------------------------------------------------------------------------------- 
