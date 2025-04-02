--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
5. Редукс с асинхронными действиями (Thunk)
⌛ Задача: Управление асинхронными действиями с использованием middleware `redux-thunk`.
🎯 Решение:
```javascript
// actions.js
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({ type: 'SET_POSTS', posts });
  };
};

// reducer.js
const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
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
- Используя `redux-thunk`, мы можем работать с асинхронными действиями в Redux, такими как запросы к API, и отправлять экшены после получения данных.
---------------------------------------------------------------------------------------------  
