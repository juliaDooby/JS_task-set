--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
2. Использование Redux для глобального состояния
⌛ Задача: Использование Redux для управления глобальным состоянием в приложении.
🎯 Решение:
```javascript
// actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

// reducer.js
const initialState = { count: 0 };
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

// store.js
import { createStore } from 'redux';
import { counterReducer } from './reducer';
export const store = createStore(counterReducer);

// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

Объяснение:
- Redux используется для централизованного управления состоянием. С помощью `useSelector` мы получаем состояние, а с помощью `useDispatch` отправляем экшены для обновления состояния.
---------------------------------------------------------------------------------------------  
