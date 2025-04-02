--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
13. Встраивание сторонних библиотек с Redux
⌛ Задача: Интеграция сторонних библиотек с Redux для централизованного состояния.
🎯 Решение:
```javascript
// actions.js
export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({ type: 'FETCH_DATA', payload: posts });
  };
};

// reducer.js
const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducer';

const store = createStore(postsReducer, applyMiddleware(thunk));
```
Объяснение:
- В этом примере используется `redux-thunk` для асинхронных экшенов и централизованного управления данными, получаемыми с API. Это позволяет интегрировать сторонние API с Redux.
---------------------------------------------------------------------------------------------  
