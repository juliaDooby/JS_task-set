---------------------------------------------------------------------------------------------  
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
0. Управление состоянием с `useState` и передача данных между компонентами
⌛ Задача: Использование `useState` для управления состоянием и передачи данных между компонентами.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}
```
Объяснение:
- В данном примере состояние хранится в родительском компоненте, а дочерний компонент получает его через `props`. Это помогает избежать сложностей с состоянием в нескольких компонентах.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
1. Использование `useContext` для передачи состояния через контекст
⌛ Задача: Передача состояния через Context API без необходимости передавать props на каждом уровне.
🎯 Решение:
```javascript
import React, { createContext, useState, useContext } from 'react';

// Создаем Context
const CountContext = createContext();

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildComponent />
    </CountContext.Provider>
  );
}

function ChildComponent() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
Объяснение:
- Контекст позволяет передавать данные напрямую всем компонентам внутри провайдера без необходимости прокидывать их через каждый промежуточный компонент.
---------------------------------------------------------------------------------------------  
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
4. Создание глобального состояния с Context API + useReducer
⌛ Задача: Использование `useReducer` в связке с `Context API` для более сложного глобального состояния.
🎯 Решение:
```javascript
import React, { createContext, useReducer, useContext } from 'react';

// Создаем контекст
const CountContext = createContext();

// Определяем редуктор
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Провайдер
function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

// App
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

Объяснение:
- С помощью `useReducer` и `Context API` можно создать глобальное состояние с более сложной логикой обновления, при этом компоненты могут легко подписываться на это состояние через контекст.
---------------------------------------------------------------------------------------------  
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
9. Использование `useContext` для централизованного состояния
⌛ Задача: Использование `useContext` для создания глобального состояния без использования Redux.
🎯 Решение:
```javascript
import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const CountContext = createContext();

// Провайдер
function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// App.js
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```
Объяснение:
- В этом примере мы создаём глобальное состояние с использованием `useContext` и `useState`. Мы не используем Redux, но можем централизовать состояние на уровне контекста, доступного всем дочерним компонентам.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
10. Использование `React.memo` для предотвращения лишних ререндеров
⌛ Задача: Оптимизация производительности компонента с помощью `React.memo`, чтобы предотвратить лишние ререндеры.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <h2>Count: {count}</h2>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('Some text');

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState('Updated text')}>Update Other State</button>
    </div>
  );
}
```
Объяснение:
- `React.memo` помогает избежать лишних ререндеров, если пропсы компонента не изменились. В данном случае, `ChildComponent` будет перерисовываться только при изменении `count`.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
11. Комбинирование `useState` и `useEffect` для работы с API
⌛ Задача: Загружать данные из API и обновлять состояние с помощью `useState` и `useEffect`.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
```
Объяснение:
- `useEffect` используется для выполнения побочных эффектов (например, асинхронных запросов) при монтировании компонента. С помощью `useState` мы сохраняем данные, полученные с сервера.
---------------------------------------------------------------------------------------------  
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
14. Использование Redux DevTools для дебага
⌛ Задача: Настройка Redux DevTools для дебага состояния и экшенов.
🎯 Решение:
```javascript
// store.js
import { createStore } from 'redux';
import { postsReducer } from './reducer';

const store = createStore(
  postsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```
Объяснение:
- В этом примере мы активируем Redux DevTools для дебага состояния и экшенов. Это позволяет разработчикам отслеживать изменения в состоянии приложения в реальном времени.
---------------------------------------------------------------------------------------------  
