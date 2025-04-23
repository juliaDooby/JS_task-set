---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
8. Интеграция с Redux для состояния приложения
⌛ Задача: Настройте Redux для хранения состояния и взаимодействия с компонентами React.
🎯 Решение:
1. Установите Redux и React-Redux:
```bash
npm install redux react-redux
```
2. Реализуйте хранилище и компонент:
```javascript
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
Объяснение: Мы создаём Redux store с простым редьюсером, который управляет состоянием счётчика, и используем React-Redux для подключения состояния к компонентам.
---------------------------------------------------------------------------------------------  
