--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
8. Ленивая загрузка с использованием Redux и Thunks
⌛ Задача: Загружать данные по мере необходимости с использованием Redux и middleware для асинхронных экшенов.
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

// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => <div key={post.id}>{post.title}</div>)
      )}
    </div>
  );
}
```
Объяснение:
- В этом примере данные загружаются асинхронно, и состояние постов сохраняется в Redux. С помощью middleware `redux-thunk` мы можем загружать данные только при необходимости.
---------------------------------------------------------------------------------------------  
