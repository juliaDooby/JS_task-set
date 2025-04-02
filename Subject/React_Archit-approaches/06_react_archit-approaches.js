--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
6. Параллельная загрузка данных с Redux и Thunks
⌛ Задача: Загружать несколько наборов данных одновременно с помощью асинхронных экшенов в Redux.
🎯 Решение:
```javascript
export const fetchData = () => {
  return async (dispatch) => {
    const [posts, users] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    ]);
    dispatch({ type: 'SET_DATA', payload: { posts, users } });
  };
};
```
Объяснение:
- Используем `Promise.all` для одновременной загрузки нескольких данных, улучшая производительность за счет уменьшения количества запросов.
---------------------------------------------------------------------------------------------  
