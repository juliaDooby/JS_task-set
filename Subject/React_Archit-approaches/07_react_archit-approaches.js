--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
7. Создание глобального состояния с Redux Toolkit
⌛ Задача: Упростить использование Redux с помощью `Redux Toolkit`.
🎯 Решение:
```javascript
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const store = configureStore({
  reducer: countSlice.reducer,
});

export const { increment, decrement } = countSlice.actions;
export default store;

// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function Counter() {
  const count = useSelector((state) =>

 state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```
Объяснение:
- `Redux Toolkit` упрощает работу с Redux, предоставляя готовые инструменты для создания редьюсеров и экшенов.
---------------------------------------------------------------------------------------------
