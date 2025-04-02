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
