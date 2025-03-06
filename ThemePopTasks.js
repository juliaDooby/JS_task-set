https://habr.com/ru/companies/ruvds/articles/334538/


~ ~ ~
---------------------
⋙ ❍ Концепции компонентов (функциональные и классовые компоненты):
---
1. Основы функциональных компонентов
⌛ Задача: Напишите простейший функциональный компонент, который выводит текст на экран.
Пример:
```javascript
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```
🎯 Решение:
- Функциональный компонент просто возвращает JSX, который будет отрисован на экране.
---
2. Использование пропсов в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который принимает пропс `name` и выводит его в тексте.
Пример:
```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
🎯 Решение:
- Пропсы передаются в функциональный компонент через параметры функции. Здесь мы деструктурируем объект пропсов, чтобы получить `name`.
---
3. Использование состояния в функциональном компоненте (useState)
⌛ Задача: Напишите функциональный компонент, который использует `useState` для хранения и изменения состояния (например, счётчик).
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- Мы используем хук `useState`, чтобы создать состояние и функцию для его обновления. `useState(0)` инициализирует счётчик значением 0.
---
4. Использование эффекта в функциональном компоненте (useEffect)
⌛ Задача: Напишите функциональный компонент, который выводит текст в консоль при каждом рендере компонента.
Пример:
```javascript
import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component rendered');
  });

  return <h1>Check your console!</h1>;
}
```
🎯 Решение:
- Хук `useEffect` выполняет побочные эффекты. Он будет вызываться после каждого рендера компонента.
---
5. Деструктуризация пропсов в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который принимает пропсы, используя деструктуризацию.
Пример:
```javascript
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
}
```
🎯 Решение:
- Пропсы могут быть деструктурированы прямо в аргументах функции, что упрощает доступ к значениям пропсов.
---
6. Классовый компонент с состоянием
⌛ Задача: Напишите классовый компонент с состоянием, который хранит и отображает счётчик.
Пример:
```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
🎯 Решение:
- В классовом компоненте состояние хранится в `this.state`, а для его обновления используется метод `this.setState()`.
- Для обработки событий нужно объявить методы как стрелочные функции, чтобы они не теряли контекст `this`.
---
7. Передача колбэков в пропсах
⌛ Задача: Напишите родительский компонент, который передает функцию в дочерний компонент через пропсы.
Пример:
```javascript
function Parent() {
  const handleClick = () => alert('Button clicked!');
  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
```
🎯 Решение:
- В родительском компоненте передаём функцию в дочерний компонент как пропс, и вызываем её внутри дочернего компонента при клике.
---
8. Обработчик событий в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который обрабатывает событие нажатия кнопки.
Пример:
```javascript
function Button() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
```
🎯 Решение:
- В функциональных компонентах обработчики событий передаются через атрибуты JSX, как в обычном HTML. Событие можно обработать с помощью функции.
---
9. Подключение к жизненному циклу в классовом компоненте (componentDidMount)
⌛ Задача: Напишите классовый компонент, который выводит текст в консоль после монтирования.
Пример:
```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}
```
🎯 Решение:
- В классовом компоненте для работы с жизненным циклом используется метод `componentDidMount()`, который вызывается после монтирования компонента.
---
10. Передача данных из дочернего компонента в родительский
⌛ Задача: Напишите компонент, который передаёт данные из дочернего компонента в родительский через колбэк.
Пример:
```javascript
function Parent() {
  const handleData = (data) => {
    console.log('Received data:', data);
  };

  return <Child sendData={handleData} />;
}

function Child({ sendData }) {
  return <button onClick={() => sendData('Hello, Parent!')}>Send Data</button>;
}
```
🎯 Решение:
- Родительский компонент передает функцию как пропс в дочерний компонент. Дочерний компонент вызывает эту функцию, передавая данные обратно родителю.
---
11. Хук useContext в функциональных компонентах
⌛ Задача: Напишите функциональный компонент, который использует `useContext` для получения данных из контекста.
Пример:
```javascript
import React, { useContext } from 'react';

const UserContext = React.createContext();

function UserProfile() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}

function App() {
  return (
    <UserContext.Provider value={{ name: 'Alice' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
```
🎯 Решение:
- `useContext` позволяет получать значение из контекста, который предоставляется через компонент-поставщик `UserContext.Provider`.
---
12. Передача данных через props в классовом компоненте
⌛ Задача: Напишите классовый компонент, который получает данные через пропсы и отображает их.
Пример:
```javascript
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
🎯 Решение:
- В классовых компонентах пропсы доступны через `this.props`. В данном примере, мы выводим имя, которое передаётся через пропс `name`.
---
13. Использование статических методов в классовых компонентах
⌛ Задача: Напишите классовый компонент с использованием статического метода.
Пример:
```javascript
class MyComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps);
    return null;
  }

  render() {
    return <h1>Static Method Example</h1>;
  }
}
```
🎯 Решение:
- Статические методы, такие как `getDerivedStateFromProps`, могут быть использованы в классовых компонентах для выполнения логики до рендера.
---
14. Условный рендеринг в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который отображает кнопку, если состояние `isLoggedIn` истинно, иначе — сообщение о необходимости войти в систему.
Пример:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) :
🎯 Решение: Условный рендеринг в функциональном компоненте
Функциональный компонент будет рендерить кнопку "Log out", если пользователь авторизован (`isLoggedIn === true`), и сообщение "Please log in", если нет.
Решение кода:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <p>Please log in</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default LoginButton;
```
Объяснение кода:
1. Создаём состояние `isLoggedIn` с помощью `useState(false)`, изначально оно `false` (пользователь не вошёл).
2. Используем тернарный оператор (`? :`) для условного рендеринга:
   - Если `isLoggedIn === true`, показываем кнопку "Log out".
   - Если `isLoggedIn === false`, показываем текст "Please log in".
3. Добавляем кнопку для смены состояния:
   - При нажатии переключает `isLoggedIn` между `true` и `false`.
   - Изменяет текст кнопки между "Log in" и "Log out".
Как это работает?
- Пользователь не вошёл → показывается текст `"Please log in"` и кнопка `"Log in"`.
- Нажатие на `"Log in"` → `isLoggedIn` меняется на `true`, ререндер компонента.
- Теперь показывается → кнопка `"Log out"` и дополнительная кнопка `"Log out"`.
- Нажатие на `"Log out"` → снова меняет `isLoggedIn` на `false`, снова `"Please log in"`.
Вывод:
- Используется `useState()` для хранения состояния авторизации.
- Тернарный оператор (`? :`) управляет рендерингом элементов.
- Кнопка переключает состояние между `"Log in"` и `"Log out"`.
---
15. Условный рендеринг в функциональном компоненте (более сложный пример)
⌛ Задача: Напишите функциональный компонент, который отображает одну из трёх кнопок в зависимости от состояния пользователя: "Login", "Logout" и "Profile", если пользователь залогинен.
Пример:
```javascript
import { useState } from 'react';

function UserAction() {
  const [user, setUser] = useState(null); // Если null - пользователь не залогинен

  const handleLogin = () => setUser({ name: 'John Doe' });
  const handleLogout = () => setUser(null);

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <button>Profile</button>
        </div>
      )}
    </div>
  );
}
```
🎯 Решение:
- Мы используем `useState` для отслеживания состояния пользователя.
- Если состояние пользователя — `null` (т.е. он не залогинен), отображается кнопка "Login".
- Если пользователь залогинен (состояние не `null`), отображаются две кнопки: "Logout" и "Profile".
- Условный рендеринг в React можно делать с помощью тернарного оператора, который позволяет менять вывод JSX в зависимости от состояния компонента.
Этот пример демонстрирует, как можно управлять рендерингом в зависимости от состояния с помощью простого условного рендеринга. Это один из самых распространённых паттернов в React.

~ ~ ~
---------------------
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
1. Использование `useState` для хранения состояния
⌛ Задача: Напишите компонент, который использует `useState` для хранения счётчика и кнопки для его увеличения.
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useState(0)` инициализирует состояние счётчика значением 0.
- `setCount(count + 1)` обновляет состояние при клике на кнопку.
---
2. Использование `useEffect` для выполнения побочных эффектов
⌛ Задача: Напишите компонент, который выводит сообщение в консоль при монтировании.
Пример:
```javascript
import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Check your console!</h1>;
}
```
🎯 Решение:
- Хук `useEffect` с пустым массивом зависимостей `[]` выполняется только один раз при монтировании компонента, аналогично `componentDidMount` в классовых компонентах.
---
3. Использование `useEffect` для очистки ресурсов
⌛ Задача: Напишите компонент, который устанавливает таймер, и очищает его при размонтировании компонента.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  return <p>{seconds} seconds</p>;
}
```
🎯 Решение:
- `useEffect` возвращает функцию очистки, которая вызывается при размонтировании компонента. В данном случае мы очищаем таймер.
---
4. Использование `useMemo` для оптимизации вычислений
⌛ Задача: Напишите компонент, который выполняет тяжёлые вычисления, и использует `useMemo` для оптимизации.
Пример:
```javascript
import { useMemo, useState } from 'react';

function FibonacciCalculator() {
  const [number, setNumber] = useState(0);

  const fib = useMemo(() => {
    const calculateFib = (n) => (n <= 1 ? n : calculateFib(n - 1) + calculateFib(n - 2));
    return calculateFib(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Fibonacci: {fib}</p>
    </div>
  );
}
```
🎯 Решение:
- `useMemo` используется для мемоизации результата вычислений. Ресчитает значение только при изменении `number`, что предотвращает повторные тяжёлые вычисления при каждом рендере.
---
5. Использование `useCallback` для мемоизации функции
⌛ Задача: Напишите компонент, который использует `useCallback` для мемоизации обработчика кликов.
Пример:
```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useCallback` мемоизирует функцию `increment`, предотвращая её пересоздание при каждом рендере компонента `Parent`.
---
6. Использование `useRef` для хранения мутируемого значения
⌛ Задача: Напишите компонент, который использует `useRef` для хранения предыдущего значения состояния.
Пример:
```javascript
import { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useRef` хранит мутируемое значение между рендерами. В данном случае мы сохраняем предыдущее значение состояния.
---
7. Обработка асинхронных запросов с `useEffect`
⌛ Задача: Напишите компонент, который загружает данные с API при монтировании.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
🎯 Решение:
- В `useEffect` выполняется асинхронная операция загрузки данных, и состояние обновляется по завершению запроса.
---
8. Управление состоянием нескольких значений с `useReducer`
⌛ Задача: Напишите компонент, который управляет состоянием нескольких значений с помощью `useReducer`.
Пример:
```javascript
import { useReducer } from 'react';

const initialState = { count: 0, name: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'setName':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'setName', payload: 'Alice' })}>Set Name</button>
    </div>
  );
}
```
🎯 Решение:
- `useReducer` используется для управления более сложными состояниями и логикой действий.
---
9. Задержка обновления состояния с `setTimeout` и `useEffect`
⌛ Задача: Напишите компонент, который задерживает обновление состояния на 2 секунды.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DelayedUpdate() {
  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    const timer = setTimeout(() => setMessage('Updated after 2 seconds'), 2000);
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return <p>{message}</p>;
}
```
🎯 Решение:
- `setTimeout` используется для задержки обновления состояния на определённое время. Функция очистки отменяет таймер при размонтировании.
---
10. Хранение значений, которые не рендерят компонент с `useRef`
⌛ Задача: Напишите компонент, который использует `useRef` для хранения значений, которые не должны вызывать рендер при изменении.
Пример:
```javascript
import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useRef` позволяет хранить значения между рендерами, но не вызывает повторный рендер компонента при изменении этих значений.
---
11. Обновление состояния при изменении props с `useEffect`
⌛ Задача: Напишите компонент, который обновляет состояние на основе изменения пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Child({ value }) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return <p>{internalValue}</p>;
}
```
🎯 Решение:
- `useEffect` обновляет состояние `internalValue` при изменении пропса `value`.
---
12. Отслеживание изменений формы с `useState`
⌛ Задача: Напишите компонент, который отслеживает изменения в полях формы.
Пример:
```javascript
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
```
🎯 Решение:
- Используется `useState` для отслеживания значений формы, и `handleChange` обновляет состояние при изменении любого поля.
---
13. Использование `useEffect` для подписки на события
⌛ Задача: Напишите компонент, который подписывается на события и очищает подписку при размонтировании.
Пример:
```javascript
import { useEffect } from 'react';

function EventListener() {
  useEffect(() => {
    const handleResize = () => console.log('Window resized');
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Resize the window and check the console!</p>;
}
```
🎯 Решение:
- Используем `useEffect`, чтобы подписаться на событие `resize` и очистить подписку при размонтировании компонента.
---
14. Отображение состояния загрузки с `useState`
⌛ Задача: Напишите компонент, который отображает индикатор загрузки, пока данные не загружены.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>{data.message}</p>;
}
```
🎯 Решение:
- Сначала показываем индикатор загрузки, а после завершения асинхронной операции отображаем полученные данные.
---
15. Использование `useEffect` для выполнения побочных эффектов при изменении пропсов
⌛ Задача: Напишите компонент, который выполняет побочный эффект при изменении пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer({ delay }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [delay]);  // Перезапускаем таймер, если изменился delay

  return <p>Time: {time}</p>;
}
```
🎯 Решение:
- `useEffect` с зависимостью от пропса `delay` позволяет перезапускать таймер, когда изменяется этот пропс.

~ ~ ~
---------------------
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
1. Управление состоянием с `useState` и передача данных между компонентами
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
---
2. Использование `useContext` для передачи состояния через контекст
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
---
3. Использование Redux для глобального состояния
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
---
4. Обновление состояния с `useReducer`
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
---
5. Создание глобального состояния с Context API + useReducer
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
---
6. Редукс с асинхронными действиями (Thunk)
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
---
7. Параллельная загрузка данных с Redux и Thunks
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
---
8. Создание глобального состояния с Redux Toolkit
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
---
9. Ленивая загрузка с использованием Redux и Thunks
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
---
10. Использование `useContext` для централизованного состояния
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
---
11. Использование `React.memo` для предотвращения лишних ререндеров
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
---
12. Комбинирование `useState` и `useEffect` для работы с API
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
---
13. Динамическое обновление состояния с использованием `useReducer`
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
---
14. Встраивание сторонних библиотек с Redux
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
---
15. Использование Redux DevTools для дебага
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


~ ~ ~
---------------------
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
1. Навигация с помощью React Router (React Router v6)
⌛ Задача: Реализовать простую навигацию между страницами с использованием `React Router`.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- `React Router` используется для организации клиентской навигации. Мы используем `Routes` и `Route` для определения маршрутов, а `Link` для перехода по ним.
---
2. Динамическая навигация с параметрами в React Router
⌛ Задача: Создать маршруты с динамическими параметрами (например, ID).
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- Мы использовали параметр `:id` в маршруте, чтобы отображать информацию, которая зависит от переданного параметра в URL. `useParams` позволяет получить доступ к этим параметрам в компоненте.
---
3. Ленивая загрузка маршрутов с React Router
⌛ Задача: Ленивая загрузка компонентов для маршрутов, чтобы уменьшить начальный размер бандла.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```
Объяснение:
- Для ленивой загрузки компонентов используется `React.lazy` и `Suspense`. Это позволяет загружать компоненты только по мере их необходимости, что улучшает производительность приложения.
---
4. Fetch данных с использованием React Query
⌛ Задача: Загружать данные с API с использованием `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- `useQuery` из `React Query` используется для получения данных с сервера и автоматического обновления компонентов при изменении данных.
---
5. Использование Mutation с React Query
⌛ Задача: Отправка данных через POST-запрос с использованием `useMutation` из `React Query`.
🎯 Решение:
```javascript
import { useMutation } from 'react-query';

async function postData(newData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}

function AddPost() {
  const mutation = useMutation(postData);

  const handleSubmit = () => {
    mutation.mutate({ title: 'New Post', body: 'This is a new post' });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Post</button>
      {mutation.isLoading && <div>Adding post...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Post added!</div>}
    </div>
  );
}
```
Объяснение:
- `useMutation` позволяет выполнять операции, такие как создание, обновление или удаление данных на сервере. Мы вызываем `mutate` для отправки данных.
---
6. Предотвращение повторных запросов с `React Query`
⌛ Задача: Обработать запросы, чтобы не отправлять их, если данные уже загружены.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    staleTime: 60000, // данные считаются актуальными 1 минуту
    cacheTime: 300000, // кэшированные данные сохраняются 5 минут
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Параметры `staleTime` и `cacheTime` помогают избежать повторных запросов, если данные уже загружены и актуальны в течение определенного времени.
---
7. Создание серверного рендеринга с Next.js
⌛ Задача: Реализовать серверный рендеринг (SSR) в Next.js.
🎯 Решение:
```javascript
// pages/index.js
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```

Объяснение:
- В Next.js серверный рендеринг осуществляется с помощью функции `getServerSideProps`. Она выполняется на сервере перед рендерингом страницы и передает данные как `props` в компонент.
---
8. Статическая генерация с Next.js (SSG)
⌛ Задача: Создать статически генерируемую страницу с данными, полученными во время сборки.
🎯 Решение:
```javascript
// pages/index.js
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```
Объяснение:
- В Next.js статическая генерация осуществляется с помощью `getStaticProps`. Она выполняется на этапе сборки и генерирует HTML для страницы.
---
9. Динамическая маршрутизация в Next.js
⌛ Задача: Создать динамические маршруты с использованием Next.js.
🎯 Решение:
```javascript
// pages/posts/[id].js
import React from 'react';

function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export

 default Post;
```
Объяснение:
- В Next.js динамические маршруты создаются с помощью квадратных скобок в имени файла, например, `[id].js`. Функция `getServerSideProps` позволяет получить данные на сервере по переданному параметру маршрута.
---
10. Обработка ошибок с React Query
⌛ Задача: Обработка ошибок при запросах с помощью `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- `React Query` имеет встроенную обработку ошибок. Мы можем использовать свойство `error` для отображения ошибки в случае сбоя запроса.
---
11. Ленивая загрузка с `React Query`
⌛ Задача: Загружать данные только при необходимости (например, при прокрутке).
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    enabled: false, // запрос не будет выполняться при монтировании компонента
  });

  const handleFetchData = () => {
    data.refetch();
  };

  return (
    <div>
      <button onClick={handleFetchData}>Load Posts</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
    </div>
  );
}
```
Объяснение:
- `enabled: false` предотвращает выполнение запроса при монтировании компонента. Запрос выполняется только после вызова `refetch`, например, при клике на кнопку.
---
12. Использование Next.js для рендеринга API на сервере
⌛ Задача: Создать серверный API в Next.js.
🎯 Решение:
```javascript
// pages/api/posts.js
export async function handler(req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  res.status(200).json(posts);
}
```
Объяснение:
- В Next.js можно создавать API-роуты внутри папки `pages/api`. Эти API-роуты могут выполнять серверные операции, такие как запросы к базе данных или другим API.
---
13. Автоматическая маршрутизация в Next.js (Pages Router)
⌛ Задача: Использовать автоматическую маршрутизацию, основанную на файлах, в Next.js.
🎯 Решение:
- В Next.js структура маршрутов соответствует структуре файлов в папке `pages`. Например:
  - `/pages/index.js` → маршрут `/`
  - `/pages/about.js` → маршрут `/about`
  - `/pages/blog/[id].js` → динамический маршрут `/blog/:id`
Объяснение:
- Next.js автоматически генерирует маршруты на основе файловой структуры, что значительно упрощает работу с роутингом и ускоряет разработку.
---
14. Оптимизация с использованием `next/image`
⌛ Задача: Использовать компонент `Image` для оптимизации изображений в Next.js.
🎯 Решение:
```javascript
import Image from 'next/image';

function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      <Image
        src="/static/post-image.jpg"
        alt="Blog Post Image"
        width={500}
        height={300}
      />
    </div>
  );
}
```
Объяснение:
- `next/image` автоматически оптимизирует изображения, включая поддержку различных размеров и форматов, что помогает ускорить загрузку страниц.
---
15. Группировка API-запросов с React Query
⌛ Задача: Загружать данные из нескольких источников одновременно с помощью `React Query`.
🎯 Решение:
```javascript
import { useQueries } from 'react-query';

function PostsAndUsers() {
  const queries = useQueries([
    { queryKey: 'posts', queryFn: fetchPosts },
    { queryKey: 'users', queryFn: fetchUsers },
  ]);

  const posts = queries[0].data;
  const users = queries[1].data;

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>

      <h2>Users</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
```
Объяснение:
- `useQueries` позволяет выполнять несколько запросов параллельно, что полезно для загрузки различных данных одновременно и синхронного отображения.



~ ~ ~
---------------------
⋙ ❍ Оптимизировать производительность компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
Оптимизация производительности компонентов — важная задача для любого фронтенд-разработчика, особенно когда приложение становится более сложным. Вот 15 популярных задач с решениями и объяснениями, которые помогут повысить производительность компонентов в React и других фреймворках.
1. Мемоизация функции с помощью `useMemo` (React)
⌛ Задача: Мемоизировать результат вычисления функции, чтобы избежать лишних вычислений при рендере компонента.
🎯 Решение:
```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ number }) {
  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);

  return <div>{expensiveResult}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveCalculation number={number} />
    </div>
  );
}
```
Объяснение:
- `useMemo` помогает мемоизировать результат вычислений. Он пересчитывает результат только при изменении зависимостей. Это предотвращает лишние вычисления при каждом рендере.
---
2. Мемоизация колбэков с помощью `useCallback` (React)
⌛ Задача: Мемоизировать функции-обработчики, чтобы избежать их пересоздания при каждом рендере.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` мемоизирует функцию-обработчик, предотвращая её пересоздание при каждом рендере компонента. Это полезно для оптимизации дочерних компонентов, которые могут реагировать на изменение переданных функций.
---
3. Разделение кода с использованием `React.lazy` и `Suspense`
⌛ Задача: Ленивая загрузка компонентов для оптимизации первоначальной загрузки приложения.
🎯 Решение:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```
Объяснение:
- `React.lazy` позволяет загружать компоненты только тогда, когда они требуются, что снижает начальную нагрузку на приложение.
- `Suspense` используется для отображения заглушки (fallback) во время загрузки компонента.
---
4. Оптимизация списка с помощью `React.memo`
⌛ Задача: Избежать лишних рендеров компонента списка, если его пропсы не изменились.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ListItem = React.memo(({ item }) => {
  console.log('Item rendered');
  return <li>{item}</li>;
});

function App() {
  const [list, setList] = useState(['Item 1', 'Item 2']);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
```
Объяснение:
- `React.memo` предотвращает повторный рендер компонента, если его пропсы не изменились. В примере `ListItem` будет рендериться только при изменении его пропса.
---
5. Использование `PureComponent` для предотвращения ненужных рендеров (React)
⌛ Задача: Использование `PureComponent` для автоматической оптимизации рендеринга.
🎯 Решение:
```javascript
import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
  render() {
    console.log('Item rendered');
    return <li>{this.props.item}</li>;
  }
}

class App extends React.Component {
  state = { list: ['Item 1', 'Item 2'], toggle: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Toggle
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
```
Объяснение:
- `PureComponent` автоматически реализует `shouldComponentUpdate`, предотвращая рендер, если пропсы или состояние не изменились.
---
6. Оптимизация вложенных компонентов с `React.memo` и `useCallback`
⌛ Задача: Использование `useCallback` и `React.memo` для оптимизации дочерних компонентов.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` предотвращает пересоздание функции, а `React.memo` оптимизирует рендер дочернего компонента, если его пропсы не изменились.
---
7. Использование `shouldComponentUpdate` для классовых компонентов (React)
⌛ Задача: Оптимизация рендеров в классовых компонентах с использованием `shouldComponentUpdate`.
🎯 Решение:
```javascript
class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item !== this.props.item;
  }

  render() {
    console.log('Item rendered');
    return <li>{this.props.item}</li>;
  }
}

class App extends React.Component {
  state = { list: ['Item 1', 'Item 2'], toggle: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Toggle
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
```
Объяснение:
- `shouldComponentUpdate` позволяет вручную контролировать, когда компонент должен быть перерендерен. В этом случае компонент будет перерендериваться только если `item` изменится.
---
8. Разделение кода с динамическим импортажом
⌛ Задача: Использование динамического импорта для уменьшения начального размера бандла.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function App() {
  const [Component, setComponent] = useState(null);

  const loadComponent = () => {
    import('./LazyComponent').then((comp) => {
      setComponent(comp.default);
    });
  };

  return (
    <div>
      <button onClick={loadComponent}>Load Component</button>
      {Component && <Component />}
    </div>
  );
}
```
Объяснение:
- Динамический импорт позволяет загружать компоненты только по мере необходимости, тем самым сокращая начальную нагрузку на приложение.
---
9. Оптимизация с помощью ключей в `v-for` (Vue)
⌛ Задача: Использование уникальных ключей для оптимизации рендеринга списков в Vue.
🎯 Решение:
```vue
<template>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    };
  },
};
</script>
```
Объяснение:
- Использование `:key` помогает Vue оптимизировать процесс обновления
 DOM при изменении данных списка, избегая повторных рендеров элементов, которые не изменились.
---
10. Использование `computed` в Vue для оптимизации вычислений
⌛ Задача: Использование `computed` свойств для мемоизации сложных вычислений.
🎯 Решение:
```vue
<template>
  <div>{{ expensiveCalculation }}</div>
</template>

<script>
export default {
  data() {
    return {
      number: 5,
    };
  },
  computed: {
    expensiveCalculation() {
      console.log('Calculating...');
      return this.number * 2;
    },
  },
};
</script>
```
Объяснение:
- В Vue `computed` автоматически кэширует результат вычисления, перезапуская его только при изменении зависимостей.
---
11. Использование `debounce` для оптимизации пользовательского ввода
⌛ Задача: Использование debounce для ограничения количества запросов при вводе текста.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleChange = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  useEffect(() => {
    console.log('Searching for:', query);
  }, [query]);

  return <input type="text" onChange={handleChange} />;
}
```
Объяснение:
- `debounce` ограничивает количество срабатываний функции. Это помогает снизить нагрузку, например, при поиске, избегая выполнения запросов на сервер при каждом вводе символа.
---
12. Использование `Intersection Observer` для ленивой загрузки
⌛ Задача: Реализовать ленивую загрузку изображений с использованием `IntersectionObserver`.
🎯 Решение:
```javascript
import React, { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return loaded ? <img ref={imgRef} src={src} alt={alt} /> : <div>Loading...</div>;
}
```
Объяснение:
- `IntersectionObserver` позволяет запускать загрузку изображений только тогда, когда они попадают в область видимости, что экономит ресурсы и повышает производительность.
---
13. Использование `requestIdleCallback` для отсрочки задач
⌛ Задача: Использование `requestIdleCallback` для выполнения задач, когда браузер не занят рендерингом.
🎯 Решение:
```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Task executed during idle time');
  });
}
```
Объяснение:
- `requestIdleCallback` позволяет запускать функции, когда браузер не занят рендерингом, что помогает не блокировать основной поток выполнения.
---
14. Пре-рендеринг для серверного рендеринга (SSR)
⌛ Задача: Использование серверного рендеринга для уменьшения времени до первого рендера.
🎯 Решение:
```javascript
import ReactDOMServer from 'react-dom/server';
import App from './App';

const html = ReactDOMServer.renderToString(<App />);
console.log(html);
```
Объяснение:
- SSR позволяет рендерить приложение на сервере, уменьшая время до первого рендера и улучшая SEO.
---
15. Использование Web Workers для обработки данных в фоновом режиме
⌛ Задача: Использование Web Workers для выполнения сложных вычислений в фоновом потоке.
🎯 Решение:
```javascript
const worker = new Worker('worker.js');

worker.onmessage = function (e) {
  console.log('Message from worker:', e.data);
};

worker.postMessage('Start heavy task');
```
Объяснение:
- Web Workers позволяют выполнять ресурсоемкие задачи в фоновом потоке, не блокируя основной поток выполнения приложения.



~ ~ ~
---------------------
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
1. Реактивность данных в Vue 2 и Vue 3
⌛ Задача: Объясните, как работает реактивность в Vue и создайте компонент, который обновляет текст на основе изменения переменной.
🎯 Решение:
```vue
<!-- Vue 2 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
};
</script>
```

```vue
<!-- Vue 3 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 2 используется `data`, а в Vue 3 — `ref` для создания реактивных переменных.
- В обоих случаях используется `v-model` для двусторонней привязки данных.
---
2. Использование `v-if` и `v-show`
⌛ Задача: Создайте компонент, который отображает сообщение на основе значения переменной, используя `v-if` и `v-show`.
🎯 Решение:
```vue
<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">This is a conditionally rendered message (v-if)</p>
    <p v-show="isVisible">This is a conditionally rendered message (v-show)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
```
Объяснение:
- `v-if` полностью удаляет элемент из DOM при условии, в то время как `v-show` лишь скрывает его с помощью CSS.
---
3. Использование `computed` и `watch`
⌛ Задача: Создайте компонент, который отображает вычисляемое свойство и реагирует на изменения данных с помощью `watch`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>Reversed Message: {{ reversedMessage }}</p>
    <p>Message length: {{ messageLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    message(newValue) {
      console.log(`Message changed to: ${newValue}`);
    },
  },
};
</script>
```
Объяснение:
- `computed` используется для создания вычисляемых свойств, которые кэшируются.
- `watch` позволяет отслеживать изменения переменной и выполнять действия при изменении.
---
4. Использование `v-model` для двухсторонней привязки данных
⌛ Задача: Создайте компонент с двумя полями ввода, где одно обновляет значение другого через `v-model`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ firstName }} {{ lastName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
};
</script>
```
Объяснение:
- `v-model` позволяет синхронизировать данные между полями ввода и переменными.
---
5. Создание компонента с пропсами и событиями
⌛ Задача: Создайте компонент, который принимает данные через пропс и отправляет событие обратно в родительский компонент.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" @updateMessage="handleUpdate" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
    };
  },
  methods: {
    handleUpdate(newMessage) {
      this.parentMessage = newMessage;
    },
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Parent Message</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    updateMessage() {
      this.$emit('updateMessage', 'Updated message from child!');
    },
  },
};
</script>
```
Объяснение:
- В родительском компоненте передаётся пропс `message` в дочерний.
- Дочерний компонент отправляет событие `updateMessage`, которое обрабатывается в родительском компоненте.
---
6. Использование Composition API в Vue 3
⌛ Задача: Используйте Composition API для создания реактивных данных и методов.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 3 мы используем функцию `ref` для создания реактивных переменных.
- Функция `setup` — это место для инициализации всех реактивных данных и методов в компоненте.
---
7. Использование `provide` и `inject` для передачи данных между компонентами
⌛ Задача: Используйте `provide` и `inject` для передачи данных от родительского компонента к дочерним.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    provide('message', 'Hello from Parent');
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return { message };
  },
};
</script>
```
Объяснение:
- `provide` используется в родительском компоненте для передачи данных.
- `inject` позволяет дочернему компоненту получить доступ к данным.
---
8. Использование `watchEffect` для наблюдения за реактивными данными (Vue 3)
⌛ Задача: Создайте компонент, который будет отслеживать изменение данных и выполнять побочные эффекты.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="count" />
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log(`Count has changed to: ${count.value}`);
    });

    return { count };
  },
};
</script>
```
Объяснение:
- `watchEffect` автоматически отслеживает реактивные данные и выполняет побочные эффекты при их изменении.
---
9. Динамическое добавление классов с `v-bind:class`
⌛ Задача: Используйте директиву `v-bind:class` для динамического добавления классов в элемент.
🎯 Решение:
```vue
<template>
  <div>
    <button :class="buttonClass" @click="toggleClass">Toggle Class</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonClass() {
      return {
        active: this.isActive,
        'inactive': !this.isActive,
      };
    },
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
```
Объяснение:
- Мы динамически добавляем классы в зависимости от значения `isActive`.
---
10. Использование слотов для создания гибких компонентов
⌛ Задача: Создайте компонент с пользовательскими слотами, чтобы добавить кастомное содержимое.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <BaseCard>
      <template v-slot:header>
        <h1>Custom Header</h1>
      </template>
      <p>This is the content of the card.</p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },
};
</script>
```

```vue
<!-- BaseCard.vue -->
<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
```
Объяснение:
- Используем именованные слоты для динамической вставки контента в компонент.
---
11. Создание глобального фильтра в Vue 2 и Vue 3
⌛ Задача: Создайте глобальный фильтр для форматирования даты.
🎯 Решение:
```javascript
// Vue 2
Vue.filter('formatDate', function (value) {
  return new Date(value).toLocaleDateString();
});
```

```vue
<!-- В шаблоне -->
<p>{{ date | formatDate }}</p>
```

```javascript
// Vue 3
import { createApp } from 'vue';
const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate(value) {
    return new Date(value).toLocaleDateString();
  },
};

app.mount('#app');
```
Объяснение:
- В Vue 2 фильтры создаются через `Vue.filter`, а в Vue 3 фильтры можно создавать через глобальные свойства `app.config.globalProperties`.
---
12. Отправка формы с использованием `v-model`
⌛ Задача: Создайте форму для отправки данных, используя `v-model` для привязки данных.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Username" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.username, this.email);
    },
  },
};
</script>
```
Объяснение:
- Используем `v-model` для двусторонней привязки данных формы с переменными компонента.
---
13. Асинхронные действия с `async`/`await` в Vue 3
⌛ Задача: Сделайте асинхронный запрос к API и отображайте данные.
🎯 Решение:
```vue
<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      data.value = await response.json();
      loading.value = false;
    });

    return { data, loading };
  },
};
</script>
```
Объяснение:
- Используется `async`/`await` для асинхронной загрузки данных в компонент Vue 3.
---
14. Валидация данных в форме с использованием `v-model`
⌛ Задача: Создайте форму с валидацией email.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Email" />
      <span v-if="!isValidEmail">Please enter a valid email.</span>
      <button type="submit" :disabled="!isValidEmail">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  computed: {
    isValidEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    submitForm() {
      console.log('Form submitted with email:', this.email);
    },
  },
};
</script>
```
Объяснение:
- Валидация email происходит с помощью регулярного выражения, и форма не отправляется, пока email не соответствует паттерну.
---
15. Использование `v-for` для отображения данных из массива
⌛ Задача: Отобразите список пользователей из массива с помощью `v-for`.
🎯 Решение:
```vue
<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Joe' },
      ],
    };
  },
};
</script>
```
Объяснение:
- `v-for` используется для итерации по массиву и вывода данных в шаблоне.




~ ~ ~
---------------------
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
1. Получение данных с REST API (GET)
⌛ Задача: Напишите код, который делает запрос к API и отображает полученные данные.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Используется `fetch()` для выполнения GET-запроса.
- В `useEffect` загружаем данные при монтировании компонента.
- Ответ обрабатывается через `.json()`, и данные сохраняются в состоянии с помощью `setData`.
---
2. Отправка данных на сервер с помощью POST
⌛ Задача: Напишите код, который отправляет данные формы на сервер с использованием метода POST.
🎯 Решение:
```javascript
import { useState } from 'react';

function PostData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Мы создаём форму, которая отправляет POST-запрос с данными через `fetch`.
- В запросе указываем заголовок `Content-Type: application/json`, чтобы сервер знал, что данные передаются в формате JSON.
---
3. Обновление данных на сервере с помощью PUT
⌛ Задача: Напишите код, который обновляет данные на сервере с использованием PUT.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- Мы используем метод `PUT`, чтобы обновить данные на сервере.
- URL в запросе включает идентификатор объекта, который обновляется (например, `/1`).
---
4. Удаление данных с сервера (DELETE)
⌛ Задача: Напишите код, который удаляет объект с сервера с использованием DELETE.
🎯 Решение:
```javascript
import { useState } from 'react';

function DeleteData() {
  const [userId, setUserId] = useState('');

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('User deleted');
        } else {
          console.log('Error deleting user');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID to delete"
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}
```
Объяснение:
- Используем метод `DELETE` для удаления объекта с указанным ID.
- В ответе проверяем `response.ok`, чтобы понять, прошёл ли запрос успешно.
---
5. Обработка ошибок при запросах
⌛ Задача: Напишите код для обработки ошибок, которые могут возникнуть при запросах к API.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchDataWithErrorHandling() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Если API не отвечает или URL неправильный, мы генерируем ошибку и выводим её пользователю.
---
6. Отправка данных с заголовками
⌛ Задача: Отправьте POST-запрос с дополнительными заголовками (например, для аутентификации).
🎯 Решение:
```javascript
import { useState } from 'react';

function PostDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- В `headers` добавляем заголовок `Authorization`, который может быть использован для аутентификации запросов.
---
7. Отправка данных в формате FormData
⌛ Задача: Отправьте данные формы через POST-запрос с использованием `FormData`.
🎯 Решение:
```javascript
function PostFormData() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('Form data submitted:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData` для отправки формы в формате multipart/form-data.
---
8. Отправка данных с использованием `PUT` с заголовками
⌛ Задача: Обновите данные на сервере с помощью PUT и передайте заголовки.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

 const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- В `PUT` запросе мы передаём данные в теле и указываем заголовки для аутентификации.
---
9. Получение данных с кастомными заголовками
⌛ Задача: Выполните GET-запрос с кастомными заголовками.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithHeaders() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
        'Custom-Header': 'CustomValue',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Мы добавляем кастомные заголовки в запрос для аутентификации и других нужд.
---
10. Использование `PATCH` для частичных обновлений
⌛ Задача: Частично обновить данные с использованием метода PATCH.
🎯 Решение:
```javascript
import { useState } from 'react';

function PatchData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data patched:', data))
      .catch((error) => console.error('Error patching data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Patch</button>
    </form>
  );
}
```
Объяснение:
- Метод `PATCH` используется для частичного обновления ресурса, обновляя только изменённые данные.
---
11. Получение данных с пагинацией
⌛ Задача: Получить данные с пагинацией.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithPagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page <= 1}>
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
```
Объяснение:
- Мы используем параметры запроса для пагинации (`_page`, `_limit`), чтобы запрашивать по 10 элементов за раз.
---
12. Получение данных с авторизацией
⌛ Задача: Получить данные с API с авторизацией через Bearer Token.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithAuth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Заголовок `Authorization: Bearer` используется для отправки токена аутентификации.
---
13. Заголовки для работы с CORS
⌛ Задача: Добавьте заголовки для работы с CORS.
🎯 Решение:
```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```
Объяснение:
- `Access-Control-Allow-Origin: *` позволяет запросам с других доменов обращаться к API.
---
14. Отправка данных с файлами (multipart/form-data)
⌛ Задача: Отправить форму с файлом на сервер.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://jsonplaceholder.typicode.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('File uploaded:', data))
      .catch((error) => console.error('Error uploading file:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData`, чтобы отправить файл на сервер через multipart/form-data.
---
15. Получение и отображение данных с кешированием
⌛ Задача: Кешировать данные для повторного использования.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithCache() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('posts');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('posts', JSON.stringify(data));
          setData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Данные кешируются в `localStorage` для использования при следующих запросах.



~ ~ ~
---------------------
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
1. Адаптивный заголовок с использованием `media queries`
⌛ Задача: Напишите адаптивный заголовок, который меняет размер шрифта в зависимости от ширины экрана.
Пример:
```css
h1 {
  font-size: 3rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
}
```
🎯 Решение:
- Используем `media queries`, чтобы уменьшать размер шрифта для разных ширин экранов.
- Для экрана меньше 768px размер шрифта уменьшается до 2rem, а для экранов менее 480px — до 1.5rem.
---
2. Адаптивный контейнер с использованием `Flexbox`
⌛ Задача: Создайте контейнер с тремя элементами, которые распределяются по ширине экрана с помощью `Flexbox`, а на маленьких экранах элементы должны располагаться в колонку.
Пример:
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Для ширины экрана больше 768px элементы расположены по горизонтали (с помощью `justify-content: space-between`).
- Для экранов меньше 768px элементы располагаются в колонку (с помощью `flex-direction: column`).
---
3. Центрирование блока с использованием `Flexbox`
⌛ Задача: Напишите стили, чтобы блок был всегда по центру экрана, как по горизонтали, так и по вертикали.
Пример:
```html
<div class="container">
  <div class="centered">Centered content</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered {
  padding: 20px;
  background-color: lightblue;
}
```
🎯 Решение:
- `justify-content: center` центрирует по горизонтали.
- `align-items: center` центрирует по вертикали.
- `height: 100vh` устанавливает высоту контейнера на весь экран.
---
4. Адаптивный grid-контейнер
⌛ Задача: Создайте grid-контейнер, который на широких экранах имеет 4 колонки, а на экранах меньше 768px — 2 колонки.
Пример:
```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
🎯 Решение:
- Используем `grid-template-columns: repeat(4, 1fr)` для 4 колонок на больших экранах.
- Для экранов меньше 768px меняем количество колонок на 2 с помощью `grid-template-columns: repeat(2, 1fr)`.
---
5. Адаптивная сетка с использованием `Grid` и разных колонок
⌛ Задача: Создайте адаптивную сетку, где на больших экранах будет 3 колонки, на средних — 2, а на маленьких — 1.
Пример:
```html
<div class="grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```
🎯 Решение:
- Для больших экранов используем 3 колонки (`repeat(3, 1fr)`).
- Для экранов меньше 1024px используем 2 колонки.
- Для экранов меньше 768px — 1 колонка.
---
6. Адаптивная кнопка с изменением размера
⌛ Задача: Напишите кнопку, которая меняет свой размер в зависимости от ширины экрана.
Пример:
```html
<button class="responsive-btn">Click Me</button>
```

```css
.responsive-btn {
  padding: 20px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .responsive-btn {
    padding: 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .responsive-btn {
    padding: 10px;
    font-size: 12px;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px и 480px меняем размеры кнопки с помощью `padding` и `font-size`.
---
7. Фиксированное положение элемента на экране с `position`
⌛ Задача: Напишите компонент, который фиксируется внизу экрана, если ширина экрана меньше 768px.
Пример:
```html
<div class="fixed-footer">This is a footer</div>
```

```css
.fixed-footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .fixed-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px используем `position: fixed`, чтобы элемент оставался на месте при прокрутке.
---
8. Респонсивный фоновый рисунок с `background-size`
⌛ Задача: Установите фоновое изображение, которое будет адаптироваться под размер экрана.
Пример:
```css
body {
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
}
```
🎯 Решение:
- `background-size: cover` делает изображение адаптивным, растягивая его, чтобы оно заполнило весь контейнер, не искажаясь.
- `background-position: center` центрирует изображение на экране.
---
9. Адаптивные отступы с помощью `rem`
⌛ Задача: Напишите компонент с адаптивными отступами, используя `rem`, которые меняются в зависимости от ширины экрана.
Пример:
```css
.container {
  padding: 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }
}
```
🎯 Решение:
- Используем `rem` для адаптивных отступов, которые изменяются в зависимости от ширины экрана.
---
10. Респонсивное изображение с `srcset`
⌛ Задача: Используйте `srcset` для выбора разных изображений в зависимости от разрешения экрана.
Пример:
```html
<img src="small.jpg"
     srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w"
     alt="Responsive image" />
```
🎯 Решение:
- Используем `srcset`, чтобы указать разные изображения для разных ширин экрана.
---
11. Адаптивные шрифты с `clamp()`
⌛ Задача: Напишите шрифт, который будет адаптироваться в зависимости от ширины экрана с использованием `clamp()`.
Пример:
```css
h1 {
  font-size

: clamp(1.5rem, 5vw, 3rem);
}
```
🎯 Решение:
- `clamp()` устанавливает минимальный и максимальный размер шрифта, который будет изменяться в зависимости от ширины экрана (с помощью `vw`).
---
12. Адаптивный элемент с Flexbox на разных экранах
⌛ Задача: Используйте `Flexbox` для создания адаптивной навигации, которая на больших экранах расположена по горизонтали, а на маленьких — по вертикали.
Пример:
```html
<nav class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>
```

```css
.nav {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Используем `flex-direction: column` на маленьких экранах, чтобы элементы располагались вертикально.
---
13. Адаптивный карточный компонент с `Flexbox`
⌛ Задача: Напишите компонент с карточками, которые на маленьких экранах отображаются в одну колонку, а на больших — в несколько.
Пример:
```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```css
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  background-color: lightgray;
  padding: 20px;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```
🎯 Решение:
- Для маленьких экранов карточки занимают всю ширину, используя `width: 100%`, а на больших экранах — 30% ширины.
---
14. Адаптивное меню с использованием `media queries`
⌛ Задача: Напишите адаптивное горизонтальное меню, которое при ширине экрана меньше 768px превращается в выпадающее меню.
Пример:
```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

```css
.menu ul {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .menu ul {
    display: block;
  }

  .menu ul li {
    margin: 10px 0;
  }
}
```
🎯 Решение:
- Для больших экранов меню горизонтальное с использованием `flex`, для маленьких — вертикальное с помощью `display: block`.
---
15. Адаптивная таблица с использованием `overflow-x`
⌛ Задача: Напишите таблицу, которая будет прокручиваться по горизонтали на маленьких экранах.
Пример:
```html
<div class="table-wrapper">
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>New York</td>
    </tr>
    <!-- more rows -->
  </table>
</div>
```

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
```
🎯 Решение:
- Используем `overflow-x: auto`, чтобы таблица могла прокручиваться по горизонтали на маленьких экранах.



~ ~ ~
---------------------
⋙ ❍ Знание подходов к организации CSS-кода (BEM, CSS Modules, Styled Components):
---
⌛ Задача: Необходимо обработать массив таким образом, чтобы распределить людей по группам городов
Данные на вход
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
]

 const groupByCity = (array) => {}

 Данные на выход
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
Для решения задачи нам нужно организовать функцию, которая будет группировать людей по их городам. Мы будем использовать метод `reduce()` для итерации по массиву и формирования объекта, где ключами будут города, а значениями — массивы с именами людей, которые проживают в этих городах.
🎯 Решение:
```javascript
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
];

const groupByCity = (array) => {
  return array.reduce((acc, person) => {
    // Если город еще не был добавлен в объект, добавляем его
    if (!acc[person.city]) {
      acc[person.city] = [];
    }
    // Добавляем имя человека в соответствующий город
    acc[person.city].push(person.name);
    return acc;
  }, {});
};

const groupedPeople = groupByCity(people);

console.log(groupedPeople);
```
Пояснение:
1. Метод `reduce()`:
   - Мы используем метод `reduce()` для того, чтобы пройтись по каждому элементу массива `people` и создать объект, где ключами будут города, а значениями — массивы с именами людей.
   - Каждый раз, когда встречаем человека с определённым городом, проверяем, существует ли уже массив для этого города. Если нет, создаём его. Затем добавляем имя человека в этот массив.
2. Инициализация аккумулятора:
   - Второй аргумент метода `reduce()` (`{}`) — это начальное значение аккумулятора, который будет представлять собой объект для хранения группировки по городам.
3. Результат:
   - На выходе мы получаем объект, где каждому городу соответствует массив людей, которые в нём живут.
Результат выполнения кода:
```javascript
{
  Moscow: ['Alex', 'Ivan'],
  'New York': ['Joe'],
  Berlin: ['Johan']
}
```
Это решение будет работать для любого массива людей с аналогичной структурой данных, распределяя их по городам.



~ ~ ~
---------------------
⋙ ❍ Массивы:
---
1. Удаление дубликатов из массива
⌛ Задача: Напишите функцию, которая удаляет все дубликаты из массива.
Пример:
```javascript
const arr = [1, 2, 3, 2, 4, 5, 5, 6];
removeDuplicates(arr);  // [1, 2, 3, 4, 5, 6]
```
🎯 Решение:
```javascript
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
```
Объяснение:
- В этом решении используется объект `Set`, который автоматически удаляет все дубликаты.
- Мы преобразуем `Set` обратно в массив с помощью оператора расширения `...`.
Сложность: O(n), где `n` — длина массива.
---
2. Поиск самого частого элемента в массиве
⌛ Задача: Напишите функцию, которая находит самый часто встречающийся элемент в массиве.
Пример:
```javascript
const arr = [1, 3, 3, 2, 2, 2, 5];
mostFrequentElement(arr);  // 2
```
🎯 Решение:
```javascript
const mostFrequentElement = (arr) => {
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequent = null;

  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxCount) {
      maxCount = frequencyMap[key];
      mostFrequent = key;
    }
  }

  return mostFrequent;
};
```
Объяснение:
- Мы используем объект `frequencyMap`, чтобы подсчитать, сколько раз каждый элемент встречается в массиве.
- Затем мы проходим по объекту и находим элемент с максимальной частотой.
Сложность: O(n), где `n` — длина массива.
---
3. Переворот массива
⌛ Задача: Напишите функцию, которая переворачивает массив.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5];
reverseArray(arr);  // [5, 4, 3, 2, 1]
```
🎯 Решение:
```javascript
const reverseArray = (arr) => {
  return arr.reverse();
};
```
Объяснение:
- Встроенный метод `reverse()` изменяет оригинальный массив и возвращает его в обратном порядке.
Сложность: O(n), где `n` — длина массива.
---
4. Выбор элементов из массива по индексу
⌛ Задача: Напишите функцию, которая возвращает элементы массива по заданным индексам.
Пример:
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
getElementsByIndices(arr, [1, 3]);  // ['b', 'd']
```
🎯 Решение:
```javascript
const getElementsByIndices = (arr, indices) => {
  return indices.map(index => arr[index]);
};
```
Объяснение:
- Мы используем метод `map()`, чтобы пройти по массиву индексов и для каждого индекса извлечь соответствующий элемент из исходного массива.
Сложность: O(m), где `m` — количество элементов в массиве индексов.
---
5. Поиск пересечений двух массивов
⌛ Задача: Напишите функцию, которая находит пересечение двух массивов.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
intersection(arr1, arr2);  // [3, 4]
```
🎯 Решение:
```javascript
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
};
```
Объяснение:
- Мы создаем `Set` из первого массива, чтобы ускорить поиск элементов.
- Затем фильтруем второй массив, оставляя только те элементы, которые есть в первом массиве.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---
6. Преобразование массива в объект
⌛ Задача: Напишите функцию, которая преобразует массив пар ключ-значение в объект.
Пример:
```javascript
const arr = [['name', 'Alex'], ['age', 30], ['city', 'Moscow']];
arrayToObject(arr);  // { name: 'Alex', age: 30, city: 'Moscow' }
```
🎯 Решение:
```javascript
const arrayToObject = (arr) => {
  return Object.fromEntries(arr);
};
```
Объяснение:
- Мы используем метод `Object.fromEntries()`, который преобразует массив пар [ключ, значение] в объект.
Сложность: O(n), где `n` — количество элементов в массиве.
---
7. Объединение массивов и удаление дубликатов
⌛ Задача: Напишите функцию, которая объединяет два массива и удаляет из них все дубликаты.
Пример:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
mergeAndRemoveDuplicates(arr1, arr2);  // [1, 2, 3, 4, 5]
```
🎯 Решение:
```javascript
const mergeAndRemoveDuplicates = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
```
Объяснение:
- Мы объединяем два массива с помощью оператора расширения `...` и затем применяем `Set`, чтобы удалить дубликаты.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---
8. Группировка элементов массива по условию
⌛ Задача: Напишите функцию, которая группирует элементы массива по заданному условию.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5, 6];
groupByCondition(arr, num => num % 2 === 0);  // { even: [2, 4, 6], odd: [1, 3, 5] }
```
🎯 Решение:
```javascript
const groupByCondition = (arr, condition) => {
  return arr.reduce((acc, item) => {
    const key = condition(item) ? 'even' : 'odd';
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};
```
Объяснение:
- Мы используем `reduce()` для создания объекта, где ключами будут "even" и "odd", в зависимости от условия. Внутри `reduce()` мы проверяем, подходит ли элемент под условие, и группируем его в соответствующий массив.
Сложность: O(n), где `n` — длина массива.
---
1. Перевод массива строк в массив объектов
⌛ Задача: Напишите функцию, которая преобразует массив строк в массив объектов с ключом `value`.
Пример:
```javascript
const arr = ['apple', 'banana', 'cherry'];
convertToObjects(arr);  // [{ value: 'apple' }, { value: 'banana' }, { value: 'cherry' }]
```
🎯 Решение:
```javascript
const convertToObjects = (arr) => {
  return arr.map(item => ({ value: item }));
};
```
Объяснение:
- Мы используем метод `map()`, чтобы пройтись по массиву строк и для каждого элемента возвращать объект с ключом `value`.
Сложность: O(n), где `n` — длина массива.
---
2. Отсортировать массив строк по длине
⌛ Задача: Напишите функцию, которая сортирует массив строк по длине каждой строки.
Пример:
```javascript
const arr = ['apple', 'banana', 'kiwi', 'cherry'];
sortByLength(arr);  // ['kiwi', 'apple', 'banana', 'cherry']
```
🎯 Решение:
```javascript
const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};
```
Объяснение:
- Мы используем метод `sort()`, который позволяет передать функцию сравнения. В нашем случае мы сортируем строки по их длине, сравнивая значения `a.length` и `b.length`.
Сложность: O(n log n) — сортировка.
---
3. Перевод массива объектов в одномерный массив значений
⌛ Задача: Напишите функцию, которая преобразует массив объектов в одномерный массив значений по определенному ключу.
Пример:
```javascript
const arr = [
  { name: 'Alex', age: 30 },
  { name: 'Ivan', age: 25 },
  { name: 'Joe', age: 35 }
];
extractValues(arr, 'name');  // ['Alex', 'Ivan', 'Joe']
```
🎯 Решение:
```javascript
const extractValues = (arr, key) => {
  return arr.map(item => item[key]);
};
```
Объяснение:
- Мы используем метод `map()`, чтобы извлечь значение по ключу из каждого объекта и вернуть новый массив этих значений.
Сложность: O(n), где `n` — количество объектов в массиве.
---
4. Проверка на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны).
Пример:
```javascript
const str = 'racecar';
isPalindrome(str);  // true
```
🎯 Решение:
```javascript
const isPalindrome = (str) => {
  const arr = str.split('');
  const reversedArr = arr.reverse();
  return arr.join('') === reversedArr.join('');
};
```
Объяснение:
- Мы разделяем строку на массив символов с помощью `split('')`, затем разворачиваем массив с помощью `reverse()` и снова соединяем элементы массива в строку с помощью `join('')`. Если исходная строка совпадает с перевёрнутой, то она является палиндромом.
Сложность: O(n), где `n` — длина строки.
---
5. Перемешивание массива (Shuffle)
⌛ Задача: Напишите функцию, которая случайным образом перемешивает элементы массива.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5];
shuffle(arr);  // Массив будет перемешан, например [4, 2, 1, 5, 3]
```
🎯 Решение:
```javascript
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Обмен элементов
  }
  return arr;
};
```
Объяснение:
- Это алгоритм Фишера-Йейтса (или Рандомный обмен), который эффективно перемешивает массив с помощью случайных обменов элементов.
Сложность: O(n), где `n` — длина массива.
---
6. Нахождение разницы двух массивов
⌛ Задача: Напишите функцию, которая находит элементы, присутствующие в одном массиве, но отсутствующие в другом.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
difference(arr1, arr2);  // [1, 2]
```
🎯 Решение:
```javascript
const difference = (arr1, arr2) => {
  return arr1.filter(item => !arr2.includes(item));
};
```
Объяснение:
- Мы используем метод `filter()`, чтобы оставить только те элементы из `arr1`, которые не присутствуют в `arr2`. Метод `includes()` проверяет наличие элемента в другом массиве.
Сложность: O(n * m), где `n` и `m` — длины двух массивов.
---
7. Конкатенация и уникализация двух массивов
⌛ Задача: Напишите функцию, которая объединяет два массива и удаляет все дубликаты.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
concatenateAndRemoveDuplicates(arr1, arr2);  // [1, 2, 3, 4, 5, 6]
```
🎯 Решение:
```javascript
const concatenateAndRemoveDuplicates = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
```
Объяснение:
- Мы объединяем два массива с помощью оператора расширения `...`, затем применяем `Set`, чтобы удалить все дубликаты и снова преобразуем результат в массив с помощью оператора расширения.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---------------------
⋙ ❍ ⌛ Задача: Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min:
---
Для нахождения наибольшего и наименьшего элемента в массиве без использования встроенных методов **`Math.max`** и **`Math.min`**, можно воспользоваться различными подходами, например, с помощью цикла или метода `reduce`. Рассмотрим несколько вариантов реализации.
🎯 Решение:
1. Использование цикла `for`
Самый простой способ — пройти по массиву с помощью цикла и обновлять значения наибольшего и наименьшего элементов по мере обхода.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Инициализируем переменные `max` и `min` первым элементом массива.
- Проходим по массиву и, если текущий элемент больше или меньше текущих значений, обновляем `max` или `min`.
- В конце массива `max` и `min` содержат наибольшее и наименьшее значение.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива.
- Пространственная сложность: \( O(1) \), так как мы используем только две переменные.
---
2. Использование метода `reduce`
Метод `reduce` позволяет аккумулировать результат (в нашем случае максимальное и минимальное значение) за один проход по массиву.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const { max, min } = numbers.reduce(
  (acc, num) => {
    if (num > acc.max) acc.max = num;
    if (num < acc.min) acc.min = num;
    return acc;
  },
  { max: numbers[0], min: numbers[0] }
);

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Используем метод `reduce`, чтобы пройти по массиву и отслеживать минимальное и максимальное значения в объекте `acc`.
- На каждом шаге проверяем, если текущий элемент больше `max` или меньше `min`, обновляем соответствующие значения.
Сложность:
- Временная сложность: \( O(n) \).
- Пространственная сложность: \( O(1) \), поскольку мы храним только два значения (максимум и минимум).
---
3. Использование цикла `for...of`
Цикл `for...of` позволяет перебирать элементы массива, и таким же образом можно отслеживать наибольший и наименьший элементы.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (const num of numbers) {
  if (num > max) max = num;
  if (num < min) min = num;
}

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Этот метод использует цикл `for...of` для перебора всех элементов массива.
- В цикле проверяется, если текущий элемент больше или меньше максимального и минимального значений, обновляем их.
Сложность:
- Временная сложность: \( O(n) \).
- Пространственная сложность: \( O(1) \).
---
4. Использование метода `sort` (не оптимальный способ)
Можно отсортировать массив, а затем взять первый и последний элементы для нахождения минимального и максимального значений. Однако этот метод имеет худшую производительность, так как требует сортировки.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const sortedNumbers = [...numbers].sort((a, b) => a - b);

const min = sortedNumbers[0];
const max = sortedNumbers[sortedNumbers.length - 1];

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Мы создаём копию массива (чтобы не изменять оригинал) и сортируем его по возрастанию.
- После сортировки первый элемент массива — минимальный, а последний — максимальный.
Сложность:
- Временная сложность: \( O(n \log n) \) из-за сортировки массива.
- Пространственная сложность: \( O(n) \), так как мы создаём новый массив.
Резюме
| Способ                           | Временная сложность | Пространственная сложность | Примечание                              |
|----------------------------------|---------------------|----------------------------|----------------------------------------|
| Цикл `for`                   | \( O(n) \)          | \( O(1) \)                 | Простой и эффективный способ.         |
| `reduce`                     | \( O(n) \)          | \( O(1) \)                 | Функциональный подход.                 |
| Цикл `for...of`              | \( O(n) \)          | \( O(1) \)                 | Очень читаемый и современный подход.  |
| Сортировка                   | \( O(n \log n) \)   | \( O(n) \)                 | Не самый оптимальный метод.           |
Рекомендации
- Используйте цикл `for`, `for...of` или `reduce` для наилучшей производительности (все эти методы имеют сложность \( O(n) \)).
- Сортировка подходит только для случаев, когда нужно отсортировать весь массив или когда сортировка — это часть задачи.
---------------------
⋙ ❍ Обработка данных в массиве определенным образом с решением O(n):
---
Для обработки данных в массиве с временем работы O(n), нам нужно пройти по всем элементам массива один раз и выполнить необходимые операции. Это может включать:
- Фильтрацию элементов.
- Модификацию значений.
- Применение определённых вычислений.
- Группировку или агрегацию данных.
Предлагаю рассмотреть несколько вариантов задач и решений с O(n) сложностью.
---
1. Преобразование массива (например, умножение всех элементов на 2)
⌛ Задача:
Необходимо пройти по всем элементам массива и умножить их на 2.
🎯 Решение:
```javascript
function multiplyByTwo(arr) {
  return arr.map(num => num * 2); // Используем map для преобразования элементов массива
}

const numbers = [1, 2, 3, 4, 5];
console.log(multiplyByTwo(numbers)); // [2, 4, 6, 8, 10]
```
Объяснение:
- Метод `map()` создает новый массив, в котором каждый элемент преобразован в соответствии с заданной функцией.
- Мы просто умножаем каждый элемент на 2.
- Сложность: \( O(n) \), где \( n \) — длина массива.
---
2. Фильтрация элементов массива (например, все числа больше 10)
⌛ Задача:
Необходимо из массива выбрать все элементы, которые больше 10.
🎯 Решение:
```javascript
function filterGreaterThanTen(arr) {
  return arr.filter(num => num > 10); // Используем filter для фильтрации элементов
}

const numbers = [5, 12, 8, 15, 3, 20];
console.log(filterGreaterThanTen(numbers)); // [12, 15, 20]
```
Объяснение:
- Метод `filter()` создаёт новый массив, включающий только те элементы, которые соответствуют условию (в данном случае больше 10).
- Сложность: \( O(n) \), где \( n \) — длина массива.
---
3. Нахождение суммы всех элементов массива
⌛ Задача:
Необходимо вычислить сумму всех чисел в массиве.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0); // Используем reduce для суммирования элементов
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Метод `reduce()` позволяет аккумулировать результат, в данном случае сумму элементов массива.
- Начальное значение аккумулятора — 0.
- Сложность: \( O(n) \), так как мы проходим по всем элементам массива.
---
4. Группировка данных по ключу
⌛ Задача:
Необходимо сгруппировать объекты по определенному свойству, например, по возрасту.
🎯 Решение:
```javascript
function groupByAge(arr) {
  return arr.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {});
}

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

console.log(groupByAge(people));
/*
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35: [{ name: 'Eve', age: 35 }]
}
*/
```
Объяснение:
- Мы используем `reduce()` для создания объекта, где ключами будут возраст, а значениями — массивы людей с этим возрастом.
- Сложность: \( O(n) \), так как мы проходим по каждому элементу массива.
---
5. Нахождение максимального и минимального элементов массива
⌛ Задача:
Найти максимальный и минимальный элементы массива за один проход.
🎯 Решение:
```javascript
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

const numbers = [10, 5, 8, 20, 1, -5];
console.log(findMaxMin(numbers)); // { max: 20, min: -5 }
```
Объяснение:
- Мы проходим по массиву один раз и поддерживаем два значения — `max` и `min`.
- Каждый элемент сравнивается с текущими `max` и `min`, и если он больше/меньше, то обновляются соответствующие значения.
- Сложность: \( O(n) \), так как мы проходим по всем элементам массива.
---
6. Нахождение дубликатов в массиве
⌛ Задача:
Найти все повторяющиеся элементы в массиве.
🎯 Решение:
```javascript
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicates.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }

  return [...duplicates];
}

const numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 9, 1];
console.log(findDuplicates(numbers)); // [1, 2, 3]
```
Объяснение:
- Мы используем два набора (`Set`): один для отслеживания уже встреченных элементов, другой для хранения дубликатов.
- Когда элемент уже встречался, он добавляется в набор дубликатов.
- Сложность: \( O(n) \), так как проверка наличия элемента в `Set` и добавление происходят за O(1).
Резюме
- Время работы O(n) означает, что мы проходим по всем элементам массива только один раз.
- Для всех этих решений мы используем стандартные методы массива, такие как `map`, `filter`, `reduce`, и циклы, что обеспечивает эффективность и простоту кода.
---------------------
⋙ ❍ Объекты:
---
1. Клонирование объекта
⌛ Задача: Напишите функцию для клонирования объекта. Убедитесь, что вложенные объекты также клонируются.
🎯 Решение
```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // { a: 1, b: { c: 2 } }
```
Объяснение:
- Используем `JSON.stringify` для преобразования объекта в строку и `JSON.parse` для создания нового объекта.
- Это метод работает только для объектов, которые не содержат функций или циклических ссылок.
---
2. Проверка, является ли объект пустым
⌛ Задача: Напишите функцию для проверки, является ли объект пустым.
🎯 Решение:
```javascript
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
```
Объяснение:
- Метод `Object.keys()` возвращает массив ключей объекта. Если его длина равна 0, объект пуст.
---
3. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта.
🎯 Решение:
```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread (`...`) для объединения двух объектов. Если ключи совпадают, значение из второго объекта перезапишет значение из первого.
---
4. Глубокое сравнение объектов
⌛ Задача: Напишите функцию для глубокого сравнения двух объектов.
🎯 Решение:
```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1 }, { b: 1 })); // false
```
Объяснение:
- Используется рекурсивный метод для глубокого сравнения всех свойств объектов.
---
5. Копирование свойств одного объекта в другой
⌛ Задача: Напишите функцию для копирования всех свойств одного объекта в другой.
🎯 Решение:
```javascript
function copyProperties(target, source) {
  Object.assign(target, source);
}

const target = {};
const source = { a: 1, b: 2 };
copyProperties(target, source);
console.log(target); // { a: 1, b: 2 }
```
Объяснение:
- Используем `Object.assign()` для копирования всех свойств из одного объекта в другой.
---
6. Получение списка значений объекта
⌛ Задача: Напишите функцию, которая возвращает все значения объекта в виде массива.
🎯 Решение:
```javascript
function getValues(obj) {
  return Object.values(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(getValues(obj)); // [1, 2, 3]
```
Объяснение:
- `Object.values()` возвращает массив всех значений объекта.
---
7. Проверка, содержит ли объект ключ
⌛ Задача: Напишите функцию для проверки, существует ли ключ в объекте.
🎯 Решение:
```javascript
function hasKey(obj, key) {
  return key in obj;
}

const obj = { a: 1, b: 2 };
console.log(hasKey(obj, 'a')); // true
console.log(hasKey(obj, 'c')); // false
```
Объяснение:
- Используем оператор `in` для проверки наличия ключа в объекте.
---
8. Удаление ключа из объекта
⌛ Задача: Напишите функцию для удаления ключа из объекта.
🎯 Решение:
```javascript
function deleteKey(obj, key) {
  delete obj[key];
}

const obj = { a: 1, b: 2 };
deleteKey(obj, 'a');
console.log(obj); // { b: 2 }
```
Объяснение:
- Используем оператор `delete` для удаления свойства из объекта.
---
9. Создание объекта с дефолтными значениями
⌛ Задача: Напишите функцию, которая создаёт объект с дефолтными значениями для заданных ключей.
🎯 Решение:
```javascript
function createObjectWithDefaults(keys, defaultValue) {
  return keys.reduce((obj, key) => {
    obj[key] = defaultValue;
    return obj;
  }, {});
}

console.log(createObjectWithDefaults(['a', 'b', 'c'], 0)); // { a: 0, b: 0, c: 0 }
```
Объяснение:
- Используем метод `reduce` для создания объекта с заданными ключами и значением по умолчанию.
---
10. Объединение объектов с приоритетом последнего
⌛ Задача: Напишите функцию для объединения двух объектов, где свойства из второго объекта перезаписывают свойства из первого.
🎯 Решение:
```javascript
function mergeWithPriority(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeWithPriority(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread для объединения объектов, при этом значения из второго объекта перезаписывают значения первого.
---
11. Преобразование объекта в массив с парами [ключ, значение]
⌛ Задача: Напишите функцию для преобразования объекта в массив пар ключ-значение.
🎯 Решение:
```javascript
function objectToArray(obj) {
  return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]
```
Объяснение:
- `Object.entries()` возвращает массив с парами `[ключ, значение]`.
---
12. Изменение значения свойства в объекте по ключу
⌛ Задача: Напишите функцию, которая изменяет значение свойства объекта по ключу.
🎯 Решение:
```javascript
function updateValue(obj, key, value) {
  obj[key] = value;
}

const obj = { a: 1, b: 2 };
updateValue(obj, 'a', 10);
console.log(obj); // { a: 10, b: 2 }
```
Объяснение:
- Просто обновляем значение свойства по ключу.
---
13. Сравнение двух объектов
⌛ Задача: Напишите функцию для сравнения двух объектов на равенство.
🎯 Решение:
```javascript
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(objectsEqual(obj1, obj2)); // true
```
Объяснение:
- Сравниваем объекты, преобразуя их в строки с помощью `JSON.stringify()`.
---
14. Сортировка ключей объекта
⌛ Задача: Напишите функцию для сортировки ключей объекта.
🎯 Решение:
```javascript
function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  sortedKeys.forEach(key => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

const obj = { b: 2, a: 1, c: 3 };
console.log(sortObjectKeys(obj)); // { a: 1, b: 2, c: 3 }
```
Объяснение:
- Используем `Object.keys()` для получения ключей и сортируем их.
- Создаём новый объект с отсортированными ключами.
---
15. Получение всех значений определённого типа из объекта
⌛ Задача: Напишите функцию для получения всех значений объекта, которые имеют определённый тип.
🎯 Решение:
```javascript
function getValuesByType(obj, type) {
  return Object.values(obj).filter(value => typeof value === type);
}

const obj = { a: 1, b: 'hello', c: true, d: 42 };
console.log(getValuesByType(obj, 'number')); // [1, 42]
```
Объяснение:
- Используем `Object.values()` для получения всех значений и `filter()` для фильтрации по типу.
---
16. Создание нового объекта с изменёнными значениями
⌛ Задача: Напишите функцию для создания нового объекта, в котором все значения изменены.
🎯 Решение:
```javascript
function transformValues(obj, transformFunc) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, transformFunc(value)])
  );
}

const obj = { a: 1, b: 2, c: 3 };
const result = transformValues(obj, value => value * 2);
console.log(result); // { a: 2, b: 4, c: 6 }
```
Объяснение:
- Мы используем `Object.entries()` для получения массива пар ключ-значение, затем применяем функцию преобразования и восстанавливаем объект с помощью **`Object.fromEntries()`**.
---
17. Извлечение ключей и значений из объекта в массив
⌛ Задача: Напишите функцию для извлечения всех ключей и значений объекта в массив.
🎯 Решение:
```javascript

function extractKeysValues(obj) {
  return Object.entries(obj).flat();
}

const obj = { a: 1, b: 2, c: 3 };
console.log(extractKeysValues(obj)); // ['a', 1, 'b', 2, 'c', 3]
```
Объяснение:
- Используем `Object.entries()` для извлечения пар ключ-значение и метод `flat()` для превращения результата в плоский массив.
---------------------
⋙ ❍ Сортировки:
---
1. Сортировка массива чисел по возрастанию
⌛ Задача: Напишите функцию, которая сортирует массив чисел по возрастанию.
🎯 Решение:
```javascript
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortAscending(numbers)); // [1, 3, 5, 8, 10]
```
Объяснение:
- Используем метод `sort()` для сортировки массива.
- Сортировка происходит по числовому значению, поэтому мы передаем функцию сравнения `(a, b) => a - b`.
---
2. Сортировка массива строк по длине
⌛ Задача: Напишите функцию, которая сортирует массив строк по их длине.
🎯 Решение:
```javascript
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

const strings = ['apple', 'banana', 'cherry', 'kiwi'];
console.log(sortByLength(strings)); // ['kiwi', 'apple', 'banana', 'cherry']
```
Объяснение:
- Мы используем `sort()` с функцией сравнения по длине строк.
---
3. Сортировка по убыванию
⌛ Задача: Напишите функцию, которая сортирует массив чисел по убыванию.
🎯 Решение:
```javascript
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortDescending(numbers)); // [10, 8, 5, 3, 1]
```
Объяснение:
- Мы меняем местами a и b в функции сравнения, чтобы отсортировать массив по убыванию.
---
4. Сортировка массива объектов по значению поля
⌛ Задача: Напишите функцию, которая сортирует массив объектов по значению заданного поля.
🎯 Решение:
```javascript
function sortByField(arr, field) {
  return arr.sort((a, b) => a[field] - b[field]);
}

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
console.log(sortByField(users, 'age')); // [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```
Объяснение:
- Сортируем объекты по полю age.
- Используем метод `sort()`, передавая функцию, которая сравнивает значения поля объекта.
---
5. Сортировка массива объектов по строковому значению
⌛ Задача: Напишите функцию, которая сортирует массив объектов по строковому полю.
🎯 Решение:
```javascript
function sortByStringField(arr, field) {
  return arr.sort((a, b) => a[field].localeCompare(b[field]));
}

const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
console.log(sortByStringField(users, 'name')); // [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```
Объяснение:
- Для строковых данных используем метод `localeCompare()`, который выполняет сравнение строк с учётом локализации.
---
6. Сортировка массива с несколькими критериями
⌛ Задача: Напишите функцию, которая сортирует массив объектов по нескольким критериям.
🎯 Решение:
```javascript
function sortByMultipleFields(arr) {
  return arr.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
console.log(sortByMultipleFields(users));
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }, { name: 'Bob', age: 30 }]
```
Объяснение:
- Мы сортируем сначала по age, а если возраст одинаковый, то по имени.
---
7. Сортировка с использованием `sort()` и `reverse()`
⌛ Задача: Напишите функцию, которая сортирует массив по возрастанию, а затем переворачивает его.
🎯 Решение:
```javascript
function sortAndReverse(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortAndReverse(numbers)); // [10, 8, 5, 3, 1]
```
Объяснение:
- Сначала сортируем массив по возрастанию, а затем применяем `reverse()` для переворота массива.
---
8. Сортировка массива чисел с учетом NaN
⌛ Задача: Напишите функцию, которая сортирует массив чисел, учитывая наличие значения **`NaN`**.
🎯 Решение:
```javascript
function sortWithNaN(arr) {
  return arr.sort((a, b) => {
    if (isNaN(a) && !isNaN(b)) return 1;
    if (!isNaN(a) && isNaN(b)) return -1;
    return a - b;
  });
}

const numbers = [10, NaN, 5, 8, NaN, 1];
console.log(sortWithNaN(numbers)); // [1, 5, 8, 10, NaN, NaN]
```
Объяснение:
- В функции сравнения сначала проверяем, является ли элемент `NaN` и правильно сортируем его в конец массива.
---
9. Сортировка массива строк по алфавиту
⌛ Задача: Напишите функцию, которая сортирует массив строк по алфавиту.
🎯 Решение:
```javascript
function sortAlphabetically(arr) {
  return arr.sort();
}

const words = ['banana', 'apple', 'cherry'];
console.log(sortAlphabetically(words)); // ['apple', 'banana', 'cherry']
```
Объяснение:
- Метод `sort()` для строк сортирует их по алфавиту.
---
10. Сортировка массива объектов с нестандартной функцией сравнения
⌛ Задача: Напишите функцию для сортировки массива объектов с использованием нестандартной функции сравнения.
🎯 Решение:
```javascript
function customSort(arr) {
  return arr.sort((a, b) => b.age - a.age);
}

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
console.log(customSort(users)); // [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]
```
Объяснение:
- Мы создаем собственную функцию сравнения, чтобы сортировать по age в порядке убывания.
---
11. Сортировка массива с использованием алгоритма пузырьковой сортировки
⌛ Задача: Реализуйте пузырьковую сортировку.
🎯 Решение:
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // обмен
      }
    }
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Пузырьковая сортировка повторно перебирает массив и меняет элементы местами, если они находятся в неправильном порядке.
---
12. Сортировка массива с использованием сортировки вставками
⌛ Задача: Реализуйте сортировку вставками.
🎯 Решение:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Мы перебираем массив и на каждом шаге вставляем текущий элемент в отсортированную часть массива.
---
13. Сортировка массива с использованием сортировки выбором
⌛ Задача: Реализуйте сортировку выбором.
🎯 Решение:
```javascript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // обмен
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(selectionSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Мы находим минимальный элемент в оставшейся части массива и меняем его местами с первым элементом не отсортированной части массива.
---
14. Сортировка массива чисел с нуля
⌛ Задача: Напишите функцию, которая сортирует массив, перемещая все нули в конец массива.
🎯 Решение:
```javascript
function moveZerosToEnd(arr) {
  const nonZeros = arr.filter(num => num !== 0);
  const zeros = arr.length - nonZeros.length;
  return [...nonZeros, ...Array(zeros).fill(0)];
}

const numbers = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(numbers)); // [1, 3, 12, 0, 0]
```
Объяснение:
- Сначала фильтруем все нули с помощью `filter`, затем заполняем конец массива нулями.
---
15. Сортировка массива по датам
⌛ Задача: Напишите функцию, которая сортирует массив объектов по датам.
🎯 Решение:
```javascript
function sortByDate(arr) {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
}

const events = [
  { name: 'Event 1', date: '2022-01-01' },
  { name: 'Event 2', date: '2023-01-01' },
  { name: 'Event 3', date: '2021-01-01' }
];

console.log(sortByDate(events)); // Сортировка по дате
```
Объяснение:
- Сравниваем даты, преобразованные в объект `Date`.
---
16. Сортировка массива строк с игнорированием регистра
⌛ Задача: Напишите функцию, которая сортирует массив строк, игнорируя регистр.
🎯 Решение:
```javascript
function sortIgnoringCase(arr) {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

const words = ['Banana', 'apple', 'cherry', 'date'];
console.log(sortIgnoringCase(words)); // ['apple', 'Banana', 'cherry', 'date']
```
Объяснение:
- Мы приводим строки к нижнему регистру перед сравнением с помощью `toLowerCase()`.
---
17. Сортировка массива по числовым значениям с учётом десятичных
⌛ Задача: Напишите функцию, которая сортирует массив строк, содержащих числа с десятичными точками.
🎯 Решение:
```javascript
function sortByDecimal(arr) {
  return arr.sort((a, b) => parseFloat(a) - parseFloat(b));
}

const numbers = ['10.5', '2.1', '5.7', '3.3'];
console.log(sortByDecimal(numbers)); // ['2.1', '3.3', '5.7', '10.5']
```
Объяснение:
- Мы используем `parseFloat()` для преобразования строк в числа перед сортировкой.
---------------------
⋙ ❍ События:
---
1. Обработчик события на клик
⌛ Задача: Напишите обработчик события для клика на кнопку, который изменяет текст в элементе.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('text').innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- Мы добавляем обработчик события `click` для кнопки, который изменяет текст внутри параграфа при клике.
---
2. Повторная привязка обработчика события
⌛ Задача: Напишите код, который будет привязывать обработчик события на клик с изменением текста, но только один раз.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  const button = document.getElementById('myButton');
  const text = document.getElementById('text');

  button.addEventListener('click', function handler() {
    text.innerText = 'Text changed!';
    button.removeEventListener('click', handler); // Удаляем обработчик после первого клика
  });
</script>
```
Объяснение:
- Мы используем `removeEventListener`, чтобы удалить обработчик после его выполнения один раз.
---
3. Событие на изменении значения в поле ввода
⌛ Задача: Напишите обработчик события на `input`, который будет выводить в консоль текущее значение введённого текста.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">

<script>
  document.getElementById('myInput').addEventListener('input', function(event) {
    console.log(event.target.value);
  });
</script>
```
Объяснение:
- Используем событие `input` для отслеживания изменений в поле ввода.
---
4. Остановка распространения события
⌛ Задача: Напишите код, который отменяет распространение клика по кнопке, предотвращая его от всплытия.
🎯 Решение:
```html
<div id="outerDiv" style="padding: 20px; background-color: lightblue;">
  <button id="myButton">Click me</button>
</div>

<script>
  document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Outer div clicked');
  });

  document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    alert('Button clicked');
  });
</script>
```
Объяснение:
- Используем `event.stopPropagation()` для предотвращения всплытия события от кнопки к родительскому элементу.
---
5. Делегирование событий
⌛ Задача: Реализуйте обработчик события для нескольких кнопок внутри одного контейнера с использованием делегирования событий.
🎯 Решение:
```html
<div id="buttonContainer">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

<script>
  document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      console.log('Clicked on:', event.target.innerText);
    }
  });
</script>
```
Объяснение:
- Делегируем событие на контейнер, и проверяем, что клик был сделан на `button`. Это позволяет обрабатывать события на множестве элементов без привязки обработчиков к каждому из них.
---
6. Событие на фокус
⌛ Задача: Напишите обработчик события `focus`, который меняет цвет рамки вокруг поля ввода при его фокусе.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Focus me">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.borderColor = 'green';
  });

  document.getElementById('myInput').addEventListener('blur', function() {
    this.style.borderColor = '';
  });
</script>
```
Объяснение:
- Используем событие `focus` для изменения стиля при получении фокуса, и `blur` для восстановления исходного состояния.
---
7. Отслеживание перемещения мыши
⌛ Задача: Напишите обработчик для события `mousemove`, который отслеживает позицию мыши на странице.
🎯 Решение:
```html
<script>
  document.addEventListener('mousemove', function(event) {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
</script>
```
Объяснение:
- `mousemove` отслеживает движение мыши, и мы выводим координаты позиции мыши в консоль.
---
8. Прокачка события колесика мыши
⌛ Задача: Напишите обработчик события `wheel`, который выводит в консоль, прокручивает ли пользователь страницу вверх или вниз.
🎯 Решение:
```html
<script>
  document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      console.log('Scrolling down');
    } else {
      console.log('Scrolling up');
    }
  });
</script>
```
Объяснение:
- Событие `wheel` отслеживает прокрутку мыши, а `deltaY` сообщает о направлении прокрутки.
---
9. Ключевое событие клавиатуры
⌛ Задача: Напишите обработчик для события `keydown`, который выводит нажатую клавишу.
🎯 Решение:
```html
<script>
  document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
</script>
```
Объяснение:
- Событие `keydown` отслеживает нажатие клавиш и выводит соответствующую клавишу через `event.key`.
---
10. Использование события `submit`
⌛ Задача: Напишите обработчик для события `submit` формы, который отменяет её отправку и выводит данные на экран.
🎯 Решение:
```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
  });
</script>
```
Объяснение:
- Используем `submit`* для перехвата отправки формы и `event.preventDefault()`, чтобы предотвратить её отправку. С помощью `FormData` получаем данные формы.
---
11. Использование события `resize`
⌛ Задача: Напишите обработчик для события `resize`, который выводит новые размеры окна браузера.
🎯 Решение:
```html
<script>
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });
</script>
```
Объяснение:
- `resize` отслеживает изменение размера окна браузера.
---
12. Отслеживание события `focus` и `blur`
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые изменяют стиль элемента при фокусе.
🎯 Решение:
```html
<input type="text" id="focusInput" placeholder="Focus me">

<script>
  const input = document.getElementById('focusInput');
  input.addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
  input.addEventListener('blur', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- При фокусе изменяем стиль элемента, а при потере фокуса восстанавливаем его.
---
13. Событие на двойной клик
⌛ Задача: Напишите обработчик для события `dblclick`, который меняет текст в элементе.
🎯 Решение:
```html
<p id="dblclickText">Double-click me</p>

<script>
  document.getElementById('dblclickText').addEventListener('dblclick', function() {
    this.innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- `dblclick` срабатывает при двойном клике по элементу, и в данном случае изменяет текст.
---
14. Отслеживание состояния кнопки (нажатие и отпускание)
⌛ Задача: Напишите обработчики для событий `mousedown` и `mouseup`, которые изменяют стиль кнопки.
🎯 Решение:
```html
<button id="pressButton">Press me</button>

<script>
  const button = document.getElementById('pressButton');

  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightgreen';
  });

  button.addEventListener('mouseup', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- `mousedown` срабатывает, когда кнопка мыши нажата, и `mouseup` — когда отпущена.
---
15. Использование события `input` для отслеживания ввода текста
⌛ Задача: Напишите обработчик для события `input`, который будет выводить количество символов в текстовом поле.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="charCount">Characters: 0</p>

<script>
  document.getElementById('myInput').addEventListener('input', function() {
    document.getElementById('charCount').innerText = 'Characters: ' + this.value.length;
  });
</script>
```
Объяснение:
- `input` отслеживает изменения в поле ввода и обновляет количество символов.
---
16. Отслеживание фокуса в нескольких полях
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые подсвечивают поле ввода при фокусе и удаляют подсветку при потере фокуса.
🎯 Решение:
```html
<input type="text" placeholder="Name">
<input type="text" placeholder="Email">

<script>
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = 'blue';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '';
    });
  });
</script>
```
Объяснение:
- Мы используем `querySelectorAll` для выбора всех полей ввода и отслеживания фокуса и потери фокуса.
---
17. Событие перетаскивания (drag and drop)
⌛ Задача: Напишите код для перетаскивания элемента по экрану.
🎯 Решение:
html
Копировать
Редактировать
<div id="dragMe" draggable="true" style="width: 100px; height: 100px; background-color: lightblue; cursor: pointer;">Drag me</div>

<script>
  const element = document.getElementById('dragMe');

  element.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Dragging');
  });

  element.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  element.addEventListener('drop', function(event) {
    event.preventDefault();
    console.log('Dropped');
  });
</script>
Объяснение:
Используем события dragstart, dragover и drop для реализации перетаскивания элемента.
---------------------
⋙ ❍ Браузер API:
---
1. Получение геолокации пользователя
⌛ Задача: Напишите код, который получает текущее местоположение пользователя.
🎯 Решение:
```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
```
Объяснение:
- Используем `navigator.geolocation.getCurrentPosition` для получения текущего местоположения пользователя.
- Выводим координаты в консоль.
---
2. Открытие нового окна браузера
⌛ Задача: Напишите код для открытия нового окна с заданным URL.
🎯 Решение:
```javascript
const newWindow = window.open('https://example.com', '_blank', 'width=600, height=400');
```
Объяснение:
- Используем `window.open()` для открытия нового окна или вкладки с указанным URL и параметрами окна (ширина, высота и другие).
---
3. Хранение данных в localStorage
⌛ Задача: Напишите код для сохранения и извлечения данных из `localStorage`.
🎯 Решение:
```javascript
// Сохранение
localStorage.setItem('username', 'JohnDoe');

// Извлечение
const username = localStorage.getItem('username');
console.log(username); // JohnDoe
```
Объяснение:
- Используем `localStorage.setItem()` для сохранения данных и `localStorage.getItem()` для их извлечения.
- Данные сохраняются в браузере даже после перезагрузки страницы.
---
4. Уведомление пользователя
⌛ Задача: Напишите код, который отправляет уведомление пользователю.
🎯 Решение:
```javascript
if (Notification.permission === 'granted') {
  new Notification('Hello, world!');
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello, world!');
    }
  });
}
```
Объяснение:
- Используем `Notification` для создания уведомлений.
- Сначала проверяем разрешение пользователя. Если оно не отклонено, запрашиваем разрешение через `Notification.requestPermission()`.
---
5. Управление сессиями с sessionStorage
⌛ Задача: Напишите код для сохранения данных в `sessionStorage` и извлечения их.
🎯 Решение:
```javascript
// Сохранение
sessionStorage.setItem('sessionData', 'Some session data');

// Извлечение
const sessionData = sessionStorage.getItem('sessionData');
console.log(sessionData); // Some session data
```
Объяснение:
- Используем `sessionStorage`, чтобы хранить данные только для текущей сессии. Эти данные исчезают при закрытии браузера.
---
6. Работа с API событиями нажатия клавиш (KeyboardEvent)
⌛ Задача: Напишите обработчик события, который выводит нажатую клавишу в консоль.
🎯 Решение:
```javascript
document.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.key}`);
});
```
Объяснение:
- Используем событие `keydown`, чтобы отслеживать нажатия клавиш и выводить название клавиши через `event.key`.
---
7. Прокачка события мыши
⌛ Задача: Напишите код, который выводит координаты мыши в консоль при её движении.
🎯 Решение:
```javascript
document.addEventListener('mousemove', function(event) {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
```
Объяснение:
- Используем событие `mousemove`, чтобы отслеживать позицию мыши на экране и выводить координаты `clientX` и `clientY`.
---
8. Управление фокусом с использованием события `focus`
⌛ Задача: Напишите обработчик события `focus` для поля ввода, который меняет его фон.
🎯 Решение:
```html
<input type="text" id="myInput">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
</script>
```
Объяснение:
- При получении фокуса через событие `focus` изменяется стиль фона элемента.
---
9. Использование Web API для работы с файлами
⌛ Задача: Напишите код, который позволяет пользователю выбрать файл и вывести его имя в консоль.
🎯 Решение:
```html
<input type="file" id="fileInput">

<script>
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log(file.name);
  });
</script>
```
Объяснение:
- Используем событие `change` для отслеживания изменения в поле выбора файла. Извлекаем выбранный файл и выводим его имя.
---
10. Работа с таймерами (setTimeout)
⌛ Задача: Напишите код, который через 3 секунды после загрузки страницы выводит сообщение в консоль.
🎯 Решение:
```javascript
setTimeout(function() {
  console.log('This message appears after 3 seconds');
}, 3000);
```
Объяснение:
- Используем `setTimeout` для отложенного выполнения функции через заданное время (в миллисекундах).
---
11. Работа с таймерами (setInterval)
⌛ Задача: Напишите код, который каждую секунду выводит текущее время.
🎯 Решение:
```javascript
setInterval(function() {
  console.log(new Date().toLocaleTimeString());
}, 1000);
```
Объяснение:
- Используем `setInterval` для повторяющегося выполнения функции каждую секунду.
---
12. Прослушивание события изменения размера окна (resize)
⌛ Задача: Напишите обработчик для события `resize`, который выводит новые размеры окна.
🎯 Решение:
```javascript
window.addEventListener('resize', function() {
  console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
});
```
Объяснение:
- Используем событие `resize` для отслеживания изменения размера окна браузера.
---
13. Ожидание загрузки страницы с использованием события `DOMContentLoaded`
⌛ Задача: Напишите обработчик для события `DOMContentLoaded`, который сообщает, что страница загружена.
🎯 Решение:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page has been loaded');
});
```
Объяснение:
- Событие `DOMContentLoaded` срабатывает, когда DOM полностью загружен, но не обязательно загружены изображения и другие ресурсы.
---
14. Работа с Web Storage API (localStorage)
⌛ Задача: Напишите код, который сохраняет данные в `localStorage` и выводит их при загрузке страницы.
🎯 Решение:
```javascript
localStorage.setItem('user', 'Alice');
console.log(localStorage.getItem('user')); // Alice
```
Объяснение:
- `localStorage` используется для хранения данных на стороне клиента в браузере, которые сохраняются после перезагрузки страницы.
---
15. Работа с API сессий (sessionStorage)
⌛ Задача: Напишите код, который сохраняет данные в `sessionStorage` и выводит их при перезагрузке страницы.
🎯 Решение:
```javascript
sessionStorage.setItem('sessionData', 'Session data');
console.log(sessionStorage.getItem('sessionData')); // Session data
```
Объяснение:
- `sessionStorage` сохраняет данные только на текущую сессию и удаляется после закрытия вкладки или браузера.
---
16. Использование Web Workers
⌛ Задача: Создайте новый веб-воркер, который будет выполнять вычисления в фоновом потоке.
🎯 Решение:
```javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Start work');

worker.onmessage = function(event) {
  console.log('Worker says:', event.data);
};
```

```javascript
// worker.js
onmessage = function(event) {
  postMessage('Work is done');
};
```
Объяснение:
- Веб-воркеры позволяют выполнять JavaScript код в фоновом потоке без блокировки основного потока.
---
17. Использование события `beforeunload`
⌛ Задача: Напишите обработчик для события `beforeunload`, который предупреждает пользователя о возможной потере данных при закрытии страницы.
🎯 Решение:
```javascript
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave?'; // Старый стандарт для Chrome
});
```
Объяснение:
- Событие `beforeunload` позволяет вывести предупреждение пользователю перед тем, как он покинет страницу.
---------------------
⋙ ❍ ⌛ Задача: Сумма элементов массива. №1, №2, №3:
---
Вот три разных подхода для нахождения суммы элементов массива в JavaScript:
1. Использование цикла `for`
Этот метод перебирает элементы массива с помощью цикла `for` и аккумулирует их сумму в переменной.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 100
```
Объяснение:
- Мы инициализируем переменную `sum` как 0.
- Проходим по каждому элементу массива с помощью цикла `for`.
- Каждый элемент добавляется к `sum`.
Когда использовать:
- Простой и понятный способ, хорошо работает для небольших массивов.
- Используется, если требуется максимальный контроль над итерацией.
---
2. Использование метода `reduce`
Метод `reduce` является встроенным способом обработки массива и аккумулирования результата, в данном случае суммы.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 100
```
Объяснение:
- `reduce` принимает функцию с двумя аргументами:
  - `acc` (аккумулятор): хранит промежуточный результат (здесь сумма).
  - `curr` (текущий элемент): текущий элемент массива.
- Вторым аргументом функции `reduce` передаётся начальное значение аккумулятора (`0`).
- Каждый элемент массива добавляется к аккумулятору.
Когда использовать:
- Элегантный и краткий способ суммирования.
- Предпочтительно для работы в функциональном стиле.
---
3. Использование цикла `for...of`
Цикл `for...of` позволяет перебирать элементы массива и аккумулировать их сумму.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;
for (const num of numbers) {
  sum += num;
}

console.log(sum); // 100
```
Объяснение:
- Цикл `for...of` обходит каждый элемент массива.
- Каждый элемент добавляется к переменной `sum`.
Когда использовать:
- Читаемый и лаконичный способ, особенно для простых операций.
---
Сравнение методов
| Метод          | Простота реализации | Читаемость   | Сложность   |
|----------------|---------------------|--------------|-------------|
| Цикл `for` | Высокая             | Средняя      | \( O(n) \)  |
| `reduce`   | Средняя             | Высокая      | \( O(n) \)  |
| `for...of` | Высокая             | Очень высокая| \( O(n) \)  |
---
Пример для более сложных данных
Для массивов объектов, где необходимо предварительно обработать данные перед суммированием, можно комбинировать эти методы.
Пример с использованием `reduce`:
```javascript
const items = [
  { name: 'Apple', price: 10 },
  { name: 'Banana', price: 20 },
  { name: 'Cherry', price: 30 }
];

const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice); // 60
```
Пример с использованием цикла `for`:
```javascript
let total = 0;
for (let i = 0; i < items.length; i++) {
  total += items[i].price;
}
console.log(total); // 60
```
Резюме
1. `for`:
   - Простое решение, подходит для начинающих.
   - Максимальный контроль над процессом итерации.
2. `reduce`:
   - Более функциональный и лаконичный способ.
   - Удобен для сложных вычислений (например, извлечение данных перед суммированием).
3. `for...of`:
   - Читаемый и современный способ.
   - Рекомендуется для простых операций.
---------------------
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. №1 - №4:
---
1. Использование `Math.max` и `Math.min` с оператором Spread (`...`)
Методы `Math.max` и `Math.min` возвращают максимальное или минимальное значение из списка аргументов. Для передачи массива используем оператор spread (`...`).
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Оператор spread разворачивает массив в список отдельных аргументов, которые передаются в `Math.max` или `Math.min`.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива (проход по массиву выполняется при разворачивании).
- Пространственная сложность: \( O(1) \).
---
2. Использование цикла `for`
Вы можете найти максимум и минимум вручную, перебирая элементы массива.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Сравниваем каждый элемент массива с текущими значениями `max` и `min`.
- Если элемент больше текущего `max`, обновляем `max`. Если меньше текущего `min`, обновляем `min`.
Сложность:
- Временная сложность: \( O(n) \) — один проход по массиву.
- Пространственная сложность: \( O(1) \).
---
3. Использование метода `reduce()`
Метод `reduce()` позволяет обойти массив и вычислить максимум или минимум в одном вызове.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
const min = numbers.reduce((acc, curr) => (curr < acc ? curr : acc), numbers[0]);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- В `reduce` аккумулируем максимум или минимум, сравнивая текущий элемент (`curr`) с накопленным значением (`acc`).
- Начальное значение аккумулятора (`acc`) — первый элемент массива.
Сложность:
- Временная сложность: \( O(n) \) — один проход по массиву.
- Пространственная сложность: \( O(1) \).
---
4. Сортировка массива
Мы можем отсортировать массив и взять первый или последний элемент для нахождения минимума или максимума.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

// Сортируем массив по возрастанию
const sorted = [...numbers].sort((a, b) => a - b);

const min = sorted[0]; // Первый элемент — минимальный
const max = sorted[sorted.length - 1]; // Последний элемент — максимальный

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Используем метод `sort()`, чтобы отсортировать массив по возрастанию.
- Первый элемент отсортированного массива — минимальный, а последний — максимальный.
Сложность:
- Временная сложность: \( O(n \log n) \) — время сортировки массива.
- Пространственная сложность: \( O(n) \) — из-за создания копии массива (`[...numbers]`).
Сравнение подходов
| Подход                  | Простота реализации | Временная сложность | Пространственная сложность | Подходит для |
|-------------------------|---------------------|----------------------|----------------------------|--------------|
| `Math.max`/`Math.min` | Легко              | \( O(n) \)           | \( O(1) \)                 | Маленьких массивов |
| Цикл `for`          | Средне             | \( O(n) \)           | \( O(1) \)                 | Больших массивов |
| `reduce`            | Удобно             | \( O(n) \)           | \( O(1) \)                 | Функциональный стиль |
| Сортировка          | Легко              | \( O(n \log n) \)    | \( O(n) \)                 | Маленьких массивов |
Вывод
- Используйте `Math.max`/`Math.min` для простоты, если массив небольшой.
- Используйте `for` или `reduce`, если массив большой.
- Сортировка подходит, если массив нужно упорядочить дополнительно.
---------------------
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. Вариации первого способа:
---
Если использовать `Math.max` и `Math.min`, то можно предложить несколько вариаций первого способа для нахождения максимального и минимального элемента массива в JavaScript.
1. Использование `Math.max`/`Math.min` с оператором Spread
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Оператор spread (`...`) разворачивает массив в список аргументов.
- Передаётся в `Math.max` и `Math.min`, чтобы найти максимальное или минимальное значение.
Когда использовать:
- Простые массивы с небольшим числом элементов.
---
2. Использование `apply` вместо Spread
До появления оператора `...` (в ES6), использовался метод `apply`, который позволяет передать массив в функцию как список аргументов.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Метод `apply` принимает два аргумента:
  - `thisArg` (контекст функции, здесь `null`).
  - Массив аргументов.
- Это альтернатива оператору `...`.
Когда использовать:
- Если вы работаете в старых окружениях, которые не поддерживают ES6 (например, старый браузер).
---
3. Сравнение значений в частях массива
Если массив очень большой, вы можете разбить его на части и находить максимум или минимум каждой части, а затем искать максимальное/минимальное значение среди результатов.
🎯 Решение:
Код:
```javascript
function getMaxMinInChunks(arr, chunkSize) {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push({
      max: Math.max(...chunk),
      min: Math.min(...chunk),
    });
  }

  const overallMax = Math.max(...results.map(r => r.max));
  const overallMin = Math.min(...results.map(r => r.min));

  return { overallMax, overallMin };
}

const numbers = [10, 5, 8, 20, 1, -5, 15, 30, -10, 50];
const { overallMax, overallMin } = getMaxMinInChunks(numbers, 3);

console.log(overallMax); // 50
console.log(overallMin); // -10
```
Объяснение:
- Массив делится на куски с помощью `slice`.
- Для каждого куска находится локальный максимум/минимум.
- Находим общий максимум/минимум из результатов.
Когда использовать:
- Когда массив очень большой, и вы хотите разделить его обработку.
---
4. Переопределение `Math.max`/`Math.min` для кастомных структур
Если в массиве находятся объекты, нужно передавать значения, вычисленные из объектов.
🎯 Решение:
Код:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 35 },
];

const maxAge = Math.max(...people.map(person => person.age));
const minAge = Math.min(...people.map(person => person.age));

console.log(maxAge); // 35
console.log(minAge); // 22
```
Объяснение:
- Используем `map`, чтобы извлечь из объектов только поле `age`.
- Применяем `Math.max`/`Math.min` к полученному массиву возрастов.
Когда использовать:
- Для массивов объектов или сложных структур, где требуется извлечение значений перед сравнением.
Преимущества `Math.max`/`Math.min`
- Простота кода: однострочные решения.
- Высокая читаемость, особенно с использованием `...`.
Ограничения
- Ограничение длины массива: Если массив содержит слишком много элементов (больше, чем стек вызовов функции), `Math.max(...numbers)` вызовет ошибку:
  - В большинстве браузеров максимальная длина массива ограничена примерно \( 10^4 \)–\( 10^6 \) элементами.
  - Для больших массивов лучше использовать методы с итерацией, такие как `reduce()` или `for`.
Когда использовать каждый подход
| Подход                           | Особенности                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| Spread (`Math.max(...arr)`)  | Лучший выбор для простых массивов с поддержкой ES6.                         |
| `apply`                      | Альтернатива для старых окружений, где оператор `...` недоступен.           |
| Частичный подсчёт (Chunking) | Полезно для больших массивов, когда нужно уменьшить нагрузку на память.     |
| Кастомные структуры          | Используйте `map` для предварительной обработки данных (например, массив объектов). |
---------------------
⋙ ❍ Сортировка массива:
---
Сортировка массива — это операция, в которой элементы массива упорядочиваются в определённом порядке (по возрастанию или убыванию). В JavaScript можно использовать как встроенные методы, так и реализовать собственные алгоритмы сортировки.
Вот несколько популярных методов сортировки массива в JavaScript:
1. Сортировка с использованием метода `sort()`
Метод `sort()` позволяет сортировать массивы. Он изменяет сам массив.
🎯 Пример сортировки по возрастанию (по умолчанию)
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort(); // Сортировка по умолчанию (лексикографическая сортировка)
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по возрастанию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => a - b); // Сортировка по возрастанию
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по убыванию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => b - a); // Сортировка по убыванию
console.log(array); // [8, 7, 5, 4, 2, 1]
```
Объяснение:
- Метод `sort()` по умолчанию сортирует элементы как строки, поэтому для чисел нужно указать функцию сравнения `(a, b) => a - b` для сортировки по возрастанию, или `(a, b) => b - a` для сортировки по убыванию.
---
2. Реализация сортировки слиянием (Merge Sort)
Алгоритм сортировки слиянием — это один из эффективных алгоритмов сортировки с временем выполнения O(N log N). Он работает по принципу "разделяй и властвуй".
🎯 Пример реализации сортировки слиянием
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Рекурсивно сортируем левую половину
  const right = mergeSort(arr.slice(mid)); // Рекурсивно сортируем правую половину

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const array = [5, 2, 8, 1, 4, 7];
console.log(mergeSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Алгоритм делит массив пополам, сортирует каждую половину рекурсивно и затем сливает отсортированные части.
- Сложность: O(N log N).
---
3. Реализация сортировки пузырьком (Bubble Sort)
Сортировка пузырьком — это простой, но медленный алгоритм сортировки с временем выполнения O(N^2). Он повторно проходит через массив, сравнивает соседние элементы и меняет их местами, если они в неправильном порядке.
🎯 Пример реализации сортировки пузырьком
```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Меняем местами
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Уменьшаем размер оставшегося массива для оптимизации
  } while (swapped);

  return arr;
}

const array = [5, 2, 8, 1, 4, 7];
console.log(bubbleSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Сортировка пузырьком последовательно сравнивает и меняет местами соседние элементы, пока весь массив не будет отсортирован.
---
4. Реализация сортировки вставками (Insertion Sort)
Сортировка вставками — это ещё один алгоритм сортировки с временем выполнения O(N^2). Он работает, проходя по массиву и вставляя каждый элемент в отсортированную часть массива.
🎯 Пример реализации сортировки вставками
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

const array = [5, 2, 8, 1, 4, 7];
console.log(insertionSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Алгоритм вставки последовательно вставляет элементы в отсортированную часть массива.
- Это эффективный алгоритм для сортировки маленьких массивов.
---
5. Реализация сортировки быстрой сортировки (Quick Sort)
Быстрая сортировка — это ещё один эффективный алгоритм сортировки с временем выполнения O(N log N) в среднем, но O(N^2) в худшем случае.
🎯 Пример реализации быстрой сортировки
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [5, 2, 8, 1, 4, 7];
console.log(quickSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Быстрая сортировка выбирает опорный элемент (pivot) и разделяет массив на два подмассива: один с элементами меньше опорного и другой с элементами больше.
- Затем рекурсивно сортирует эти подмассивы.
Вывод
Вот несколько популярных алгоритмов сортировки в JavaScript:
1. Метод `sort()` — быстрое решение для сортировки с использованием встроенных методов.
2. Сортировка слиянием — эффективный алгоритм с O(N log N).
3. Сортировка пузырьком — медленный алгоритм с O(N^2), но легко реализуемый.
4. Сортировка вставками — подходит для малых массивов с O(N^2).
5. Быстрая сортировка — эффективный алгоритм с O(N log N), но в худшем случае может быть O(N^2).
---------------------
⋙ ❍ Сортировка массива с объектами по их полям (по алфавиту и по возрастанию):
---
Сортировка массива объектов по их полям — довольно часто встречающаяся задача.
1. Сортировка массива объектов по алфавиту
⌛ Задача: Сортировать массив объектов по строковому полю (например, по имени) в алфавитном порядке.
Пример данных:
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];
```
🎯 Решение (по алфавиту по имени):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по имени (алфавитный порядок)
users.sort((a, b) => {
  if (a.name < b.name) return -1; // a приходит раньше
  if (a.name > b.name) return 1;  // b приходит раньше
  return 0; // одинаковые
});

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 }
// ]
```
Объяснение:
- Мы используем метод `sort()`, который принимает функцию сравнения. Внутри функции мы сравниваем строки `a.name` и `b.name`.
- Если `a.name` меньше `b.name`, возвращаем `-1`, что означает, что `a` должно идти раньше.
- Если наоборот, возвращаем `1`, что означает, что `b` должно идти раньше.
- Если они равны, возвращаем `0`.
---
2. Сортировка массива объектов по числовому полю (по возрастанию)
⌛ Задача: Сортировать массив объектов по числовому полю (например, по возрасту) в порядке возрастания.
🎯 Решение (по возрастанию по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по возрасту (по возрастанию)
users.sort((a, b) => a.age - b.age);

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 3, name: "Charlie", age: 28 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- В данном случае мы просто вычитаем `a.age` из `b.age`. Если результат отрицателен, значит, `a` должно идти раньше.
- Этот способ работает для числовых данных (в том числе для возраста).
---
3. Сортировка по убыванию (по числовому полю)
⌛ Задача: Сортировать массив объектов по числовому полю (например, по возрасту) в порядке убывания.
🎯 Решение (по убыванию по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по возрасту (по убыванию)
users.sort((a, b) => b.age - a.age);

console.log(users);
// Результат: [
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 },
//   { id: 1, name: "Alice", age: 25 }
// ]
```
Объяснение:
- Для сортировки по убыванию достаточно изменить порядок вычитания: `b.age - a.age`.
---
4. Сортировка по алфавиту (по строковому полю с учётом регистра)
⌛ Задача: Сортировать массив объектов по строковому полю с учётом регистра.
🎯 Решение (по имени с учётом регистра):
```javascript
const users = [
  { id: 1, name: "alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "charlie", age: 28 },
];

// Сортируем по имени с учётом регистра
users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);
// Результат: [
//   { id: 1, name: "alice", age: 25 },
//   { id: 3, name: "charlie", age: 28 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- `localeCompare()` сравнивает строки с учётом локали и возвращает результат с учётом регистра (в алфавитном порядке).
- Если `a.name` меньше, `localeCompare()` возвращает отрицательное значение, если больше — положительное, если одинаково — 0.
---
5. Сортировка по числовому полю с несколькими критериями
⌛ Задача: Сортировать массив объектов сначала по одному полю (по имени), а затем по другому (по возрасту).
🎯 Решение (сначала по имени, затем по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Alice", age: 28 },
  { id: 4, name: "Charlie", age: 22 },
];

// Сортируем сначала по имени, потом по возрасту
users.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age; // Если имена одинаковые, сортируем по возрасту
  }
  return a.name.localeCompare(b.name); // Сортируем по имени
});

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 3, name: "Alice", age: 28 },
//   { id: 4, name: "Charlie", age: 22 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- Сначала сортируем объекты по полю `name` с использованием `localeCompare`.
- Если имена одинаковые, тогда применяем сортировку по возрасту (`age`).
Итог
Основные моменты:
- Для строк используем `localeCompare` для корректной сортировки.
- Для числовых полей достаточно просто вычитать одно значение из другого.
- Для сортировки по нескольким полям можно комбинировать сравнения.
---------------------
⋙ ❍ Задания со строками + Примитивы:
---
1. Проверка на пустую строку
⌛ Задача: Напишите функцию, которая проверяет, является ли строка пустой. Строка считается пустой, если она состоит только из пробелов.
🎯 Решение:
```javascript
function isEmpty(str) {
  return str.trim() === "";
}

console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // true
console.log(isEmpty("Hello")); // false
```
Объяснение: Используем `trim()` для удаления пробелов с начала и конца строки. Если результат пустой, значит строка пуста.
---
2. Поворот строки
⌛ Задача: Напишите функцию, которая принимает строку и возвращает её перевёрнутую версию.
🎯 Решение:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение: Мы разбиваем строку на массив символов с помощью `split("")`, затем переворачиваем его методом `reverse()`, и снова соединяем с помощью `join("")`.
---
3. Сравнение строк без учёта регистра
⌛ Задача: Напишите функцию, которая сравнивает две строки без учёта регистра.
🎯 Решение:
```javascript
function compareStringsIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareStringsIgnoreCase("hello", "HELLO")); // true
```
Объяснение: Метод `toLowerCase()` приводит обе строки к нижнему регистру перед сравнением.
---
4. Преобразование строки в массив
⌛ Задача: Напишите функцию, которая принимает строку и возвращает массив её символов.
🎯 Решение:
```javascript
function stringToArray(str) {
  return [...str];
}

console.log(stringToArray("hello")); // ["h", "e", "l", "l", "o"]
```
Объяснение: Используем оператор расширения (`...`), чтобы преобразовать строку в массив символов.
---
5. Удаление пробелов в начале и в конце строки
⌛ Задача: Напишите функцию, которая удаляет пробелы в начале и в конце строки.
🎯 Решение:
```javascript
function trimString(str) {
  return str.trim();
}

console.log(trimString("  Hello World  ")); // "Hello World"
```
Объяснение: Метод `trim()` удаляет все пробелы с начала и конца строки.
---
6. Подсчёт количества вхождений подстроки в строку
⌛ Задача: Напишите функцию, которая считает количество вхождений подстроки в строку.
🎯 Решение:
```javascript
function countSubstring(str, substring) {
  return (str.match(new RegExp(substring, "g")) || []).length;
}

console.log(countSubstring("Hello world, hello!", "hello")); // 2
```
Объяснение: Мы используем регулярное выражение с флагом `g`, чтобы найти все вхождения подстроки в строке.
---
7. Преобразование строки в число
⌛ Задача: Напишите функцию, которая принимает строку и пытается преобразовать её в число.
🎯 Решение:
```javascript
function stringToNumber(str) {
  const number = Number(str);
  return isNaN(number) ? null : number;
}

console.log(stringToNumber("123")); // 123
console.log(stringToNumber("abc")); // null
```
Объяснение: Мы используем функцию `Number()`, чтобы преобразовать строку в число. Если это невозможно, возвращаем `null`.
---
8. Проверка строки на наличие чисел
⌛ Задача: Напишите функцию, которая проверяет, содержит ли строка хотя бы одно число.
🎯 Решение:
```javascript
function containsNumber(str) {
  return /\d/.test(str);
}

console.log(containsNumber("hello123")); // true
console.log(containsNumber("hello")); // false
```
Объяснение: Используем регулярное выражение `\d`, которое проверяет наличие хотя бы одной цифры в строке.
---
9. Преобразование строки в заглавные буквы
⌛ Задача: Напишите функцию, которая преобразует все буквы в строке в верхний регистр.
🎯 Решение:
```javascript
function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(toUpperCase("hello")); // "HELLO"
```
Объяснение: Метод `toUpperCase()` преобразует все символы строки в верхний регистр.
---
10. Преобразование строки в строчные буквы
⌛ Задача: Напишите функцию, которая преобразует все буквы в строке в нижний регистр.
🎯 Решение:
```javascript
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO")); // "hello"
```
Объяснение: Метод `toLowerCase()` преобразует все символы строки в нижний регистр.
---
11. Форматирование числа с разделением на группы по 3 знака
⌛ Задача: Напишите функцию, которая принимает число и форматирует его с разделением на группы по 3 знака.
🎯 Решение:
```javascript
function formatNumber(number) {
  return number.toLocaleString();
}

console.log(formatNumber(123456789)); // "123,456,789"
```
Объяснение: Используем метод `toLocaleString()`, который автоматически добавляет разделители тысяч в зависимости от локали.
---
12. Инвертирование регистра букв в строке
⌛ Задача: Напишите функцию, которая инвертирует регистр каждой буквы в строке (маленькая → большая, большая → маленькая).
🎯 Решение:
```javascript
function invertCase(str) {
  return str.split("").map((char) =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  ).join("");
}

console.log(invertCase("HeLLo WoRLd")); // "hEllO wOrlD"
```
Объяснение: Мы разделяем строку на массив символов, меняем регистр каждого символа и снова собираем строку.
---
13. Удаление всех пробелов из строки
⌛ Задача: Напишите функцию, которая удаляет все пробелы из строки.
🎯 Решение:
```javascript
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
console.log(removeSpaces("  Hello   World  ")); // "HelloWorld"
```
Объяснение: Используем регулярное выражение `\s+`, которое удаляет все пробелы и символы пробела (включая табуляцию, переводы строки).
---
14. Разделение строки на слова
⌛ Задача: Напишите функцию, которая разделяет строку на слова, используя пробел как разделитель.
🎯 Решение:
```javascript
function splitIntoWords(str) {
  return str.split(" ");
}

console.log(splitIntoWords("Hello world! How are you?")); // ["Hello", "world!", "How", "are", "you?"]
```
Объяснение: Метод `split(" ")` разбивает строку на массив по пробелам.
---
15. Проверка строки на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом (то есть она читается одинаково слева направо и справа налево).
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, "").toLowerCase(); // Убираем все не-буквенные символы и приводим к нижнему регистру
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```
Объяснение: Мы очищаем строку от всех ненужных символов и проверяем, равна ли строка своему перевёрнутому варианту.
---
16. Подсчёт количества уникальных символов в строке
⌛ Задача: Напишите функцию, которая подсчитывает количество уникальных символов в строке.
🎯 Решение:
```javascript
function countUniqueChars(str) {
  const uniqueChars = new Set(str);
  return uniqueChars.size;
}

console.log(countUniqueChars("hello")); // 4
```
Объяснение: Мы используем объект `Set`, который хранит только уникальные элементы, и возвращаем количество уникальных символов.
---
17. Преобразование строки в формат с заглавными буквами для каждого слова
⌛ Задача: Напишите функцию, которая преобразует строку в формат, где каждое слово начинается с заглавной буквы.
🎯 Решение:
```javascript
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"
```
Объяснение: Мы разделяем строку на слова, приводим первую букву каждого слова к верхнему регистру и снова собираем строку.
---------------------
⋙ ❍ Задания с Примитивами:
---
1. Проверка типа данных с использованием `typeof`
⌛ Задача: Напишите функцию, которая принимает значение и возвращает его тип с использованием оператора `typeof`.
🎯 Решение:
```javascript
function checkType(value) {
  return typeof value;
}

console.log(checkType(123)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(true)); // "boolean"
console.log(checkType({})); // "object"
console.log(checkType(undefined)); // "undefined"
```
Объяснение: Оператор `typeof` возвращает строку, указывающую тип переданного значения.
---
2. Преобразование строки в число
⌛ Задача: Напишите функцию, которая принимает строку и преобразует её в число.
🎯 Решение:
```javascript
function stringToNumber(str) {
  return Number(str);
}

console.log(stringToNumber("123")); // 123
console.log(stringToNumber("abc")); // NaN
```
Объяснение: Используем `Number()` для преобразования строки в число. Если строка не может быть преобразована, возвращается `NaN`.
---
3. Проверка на NaN с использованием `isNaN`
⌛ Задача: Напишите функцию, которая проверяет, является ли переданное значение `NaN`.
🎯 Решение:
```javascript
function isNotANumber(value) {
  return isNaN(value);
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(123)); // false
```
Объяснение: Функция `isNaN()` проверяет, является ли значение `NaN`.
---
4. Округление числа до ближайшего целого
⌛ Задача: Напишите функцию, которая округляет число до ближайшего целого.
🎯 Решение:
```javascript
function roundNumber(num) {
  return Math.round(num);
}

console.log(roundNumber(4.5)); // 5
console.log(roundNumber(4.4)); // 4
```
Объяснение: Используем `Math.round()`, который округляет число до ближайшего целого.
---
5. Округление числа вверх и вниз
⌛ Задача: Напишите функцию, которая округляет число вверх или вниз, в зависимости от значения.
🎯 Решение:
```javascript
function ceilAndFloor(num) {
  return {
    ceil: Math.ceil(num),
    floor: Math.floor(num),
  };
}

console.log(ceilAndFloor(4.3)); // { ceil: 5, floor: 4 }
```
Объяснение: `Math.ceil()` округляет число в большую сторону, а `Math.floor()` — в меньшую.
---
6. Преобразование числа в строку
⌛ Задача: Напишите функцию, которая преобразует число в строку.
🎯 Решение:
```javascript
function numberToString(num) {
  return num.toString();
}

console.log(numberToString(123)); // "123"
```
Объяснение: Используем метод `toString()` для преобразования числа в строку.
---
7. Сравнение двух чисел
⌛ Задача: Напишите функцию, которая сравнивает два числа и возвращает большее из них.
🎯 Решение:
```javascript
function compareNumbers(a, b) {
  return a > b ? a : b;
}

console.log(compareNumbers(5, 10)); // 10
console.log(compareNumbers(15, 10)); // 15
```
Объяснение: Мы используем тернарный оператор, чтобы вернуть большее из двух чисел.
---
8. Преобразование числа в строку с добавлением ведущих нулей
⌛ Задача: Напишите функцию, которая преобразует число в строку и добавляет ведущие нули, если длина строки меньше 4 символов.
🎯 Решение:
```javascript
function addLeadingZeros(num) {
  return num.toString().padStart(4, "0");
}

console.log(addLeadingZeros(5)); // "0005"
console.log(addLeadingZeros(123)); // "0123"
```
Объяснение: Метод `padStart()` добавляет символы в начало строки до достижения необходимой длины.
---
9. Преобразование булевого значения в строку
⌛ Задача: Напишите функцию, которая преобразует булевое значение в строку.
🎯 Решение:
```javascript
function booleanToString(bool) {
  return bool.toString();
}

console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"
```
Объяснение: Используем метод `toString()` для преобразования булевого значения в строку.
---
10. Получение абсолютного значения числа
⌛ Задача: Напишите функцию, которая возвращает абсолютное значение числа.
🎯 Решение:
```javascript
function getAbsoluteValue(num) {
  return Math.abs(num);
}

console.log(getAbsoluteValue(-5)); // 5
console.log(getAbsoluteValue(5)); // 5
```
Объяснение: Используем `Math.abs()` для получения абсолютного значения числа.
---
11. Получение случайного числа
⌛ Задача: Напишите функцию, которая генерирует случайное число от 1 до 10.
🎯 Решение:
```javascript
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber()); // Рандомное число от 1 до 10
```
Объяснение: `Math.random()` генерирует случайное число от 0 до 1. Умножаем его на 10 и округляем с помощью `Math.floor()`.
---
12. Преобразование строки в массив
⌛ Задача: Напишите функцию, которая разделяет строку на массив по пробелам.
🎯 Решение:
```javascript
function stringToArray(str) {
  return str.split(" ");
}

console.log(stringToArray("Hello World")); // ["Hello", "World"]
```
Объяснение: Метод `split(" ")` разделяет строку на массив по пробелам.
---
13. Проверка строки на содержание подстроки
⌛ Задача: Напишите функцию, которая проверяет, содержится ли подстрока в строке.
🎯 Решение:
```javascript
function containsSubstring(str, substring) {
  return str.includes(substring);
}

console.log(containsSubstring("Hello World", "World")); // true
console.log(containsSubstring("Hello World", "Java")); // false
```
Объяснение: Метод `includes()` проверяет наличие подстроки в строке и возвращает `true` или `false`.
---
14. Получение символа по индексу
⌛ Задача: Напишите функцию, которая возвращает символ строки по указанному индексу.
🎯 Решение:
```javascript
function getCharacterAt(str, index) {
  return str.charAt(index);
}

console.log(getCharacterAt("Hello", 1)); // "e"
```
Объяснение: Метод `charAt()` возвращает символ по указанному индексу.
---
15. Подсчёт вхождений символа в строку
⌛ Задача: Напишите функцию, которая подсчитывает количество вхождений символа в строку.
🎯 Решение:
```javascript
function countCharInString(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharInString("hello", "l")); // 2
```
Объяснение: Мы разбиваем строку по символу и считаем количество частей, вычитая 1.
---
16. Преобразование строки в массив символов
⌛ Задача: Напишите функцию, которая преобразует строку в массив символов.
🎯 Решение:
```javascript
function stringToCharArray(str) {
  return [...str];
}

console.log(stringToCharArray("Hello")); // ["H", "e", "l", "l", "o"]
```
Объяснение: Мы используем оператор расширения (`...`), чтобы преобразовать строку в массив символов.
---
17. Проверка строки на полиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```
Объяснение: Мы очищаем строку от всех не-буквенных символов, приводим её к нижнему регистру и проверяем, равна ли она своему перевёрнутому варианту.
---------------------
⋙ ❍ Суммы элементов массива + array flat:
---
Давайте рассмотрим задачи на суммирование элементов массива и использование метода `flat()` в JavaScript.
1. Суммирование элементов массива
⌛ Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
🎯 Решение:
1.1. Использование цикла `for`
```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение: Мы используем цикл `for`, чтобы пройти по всем элементам массива и сложить их.
1.2. Использование `reduce()`
```javascript
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение: Метод `reduce()` используется для аккумуляции значений массива. Мы начинаем с 0 и на каждом шаге прибавляем текущий элемент.
---
2. Применение метода `flat()` для массивов
Метод `flat()` используется для выравнивания вложенных массивов на определённую глубину.
⌛ Задача: Напишите функцию, которая выравнивает массив и возвращает его плоскую версию, а затем возвращает сумму всех элементов.
🎯 Решение:
2.1. Пример с одноуровневым массивом
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];

function sumFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до максимальной глубины
  return flatArray.reduce((sum, current) => sum + current, 0);
}

console.log(sumFlattenedArray(nestedArray)); // 21
```
Объяснение:
- Метод `flat()` с параметром `Infinity` позволяет выровнять массив до самого глубокого уровня вложенности.
- Затем с помощью `reduce()` считаем сумму всех элементов массива.
2.2. Пример с массивом, содержащим несколько уровней вложенности
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];

function sumFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до самого глубокого уровня
  return flatArray.reduce((sum, current) => sum + current, 0);
}

console.log(sumFlattenedArray(nestedArray)); // 36
```
Объяснение:
- Метод `flat(Infinity)` используется для того, чтобы полностью "разгладить" (выравнять) все уровни вложенности массива.
---
3. Пример с массивом строк и чисел (смешанный тип)
⌛ Задача: Напишите функцию, которая сначала выравнивает массив, затем суммирует только числа, игнорируя строки.
🎯 Решение:
```javascript
const mixedArray = [1, 'two', [3, 'four'], [5, 6]];

function sumNumbersInFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до максимальной глубины
  return flatArray.reduce((sum, current) => {
    return typeof current === 'number' ? sum + current : sum;
  }, 0);
}

console.log(sumNumbersInFlattenedArray(mixedArray)); // 15
```
Объяснение:
- Сначала выравниваем массив с помощью `flat(Infinity)`.
- В `reduce()` проверяем, является ли элемент числом, и только в этом случае добавляем его к сумме.
---
4. Суммирование элементов массива с фильтрацией (смешанный тип данных)
⌛ Задача: Напишите функцию, которая фильтрует только числовые элементы в массиве и находит их сумму.
🎯 Решение:
```javascript
const mixedArray = [1, 'hello', 3, 'world', 5, 7];

function sumNumbers(arr) {
  return arr.filter(item => typeof item === 'number').reduce((sum, current) => sum + current, 0);
}

console.log(sumNumbers(mixedArray)); // 16
```
Объяснение:
- С помощью `filter()` мы отбираем только числовые элементы массива.
- Затем с помощью `reduce()` вычисляем их сумму.
Резюме
1. Метод `reduce()`: Это основной метод для суммирования элементов массива.
2. Метод `flat()`: Используется для "выравнивания" вложенных массивов. Параметр `Infinity` позволяет выровнять массив на любой глубине.
3. Фильтрация данных: Можно отфильтровывать данные по типу (например, оставлять только числа) перед суммированием.
---------------------
⋙ ❍ Задача на Timeout внутри цикла:
---
⌛ Задача: Напишите функцию, которая внутри цикла выполняет асинхронную операцию с использованием `setTimeout` и выводит элементы массива с задержкой в 1 секунду для каждого элемента.
Усложнение: Важно, чтобы вывод элементов был выполнен с правильной задержкой, а не сразу.
🎯 Решение с использованием `setTimeout` внутри цикла
Проблема: Если использовать `setTimeout` внутри цикла без учёта асинхронности, все таймеры будут запускаться сразу, а не по очереди. Это происходит из-за того, что цикл не ждёт завершения каждого таймера.
🎯 Решение:
1. Простой вариант с использованием `let`:
```javascript
function printWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(arr[i]);
    }, 1000 * i); // Задержка увеличивается на i секунд
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Объяснение:
- Используем `let` в цикле, чтобы `i` была "замкнута" в каждой итерации, что позволяет корректно увеличивать задержку для каждого элемента.
- `setTimeout()` выполняется с задержкой, которая зависит от индекса элемента массива (`1000 * i`).
🎯 Решение с использованием `var` (неправильный вариант)
```javascript
function printWithDelay(arr) {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(arr[i]);
    }, 1000 * i); // Это неправильно, так как i будет иметь одно значение по завершению цикла
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Почему это не работает:
- При использовании `var` переменная `i` будет иметь одно значение после завершения цикла (после того как цикл завершится, `i` будет равен `arr.length`), и `setTimeout` для всех элементов массива будет выполняться с одинаковой задержкой.
---
2. 🎯 Решение с использованием `async/await` и `Promise`:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    await delay(1000); // Ожидаем 1 секунду
    console.log(arr[i]);
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Объяснение:
- Функция `delay` возвращает `Promise`, который выполняется через заданное количество миллисекунд.
- В цикле мы используем `await` для того, чтобы при каждой итерации цикл ждал завершения `setTimeout` перед тем, как перейти к следующей итерации.
- Этот метод позволяет синхронизировать асинхронные операции в цикле.
Пояснение:
- Использование `let` в цикле: В отличие от `var`, `let` имеет блочную область видимости, что позволяет каждому таймеру быть независимым и корректно работать с задержкой.
- Использование `async/await`: Это решение позволяет синхронизировать асинхронные операции в цикле, что удобно и читабельно. Это лучший вариант для асинхронных задач, когда необходимо делать паузы между итерациями.
Резюме:
1. `setTimeout` внутри цикла с `let`: Используйте `let`, чтобы корректно привязать каждую итерацию цикла к своему времени выполнения.
2. Использование `async/await`: Это более современный и удобный подход для синхронизации асинхронных операций внутри цикла.
---------------------
⋙ ❍ Задача на асинхронность + eventLoop:
---
1. Вызов асинхронной функции с использованием `setTimeout`
⌛ Задача: Напишите функцию, которая использует `setTimeout` для задержки выполнения кода на 2 секунды.
🎯 Решение:
```javascript
function delayedLog() {
  setTimeout(() => {
    console.log("Hello after 2 seconds");
  }, 2000);
}

delayedLog();
```
Объяснение: `setTimeout` вызывает переданную функцию через заданную задержку (в данном случае 2000 мс).
---
2. Создание промиса и использование `.then()`
⌛ Задача: Напишите функцию, которая возвращает промис, который резолвится через 3 секунды.
🎯 Решение:
```javascript
function createPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3 seconds");
    }, 3000);
  });
}

createPromise().then((message) => {
  console.log(message);
});
```
Объяснение: Промис создается с использованием конструктора `new Promise`, и в нем используется `setTimeout` для асинхронного выполнения через 3 секунды.
---
3. Использование `async`/`await`
⌛ Задача: Используя `async`/`await`, напишите функцию, которая асинхронно получает данные и выводит их через 2 секунды.
🎯 Решение:
```javascript
async function fetchData() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 2000)
  );
  console.log(data);
}

fetchData();
```
Объяснение: `await` используется для ожидания завершения промиса перед продолжением выполнения функции.
---
4. Понимание работы с несколькими промисами
⌛ Задача: Напишите функцию, которая запускает два промиса одновременно, и когда оба из них завершатся, выводит результат.
🎯 Решение:
```javascript
function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve("Data 1"), 2000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve("Data 2"), 3000));
}

Promise.all([fetchData1(), fetchData2()])
  .then(([data1, data2]) => {
    console.log(data1, data2); // Data 1 Data 2
  });
```
Объяснение: `Promise.all` ждёт, пока все промисы в массиве не завершатся, после чего возвращает результат.
---
5. Преобразование колбэков в промисы
⌛ Задача: Напишите функцию, которая использует колбэк с `setTimeout`, но преобразует его в промис.
🎯 Решение:
```javascript
function timeoutPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

timeoutPromise(2000).then(() => {
  console.log("2 seconds passed");
});
```
Объяснение: Используем `new Promise`, чтобы обернуть колбэк в промис и использовать его с `.then()`.
---
6. Понимание Event Loop и очереди микрозадач
⌛ Задача: Напишите код, который покажет, что микрозадачи выполняются перед макрозадачами в JavaScript (используйте `Promise` и `setTimeout`).
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
```
Объяснение: Код выводит:
1. "Start"
2. "End"
3. "Inside Promise" (микрозадача)
4. "Inside setTimeout" (макрозадача)
Микрозадачи (например, промисы) выполняются перед макрозадачами (например, `setTimeout`), даже если задержка `setTimeout` равна 0.
---
7. Понимание асинхронной очереди
⌛ Задача: Напишите код, который демонстрирует порядок выполнения задач, когда используются несколько промисов и таймеров.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");
```
Объяснение: Порядок вывода будет следующим:
1. "Start"
2. "End"
3. "Promise 1"
4. "Promise 2"
5. "Timeout 1"
6. "Timeout 2"
---
8. Использование `setInterval` для асинхронных задач
⌛ Задача: Напишите код, который выводит сообщение каждую секунду и прекращает вывод через 5 секунд.
🎯 Решение:
```javascript
const interval = setInterval(() => {
  console.log("Hello every second");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped");
}, 5000);
```
Объяснение: Используем `setInterval` для повторяющихся задач и `clearInterval` для их остановки.
---
9. Реализация асинхронной очереди задач
⌛ Задача: Напишите функцию, которая выполняет задачи из очереди поочередно, где каждая задача возвращает промис.
🎯 Решение:
```javascript
async function processQueue(queue) {
  for (const task of queue) {
    await task();
  }
}

const queue = [
  () => new Promise(resolve => setTimeout(() => { console.log("Task 1"); resolve(); }, 1000)),
  () => new Promise(resolve => setTimeout(() => { console.log("Task 2"); resolve(); }, 1000)),
];

processQueue(queue);
```
Объяснение: В этой задаче мы выполняем задачи последовательно, ожидая завершения каждой из них перед выполнением следующей.
---
10. Асинхронная функция с исключениями
⌛ Задача: Напишите асинхронную функцию, которая использует `try/catch` для обработки ошибок.
🎯 Решение:
```javascript
async function asyncFunction() {
  try {
    const result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (error) {
    console.log(error); // "Something went wrong"
  }
}

asyncFunction();
```
Объяснение: Используем `try/catch` для обработки ошибок в асинхронной функции с `await`.
---
11. Параллельное выполнение нескольких асинхронных задач
⌛ Задача: Напишите код, который запускает несколько асинхронных операций параллельно и выводит результат после завершения всех.
🎯 Решение:
```javascript
async function fetchData() {
  const data1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
  const data2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

  const results = await Promise.all([data1, data2]);
  console.log(results); // ["Data 1", "Data 2"]
}

fetchData();
```
Объяснение: Мы используем `Promise.all()` для параллельного выполнения нескольких промисов.
---
12. Использование `setImmediate`
⌛ Задача: Напишите код, который выполняет задачу немедленно, но в следующем цикле Event Loop.
🎯 Решение:
```javascript
console.log("Start");

setImmediate(() => {
  console.log("Executed immediately");
});

console.log("End");
```
Объяснение: `setImmediate` используется для выполнения задачи в конце текущего цикла событий.
---
13. Задержка выполнения с использованием `setTimeout`
⌛ Задача: Напишите код, который задерживает выполнение функции на 3 секунды.
🎯 Решение:
```javascript
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
```
Объяснение: Используем `setTimeout` для задержки выполнения кода.
---
14. Промис с таймаутом
⌛ Задача: Напишите функцию, которая возвращает промис, но с таймаутом на 3 секунды.
🎯 Решение:
```javascript
function timeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timed out");
    }, 3000);
  });
}

timeoutPromise().catch((err) => console.log(err)); // Timed out
```
Объяснение: Мы создаем промис, который отклоняется через 3 секунды.
---
15. Использование микрозадач с `Promise.resolve()`
⌛ Задача: Напишите код, который сначала выводит сообщение синхронно, а затем использует микрозадачу.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Inside promise");
});

console.log("End");
```
Объяснение: Микрозадачи выполняются после завершения текущего синхронного кода, но перед макрозадачами (например, `setTimeout`).
---
16. Очередность выполнения с использованием `setTimeout` и промисов
⌛ Задача: Напишите код, который сначала выполняет промис, а затем `setTimeout`.
🎯 Решение:
```javascript
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("Timeout executed");
}, 0);
```
Объяснение: Микрозадачи (промисы) выполняются перед макрозадачами (`setTimeout`).
---
17. Вложенные промисы с асинхронной обработкой
⌛ Задача: Напишите код, который сначала ожидает один промис, а затем запускает второй после его завершения.
🎯 Решение:
```javascript
async function asyncFunction() {
  const firstResult = await new Promise((resolve) => setTimeout(() => resolve("First task"), 1000));
  console.log(firstResult); // First task

  const secondResult = await new Promise((resolve) => setTimeout(() => resolve("Second task"), 2000));
  console.log(secondResult); // Second task
}

asyncFunction();
```
Объяснение: Мы используем `await` для ожидания каждого промиса перед запуском следующего.
---------------------
⋙ ❍ Задача на eventLoop:
---
1. Различие между `setTimeout` и `setImmediate`
⌛ Задача: Напишите код, который использует и `setTimeout()`, и `setImmediate()`, и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("End");
```
Объяснение:
- `setTimeout()` с задержкой 0 миллисекунд будет выполнен в макрозадаче после завершения текущего кода.
- `setImmediate()` будет выполнен в следующем цикле Event Loop, но после всех микрозадач.
- Порядок вывода будет:
  1. "Start"
  2. "End"
  3. "setImmediate"
  4. "setTimeout"
---
2. Использование `Promise.resolve()` для микрозадач
⌛ Задача: Напишите код, который демонстрирует выполнение промиса как микрозадачи.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```
Объяснение:
- Промисы (микрозадачи) выполняются после выполнения синхронного кода и до макрозадач (таких как `setTimeout`).
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise resolved"
---
3. Смешивание `setTimeout()` и `Promise`
⌛ Задача: Напишите код, в котором сначала выполняется промис, а затем таймер с `setTimeout()`.
🎯 Решение:
```javascript
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);
```
Объяснение:
- Промисы всегда выполняются перед макрозадачами (`setTimeout()`).
- Порядок вывода:
  1. "Promise resolved"
  2. "setTimeout executed"
---
4. Задержка с `setTimeout()` внутри цикла
⌛ Задача: Напишите цикл, который выводит числа от 1 до 5, но с задержкой в 1 секунду между каждым числом.
🎯 Решение:
```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
```
Объяснение:
- Используем `let` для корректной работы замыкания в цикле. Переменная `i` будет иметь уникальное значение для каждого вызова `setTimeout`.
---
5. Что будет выведено в консоль?
⌛ Задача: Напишите код, который использует микрозадачи и макрозадачи, и объясните, что будет выведено в консоль.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise" (микрозадача)
  4. "setTimeout" (макрозадача)
---
6. Как вывести все элементы массива с задержкой?
⌛ Задача: Напишите функцию, которая выводит каждый элемент массива с задержкой 1 секунда.
🎯 Решение:
```javascript
const array = [1, 2, 3, 4, 5];

function printArrayWithDelay(arr) {
  arr.forEach((item, index) => {
    setTimeout(() => {
      console.log(item);
    }, 1000 * index);
  });
}

printArrayWithDelay(array);
```
Объяснение:
- Каждый вызов `setTimeout` имеет уникальную задержку, зависящую от индекса элемента.
---
7. Вложенные промисы и их порядок выполнения
⌛ Задача: Напишите код с вложенными промисами и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("First Promise");
  return Promise.resolve();
}).then(() => {
  console.log("Second Promise");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "First Promise"
  4. "Second Promise"
Промисы всегда выполняются после текущего синхронного кода.
---
8. Проверка работы с многократными таймерами
⌛ Задача: Напишите код с несколькими `setTimeout` и объясните их порядок выполнения.
🎯 Решение:
```javascript
setTimeout(() => {
  console.log("First Timeout");
}, 0);

setTimeout(() => {
  console.log("Second Timeout");
}, 0);

console.log("End");
```
Объяснение:
- Все макрозадачи с задержкой 0 выполняются после синхронного кода. Порядок вывода:
  1. "End"
  2. "First Timeout"
  3. "Second Timeout"
---
9. Асинхронная функция с несколькими `await`
⌛ Задача: Напишите асинхронную функцию с двумя `await` и объясните, как будет выполняться код.
🎯 Решение:
```javascript
async function asyncFunction() {
  console.log("Start");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 1 second");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 2 seconds");

  console.log("End");
}

asyncFunction();
```
Объяснение:
- Код выполнится последовательно, с задержкой в 1 секунду между каждым выводом.
---
10. Микрозадачи и макрозадачи в одном цикле
⌛ Задача: Напишите код, который смешивает микрозадачи и макрозадачи и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise 1" (микрозадача)
  4. "Promise 2" (микрозадача)
  5. "setTimeout" (макрозадача)
---
11. Работа с `setTimeout` и циклами
⌛ Задача: Напишите цикл с `setTimeout` и покажите, как работает асинхронность в этом случае.
🎯 Решение:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```
Объяснение:
- Используем `let` в цикле, чтобы сохранить правильное значение `i` на каждой итерации.
- В случае с `var`, цикл бы вывел 3 одинаковых значения.
---
12. Ожидание нескольких асинхронных операций
⌛ Задача: Напишите код, который ждёт завершения нескольких асинхронных операций с помощью `Promise.all`.
🎯 Решение:
```javascript
async function fetchData() {
  const promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["Data 1", "Data 2"]
}

fetchData();
```
Объяснение:
- `Promise.all()` ждёт выполнения всех промисов и возвращает массив их результатов.
---
13. Очередность выполнения асинхронных операций
⌛ Задача: Напишите код, который демонстрирует очередность выполнения нескольких асинхронных операций с разной задержкой.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("End");
```
Объяснение:
- Порядок выполнения:
  1. "Start"
  2. "End"
  3. "Promise 1" (микрозадача)
  4. "setTimeout 1"
  5. "setTimeout 2"
---
14. Важность использования `async/await` внутри цикла
⌛ Задача: Напишите асинхронную функцию с циклом, который использует `await`.
🎯 Решение:
```javascript
async function asyncLoop() {
  const values = [1, 2, 3];

  for (const value of values) {
    await new Promise(resolve => setTimeout(() => resolve(value), 1000));
    console.log(value);
  }
}

asyncLoop();
```

Объяснение:
- Используем `await` внутри цикла, чтобы каждая итерация ожидала завершения предыдущей.
---
15. Таймеры и промисы
⌛ Задача: Напишите код с использованием `setTimeout()` и `Promise`, и объясните, как они работают в Event Loop.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
Объяснение:
- "Start" и "End" выводятся синхронно.
- Промис (`Promise.resolve()`) будет выполнен первым, так как это микрозадача.
- `setTimeout` будет выполнен после всех микрозадач.
---
16. Использование `Promise.race()` для выбора первого завершившегося промиса
⌛ Задача: Напишите код, который использует `Promise.race()` и выбирает первый завершившийся промис.
🎯 Решение:
```javascript
const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Second'));

Promise.race([promise1, promise2]).then(result => {
  console.log(result); // 'Second'
});
```
Объяснение:
- `Promise.race()` возвращает первый завершившийся промис, независимо от того, успешно он завершился или нет.
---
17. Ожидание всех промисов с задержкой
⌛ Задача: Напишите функцию, которая ждёт завершения всех промисов с задержкой и выводит результат.
🎯 Решение:
```javascript
async function waitForAll() {
  const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
  const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'Second'));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["First", "Second"]
}

waitForAll();
```
Объяснение:
- Все промисы в `Promise.all()` будут ждать друг друга, и результат будет выведен только после завершения всех.
---------------------
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
Давайте рассмотрим, как отправлять HTTP-запросы на сервер с помощью двух популярных методов в JavaScript: `XMLHttpRequest` и `fetch`.
1. Использование `XMLHttpRequest`
`XMLHttpRequest` — это старый API для выполнения HTTP-запросов. Несмотря на то, что он всё ещё используется, рекомендуется использовать более современные решения, такие как `fetch`.
Пример с использованием `XMLHttpRequest`
⌛ Задача: Напишите запрос GET на сервер с использованием `XMLHttpRequest`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  const xhr = new XMLHttpRequest();  // Создание объекта XMLHttpRequest

  // Устанавливаем метод и URL
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  // Устанавливаем обработчик для события "load"
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка: ', xhr.status, xhr.statusText);
    }
  };

  // Устанавливаем обработчик для события ошибки
  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  // Отправляем запрос
  xhr.send();
}

getData();
```
Объяснение:
- `xhr.open(method, url, async)` — указывает метод (GET, POST и т.д.), URL и флаг асинхронности.
- `xhr.onload` — срабатывает, когда запрос успешно выполнен.
- `xhr.onerror` — срабатывает в случае ошибки.
- `xhr.send()` — отправляет запрос на сервер.
2. Использование `fetch`
`fetch` — это современный API для выполнения HTTP-запросов. Он предоставляет более удобный интерфейс и возвращает промис, что делает его гораздо более удобным для работы с асинхронным кодом.
Пример с использованием `fetch`
⌛ Задача: Напишите запрос GET на сервер с использованием `fetch`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Сетевой ответ не ок');
      }
      return response.json();  // Преобразуем тело ответа в JSON
    })
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

getData();
```
Объяснение:
- `fetch(url)` — отправляет запрос GET по указанному URL.
- `.then(response => response.json())` — преобразует ответ в формат JSON.
- `.catch(error => {...})` — обрабатывает любые ошибки, включая ошибки сети и ошибок обработки данных.
3. ⌛ Задача: Отправка данных на сервер (POST-запрос)
🎯 Решение:
Пример с `XMLHttpRequest`
```javascript
function sendData() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.setRequestHeader('Content-Type', 'application/json');  // Устанавливаем заголовок для отправки JSON

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка:', xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  xhr.send(JSON.stringify(data));  // Отправляем данные в формате JSON
}

sendData();
```
Объяснение:
- Мы используем метод `POST` и устанавливаем заголовок `Content-Type: application/json`, чтобы сервер знал, что мы отправляем данные в формате JSON.
- Данные отправляются с помощью `JSON.stringify()`.
Пример с `fetch`
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

sendData();
```
Объяснение:
- В `fetch` мы указываем объект с дополнительными параметрами (`method`, `headers`, `body`).
- Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
- `body: JSON.stringify(data)` преобразует объект в строку JSON перед отправкой.
4. Различие между `XMLHttpRequest` и `fetch`
- `XMLHttpRequest`: Более старый способ работы с HTTP-запросами. Использует события для обработки ответа. Требует более сложной работы с асинхронностью.
- `fetch`: Современный API, возвращающий промис, что упрощает работу с асинхронностью. Более гибкий и читаемый код, но не поддерживает старые браузеры (например, Internet Explorer).
Резюме:
1. `XMLHttpRequest` подходит для старого кода или проектов с совместимостью с устаревшими браузерами.
2. `fetch` является более современным и удобным способом работы с асинхронными запросами, использует промисы и проще для интеграции с современными фреймворками.
---------------------
⋙ ❍ ⌛ Задача: Написать свой Promise.all(); - Сумма элементов через замыкание:
---
Давайте напишем собственную реализацию `Promise.all()`, а также решим задачу на сумму элементов через замыкание.
1. Реализация `Promise.all()` с использованием замыкания
`Promise.all()` выполняет несколько промисов параллельно и возвращает один промис, который резолвится, когда все переданные промисы завершены успешно. Если один из промисов отклоняется, `Promise.all()` отклоняется.
Для реализации собственной версии `Promise.all()` мы можем использовать замыкание и отслеживание завершения всех промисов. Важно помнить, что результат должен быть в виде массива значений, полученных от всех промисов.
🎯 Решение:
```javascript
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];  // Массив для хранения результатов
    let completed = 0; // Счётчик завершённых промисов

    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      // Для каждого промиса обрабатываем его результат
      Promise.resolve(promise)
        .then(result => {
          results[index] = result; // Записываем результат по соответствующему индексу
          completed++;

          // Если все промисы завершены, резолвим основной промис
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error); // Если любой промис отклоняется, отклоняем основной промис
        });
    });
  });
}

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

myPromiseAll([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });
```
Объяснение:
- Мы создаём массив `results`, чтобы хранить результаты каждого промиса.
- Каждый промис обрабатывается через `Promise.resolve()`, чтобы гарантировать, что мы всегда получим промис, даже если передан обычный результат.
- Для каждого промиса добавляем его результат в массив `results`, используя индекс.
- Как только все промисы завершены (проверяем через `completed === promises.length`), вызываем `resolve()`.
---
2. ⌛ Задача: Сумма элементов через замыкание
В этой задаче мы создадим функцию, которая будет суммировать элементы массива, используя замыкание. Это будет полезно, чтобы понять, как работают замыкания при накоплении состояния.
🎯 Решение:
```javascript
function sumArray(arr) {
  let sum = 0;  // Переменная для хранения суммы

  // Возвращаем функцию, которая будет вызываться для каждого элемента массива
  return arr.reduce((acc, num) => {
    acc += num;  // Добавляем текущий элемент к накопленной сумме
    return acc;  // Возвращаем текущую сумму
  }, sum);
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Мы используем `reduce()` для итерации по массиву и накопления суммы.
- Замыкание создаётся за счет того, что в `reduce` функция накопления имеет доступ к внешней переменной `sum`, которая накапливает сумму.
- Функция возвращает результат, который является суммой всех элементов массива.
Итог
1. Реализация `myPromiseAll()`: Мы использовали замыкание для отслеживания всех завершённых промисов и их результатов, возвращая их в массив.
2. Суммирование через замыкание: Мы использовали замыкание в комбинации с методом `reduce()` для создания функции, которая суммирует элементы массива.
---------------------
⋙ ❍ Интеграция:
---
1. Интеграция с REST API (GET-запрос)
⌛ Задача: Напишите код для выполнения GET-запроса на внешний REST API и вывода данных в консоль.
🎯 Решение:
```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
}

fetchData();
```
Объяснение: Используется `fetch` для выполнения GET-запроса. Ответ преобразуется в JSON с помощью `.json()`, и затем выводится в консоль.
---
2. Интеграция с REST API (POST-запрос)
⌛ Задача: Напишите код для отправки данных с помощью POST-запроса на внешний API.
🎯 Решение:
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
}

sendData();
```
Объяснение: Мы отправляем JSON-данные в теле запроса с помощью метода `POST`. Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
---
3. Интеграция с Google Maps API
⌛ Задача: Интегрируйте Google Maps API для отображения карты на странице.
🎯 Решение:
1. Вставьте следующий код в HTML для подключения Google Maps API:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```
2. Реализуйте код для инициализации карты:
```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
```
Объяснение: Мы подключаем Google Maps API с помощью тега `<script>`, инициализируем карту в функции `initMap()`.
---
4. Интеграция с Firebase (аутентификация)
⌛ Задача: Реализуйте аутентификацию пользователя с помощью Firebase.
🎯 Решение:
1. Установите Firebase SDK:
```bash
npm install firebase
```
2. Реализуйте аутентификацию с использованием email и пароля:
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User signed in:', userCredential.user);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}
```
Объяснение: Мы интегрируем Firebase, инициализируем его с помощью конфигурации и используем метод `signInWithEmailAndPassword` для аутентификации пользователя.
---
5. Интеграция с Stripe (платежи)
⌛ Задача: Реализуйте кнопку для оплаты через Stripe.
🎯 Решение:
1. Установите Stripe SDK:
```bash
npm install @stripe/stripe-js
```
2. Используйте `Stripe.js` для создания платежной формы:
```javascript
import { loadStripe } from '@stripe/stripe-js';

let stripe;
let elements;

async function initializeStripe() {
  stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
  elements = stripe.elements();
  const cardElement = elements.create('card');
  cardElement.mount('#card-element');
}

async function handlePayment() {
  const { token, error } = await stripe.createToken(elements.getElement('card'));
  if (error) {
    console.error('Payment error:', error);
  } else {
    console.log('Payment token:', token);
  }
}
```
Объяснение: Мы используем Stripe для создания элемента карты и обработки платежа. Полученный токен можно отправить на сервер для завершения транзакции.
---
6. Интеграция с Twilio (отправка SMS)
⌛ Задача: Используйте Twilio API для отправки SMS.
🎯 Решение:
1. Установите Twilio SDK:
```bash
npm install twilio
```
2. Реализуйте код для отправки SMS:
```javascript
const twilio = require('twilio');

const client = new twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

function sendSMS(to, body) {
  client.messages.create({
    body: body,
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    to: to
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
}

sendSMS('+1234567890', 'Hello, this is a test message!');
```
Объяснение: Используем Twilio для отправки SMS через API. Для работы необходимо иметь аккаунт в Twilio и ключи доступа.
---
7. Интеграция с OpenWeather API (получение погоды)
⌛ Задача: Напишите код для получения информации о погоде через OpenWeather API.
🎯 Решение:
```javascript
function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

getWeather('London');
```
Объяснение: Мы используем OpenWeather API для получения данных о погоде для указанного города. Замените `YOUR_API_KEY` на ваш ключ API.
---
8. Интеграция с GraphQL API
⌛ Задача: Напишите запрос к GraphQL API.
🎯 Решение:
```javascript
const query = `
  query {
    posts {
      title
      body
    }
  }
`;

fetch('https://graphql.example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: query })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы выполняем запрос GraphQL с помощью `fetch`, отправляя строку запроса в теле POST-запроса.
---
9. Интеграция с Redux для состояния приложения
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
---
10. Интеграция с OAuth 2.0
⌛ Задача: Реализуйте аутентификацию через Google OAuth 2.0.
🎯 Решение:
1. Настройте OAuth 2.0 в консоли разработчика Google.
2. Используйте клиентскую библиотеку Google для аутентификации.
```html
<script src="https://apis.google.com/js/platform.js" async defer></script>

<button id="google-sign-in">Sign in with Google</button>

<script>
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
  }

  gapi.load('auth2', function() {
    gapi.auth2.init().then(function () {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.attachClickHandler('google-sign-in', {}, onSignIn);
    });
  });
</script>
```
Объяснение: В этом примере используется Google OAuth 2.0 для аутентификации через Google. После успешного входа пользовательские данные выводятся в консоль.
---
11. Интеграция с AWS S3 для загрузки файлов
⌛ Задача: Напишите код для загрузки файла в S3 с использованием AWS SDK.
🎯 Решение:
```javascript
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

function uploadFile(file) {
  const params = {
    Bucket: 'your-bucket-name',
    Key: file.name,
    Body: file,
    ACL: 'public-read'
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error('Error uploading file:', err);
    } else {
      console.log('File uploaded successfully:', data.Location);
    }
  });
}

uploadFile(fileInput.files[0]); // Example of uploading file from an input field
```
Объяснение: Этот код использует AWS SDK для загрузки файла в S3. Мы передаём файл и параметры для загрузки.
---
12. Интеграция с MongoDB (с помощью Mongoose)
⌛ Задача: Настройте MongoDB и Mongoose для взаимодействия с базой данных.
🎯 Решение:
```bash
npm install mongoose
```

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'John', age: 30 });
user.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error:', err));
```
Объяснение: Мы подключаем Mongoose к базе данных MongoDB и создаём модель для работы с коллекцией пользователей.
---
13. Интеграция с Firebase Realtime Database
⌛ Задача: Напишите код для взаимодействия с Firebase Realtime Database.
🎯 Решение:
```javascript
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeData() {
  database.ref('users/1').set({
    name: 'John',
    age: 30
  });
}

writeData();
```
Объяснение: Мы подключаем Firebase и используем его Realtime Database для записи данных.
---
14. Интеграция с Socket.io для WebSocket-соединений
⌛ Задача: Реализуйте простое соединение WebSocket с сервером через Socket.io.
🎯 Решение:
```bash
npm install socket.io-client
```

```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.emit('sendMessage', 'Hello, Server!');
```
Объяснение: Мы используем `socket.io-client` для установления WebSocket-соединения и обмена сообщениями между клиентом и сервером.
---
15. Интеграция с Contentful для управления контентом
⌛ Задача: Используйте Contentful API для получения данных контента.
🎯 Решение:
```javascript
const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

client.getEntries()
  .then(entries => console.log(entries.items))
  .catch(err => console.log(err));
```
Объяснение: Мы используем Contentful API для получения данных контента из CMS.
---
16. Интеграция с Algolia для поиска
⌛ Задача: Настройте поисковую систему с помощью Algolia.
🎯 Решение:
```bash
npm install algoliasearch
```

```javascript
import algoliasearch from 'algoliasearch';

const client = algoliasearch('YOUR_APPLICATION_ID', 'YOUR_SEARCH_ONLY_API_KEY');
const index = client.initIndex('your_index_name');

index.search('query')
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => console.log(err));
```
Объяснение: Используем Algolia для выполнения поиска по индексу.
---
17. Интеграция с HubSpot (CRM)
⌛ Задача: Интегрируйте HubSpot API для получения контактов.
🎯 Решение:
```javascript
const apiUrl = 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all';
const apiKey = 'YOUR_API_KEY';

fetch(`${apiUrl}?hapikey=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы используем HubSpot API для получения списка контактов из CRM.
---------------------
⋙ ❍ Уникальность всех символов в строке:
---
⌛ Задача заключается в проверке, содержит ли строка только уникальные символы, то есть, не повторяются ли символы в строке.
Мы можем решить эту задачу различными способами. Рассмотрим несколько решений с объяснением.
1. Использование Set (самый эффективный способ)
Множество (`Set`) в JavaScript хранит только уникальные значения. Мы можем воспользоваться этим, чтобы проверить, не содержатся ли в строке повторяющиеся символы.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Мы создаём `Set`, который автоматически удаляет все дублирующиеся символы.
- Если размер множества (`Set`) равен длине строки, это значит, что в строке нет повторений.
---
2. Использование объекта для отслеживания символов
Мы можем использовать объект для хранения уже встреченных символов. Если мы встречаем символ, который уже был в объекте, значит, строка не уникальна.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      return false;  // Если символ уже встречался
    }
    charMap[str[i]] = true;
  }

  return true;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Мы проходим по строке, используя объект `charMap` для отслеживания символов.
- Если символ уже встречался (то есть он есть в `charMap`), сразу возвращаем `false`.
- Если все символы уникальны, возвращаем `true`.
---
3. Использование метода `indexOf()`
Мы можем использовать метод `indexOf()` для проверки индекса каждого символа в строке. Если символ встречается более одного раза, это значит, что строка не уникальна.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) {
      return false; // Если символ найден после текущего индекса
    }
  }
  return true;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Для каждого символа мы ищем его индекс начиная с позиции, следующей за текущей.
- Если метод `indexOf()` находит этот символ, значит, он уже встречался в строке.
---
4. Использование регулярных выражений
Этот метод подходит, если строка состоит только из букв или чисел, но это менее эффективное решение, чем другие.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Регулярное выражение `/(.).*\1/` ищет повторяющиеся символы.
- Если оно находит такие символы, то возвращает `false`, иначе `true`.
Резюме:
1. Использование `Set` — самый эффективный и лаконичный способ для проверки уникальности символов.
2. Использование объекта — также эффективный способ, особенно если нужно делать дополнительные проверки.
3. Использование `indexOf()` — менее эффективный, но всё ещё работоспособный метод.
4. Использование регулярных выражений — подход, который вряд ли стоит использовать для этой задачи, так как оно сложнее и менее оптимально, чем другие методы.
---------------------
⋙ ❍ ⌛ Задача: Плоский массив:
---
Плоский массив (или flattened array) — это одномерный массив, который получается путем "разворачивания" многомерного массива. Например, если у вас есть массив с вложенными массивами, вы можете привести его к "плоскому" виду, объединив все элементы в один массив.
Пример:
- Исходный массив:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
```
- Плоский массив (результат):
```javascript
const flattenedArray = [1, 2, 3, 4, 5, 6, 7, 8];
```
1. Простое разворачивание массива с помощью `flat()`
С ES6 был введен метод массива `flat()`, который позволяет "расплющить" многомерные массивы. По умолчанию метод `flat()` выполняет одноуровневое разворачивание, но также можно указать глубину для более сложных случаев.
🎯 Решение (с использованием `flat()`):
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Разворачиваем массив на один уровень
const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // [1, 2, 3, 4, 5, [6, 7], 8]
```
Объяснение:
- `flat()` по умолчанию разворачивает массив на один уровень. Массив `[6, 7]` остаётся вложенным.
🎯 Решение с указанием глубины:
Чтобы полностью расплющить массив, можно передать глубину:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Разворачиваем массив до полной глубины
const fullyFlattenedArray = nestedArray.flat(Infinity);

console.log(fullyFlattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Указав глубину `Infinity`, мы расплющиваем массив на все возможные уровни вложенности.
---
2. Ручное разворачивание с использованием рекурсии
Если по каким-то причинам необходимо вручную "расплющить" массив (например, в старых браузерах или для более гибкой реализации), можно использовать рекурсивную функцию для обхода всех вложенных массивов.
🎯 Решение (рекурсивная функция):
```javascript
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Если элемент является массивом, рекурсивно обрабатываем его
      result = result.concat(flattenArray(arr[i]));
    } else {
      // Если элемент не массив, добавляем его в результат
      result.push(arr[i]);
    }
  }

  return result;
}

const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Функция `flattenArray` рекурсивно проходит по каждому элементу массива. Если элемент является массивом, она снова вызывает себя для этого элемента и добавляет результаты в итоговый массив. Если элемент не является массивом, он просто добавляется в `result`.
---
3. Использование `reduce()` для плоского массива
Также можно использовать метод `reduce()` для решения задачи, комбинируя его с рекурсией.
🎯 Решение (с использованием `reduce()`):
```javascript
function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Мы используем `reduce()` для аккумуляции результата. Если текущий элемент является массивом, мы рекурсивно разворачиваем его и добавляем в результат. Если это не массив, то просто добавляем элемент.
---
4. Использование `flatMap()`
Метод `flatMap()` является комбинацией методов `map()` и `flat()`. Он сначала применяет функцию к каждому элементу, а затем "расплющивает" результат на один уровень.
🎯 Решение с использованием `flatMap()`:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Применяем flatMap для преобразования и расплющивания
const flattenedArray = nestedArray.flatMap(item => Array.isArray(item) ? item : [item]);

console.log(flattenedArray); // [1, 2, 3, 4, 5, [6, 7], 8]
```
Объяснение:
- Метод `flatMap()` сначала применяет функцию ко всем элементам массива. В этой функции мы проверяем, является ли элемент массивом, и, если это так, возвращаем его. Если элемент не является массивом, мы преобразуем его в массив с одним элементом (для корректного объединения).
---
5. Преобразование в строку и удаление разделителей
🎯 Если нужно "расплющить" массив в строку (например, для отображения), можно использовать метод `join()`:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Преобразуем в строку и удалим вложенность
const flattenedString = nestedArray.flat(Infinity).join(', ');

console.log(flattenedString); // "1, 2, 3, 4, 5, 6, 7, 8"
```
Объяснение:
- Мы используем `flat(Infinity)` для полного расплющивания массива, а затем `join(', ')` для объединения всех элементов в строку с разделителями.
Заключение:
1. Используйте `flat()` для простого и эффективного расплющивания массива в один уровень или на указанную глубину.
2. В случае необходимости рекурсивного разворачивания массива можно использовать рекурсию или методы `reduce()` и `flatMap()`.
3. Решение с `flatMap()` эффективно, если нужно выполнить преобразование и одновременно расплющить массив.
---------------------
⋙ ❍ ⌛ Задача: Удаление всех повторяющихся значения в строке:
---
Для удаления всех повторяющихся символов в строке, оставляя только первое их вхождение, можно использовать несколько различных подходов. Рассмотрим несколько решений, включая использование встроенных методов JavaScript.
1. Использование `Set`
Мы можем использовать `Set` для хранения уникальных символов, поскольку `Set` автоматически удаляет дубликаты. Затем мы преобразуем его обратно в строку.
🎯 Решение с использованием `Set`:
```javascript
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы используем оператор распространения (`...`) для преобразования строки в массив символов.
- Затем создаём новый `Set` из массива, который автоматически удаляет все дубликаты.
- В конце мы соединяем элементы обратно в строку с помощью `join('')`.
---
2. Использование объекта для отслеживания символов
Другим способом является использование объекта (или `Map`), чтобы отслеживать, какие символы мы уже встречали.
🎯 Решение с использованием объекта:
```javascript
function removeDuplicates(str) {
  let seen = {};
  let result = '';

  for (let char of str) {
    if (!seen[char]) {
      result += char;  // Добавляем символ, если его ещё не было
      seen[char] = true;  // Отмечаем, что символ встречен
    }
  }

  return result;
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы используем объект `seen`, чтобы отслеживать символы, которые уже были встречены.
- Для каждого символа проверяем, есть ли он в объекте. Если нет, добавляем его в результат и помечаем как встреченный.
---
3. Использование регулярных выражений
Если нужно удалить только все повторяющиеся символы (оставляя только одно их вхождение) в строке, можно использовать регулярные выражения.
🎯 Решение с использованием регулярного выражения:
```javascript
function removeDuplicates(str) {
  return str.replace(/([a-zA-Z0-9])\1+/g, '$1');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Регулярное выражение `(/([a-zA-Z0-9])\1+/g)` ищет повторяющиеся символы.
- `([a-zA-Z0-9])` — это символ, который может повторяться.
- `\1+` означает "повторение предыдущего символа".
- Мы заменяем все такие повторения на один символ с помощью `'$1'`.
---
4. Использование `reduce()`
Можно использовать метод `reduce()` для более функционального подхода к решению задачи.
🎯 Решение с использованием `reduce()`:
```javascript
function removeDuplicates(str) {
  return str.split('').reduce((acc, char) => {
    if (!acc.includes(char)) acc += char;
    return acc;
  }, '');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы разбиваем строку на массив символов с помощью `split('')`.
- Затем используем `reduce()` для аккумулирования результата. Каждый символ добавляется в результат только если его ещё нет в строке.
Резюме:
1. Использование `Set` — самый простой и эффективный способ, так как `Set` автоматически удаляет дубликаты.
2. Использование объекта — позволяет вручную отслеживать повторяющиеся символы.
3. Использование регулярных выражений — полезно для более сложных случаев с паттернами.
4. Использование `reduce()` — функциональный подход с возможностью дополнительной настройки.
---------------------
⋙ ❍ ⌛ Задача: Какая строка встречается чаще всего:
---
Для того чтобы найти строку, которая встречается чаще всего в массиве строк, мы можем использовать объект для подсчёта количества повторений каждой строки. Затем мы просто находим строку с наибольшим количеством повторений.
🎯 Решение:
1. Пройдем по всем строкам в массиве и будем подсчитывать количество каждого элемента.
2. Найдем строку с наибольшим числом повторений.
🎯 Решение с использованием объекта для подсчета повторений:
```javascript
function mostFrequentString(arr) {
  const countMap = {};

  // Подсчитываем количество повторений каждой строки
  arr.forEach(str => {
    countMap[str] = (countMap[str] || 0) + 1;
  });

  // Находим строку с наибольшим количеством повторений
  let maxCount = 0;
  let mostFrequent = '';

  for (let str in countMap) {
    if (countMap[str] > maxCount) {
      maxCount = countMap[str];
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

// Пример использования:
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);

console.log(frequentString); // "apple"
```
Объяснение:
1. Мы создаём объект `countMap`, где ключи — это строки, а значения — количество их повторений.
2. Мы проходим по массиву и увеличиваем значение для каждой строки в объекте.
3. Затем мы проходим по объекту, чтобы найти строку с максимальным количеством повторений.
4. Функция возвращает строку, которая встречается чаще всего.
Пример 1:
```javascript
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "apple"
```
Пример 2:
```javascript
const strings = ["dog", "cat", "dog", "dog", "fish", "fish"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "dog"
```
Оптимизация:
- Этот метод работает за O(n), где n — количество элементов в массиве, так как мы проходим по массиву один раз и затем по объекту.
---
🎯 Решение с использованием `Map`
Вместо обычного объекта можно использовать `Map`, если вам нужно сохранять порядок вставки или работать с ключами, которые могут быть любыми типами данных.
```javascript
function mostFrequentString(arr) {
  const countMap = new Map();

  // Подсчитываем количество повторений каждой строки
  arr.forEach(str => {
    countMap.set(str, (countMap.get(str) || 0) + 1);
  });

  // Находим строку с наибольшим количеством повторений
  let maxCount = 0;
  let mostFrequent = '';

  for (let [str, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

const strings = ["dog", "cat", "dog", "dog", "fish", "fish"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "dog"
```
Объяснение:
- Мы используем `Map` для подсчёта повторений строк. `get()` используется для получения текущего значения, а `set()` — для обновления.
- В остальном логика остаётся такой же.
Резюме:
- Для нахождения строки, которая встречается чаще всего, можно использовать объект или `Map` для подсчёта повторений.
- Алгоритм работает за O(n), где n — это количество строк в массиве.
- Вы можете легко адаптировать решение под свои нужды, например, для работы с числами или более сложными данными.
---------------------
⋙ ❍ ⌛ Задача: Повернута ли строка:
---
Для проверки, является ли строка повёрнутой (палиндромом), то есть она одинаково читается слева направо и справа налево, можно использовать несколько различных подходов.
Алгоритм:
1. Преобразуем строку в её обратный вариант.
2. Сравниваем оригинальную строку с перевёрнутой.
3. Если строки совпадают, значит, это палиндром, иначе — нет.
🎯 Решение:
1. Проверка с использованием `reverse()`
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы разбиваем строку на массив символов с помощью `split('')`.
- Затем используем `reverse()` для переворачивания массива.
- После этого соединяем массив обратно в строку с помощью `join('')`.
- Сравниваем оригинальную строку с перевёрнутой.
---
2. Проверка с использованием циклов
Мы можем вручную пройтись по строке и сравнивать её символы с противоположных концов.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы проходим по строке до середины и сравниваем символы с начала и конца.
- Если хотя бы один символ не совпадает, возвращаем `false`. Если все символы совпадают, возвращаем `true`.
---
3. Проверка с использованием метода `every()`
Можно также использовать метод `every()` для проверки всех соответствующих пар символов.
🎯 Решение:
```javascript
function isPalindrome(str) {
  return [...str].every((char, index) => char === str[str.length - 1 - index]);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем оператор распространения (`...`), чтобы превратить строку в массив.
- С помощью метода `every()` проверяем, что для каждого символа с начала строки его противоположный символ (с конца строки) равен ему.
---
4. Учет регистра и пробелов
Если необходимо игнорировать пробелы и регистр символов (например, в строках "A man a plan a canal Panama"), можно сначала привести строку к нижнему регистру и удалить пробелы.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем регулярное выражение `\s+`, чтобы удалить все пробелы.
- Преобразуем строку в нижний регистр с помощью `toLowerCase()`.
- Далее проверяем строку на палиндром.
Резюме:
1. Мы рассмотрели несколько способов проверки, является ли строка палиндромом:
   - Использование метода `reverse()`.
   - Ручное сравнение символов с двух концов строки.
   - Использование метода `every()`.
2. Для более гибкой проверки, включая игнорирование пробелов и регистра, можно предварительно очистить строку.
---------------------
⋙ ❍ ⌛ Задача: Является ли массив подмножеством другого массива:
---
Чтобы проверить, является ли один массив подмножеством другого, нужно убедиться, что все элементы первого массива присутствуют во втором, при этом учёт количества повторений элементов также важен, если требуется точная проверка.
Что такое подмножество?
Массив `A` является подмножеством массива `B`, если все элементы массива `A` присутствуют в массиве `B`, но не обязательно в том же порядке. Важно, что элементы массива `A` могут повторяться в массиве `B`.
🎯 Решение задачи:
1. Метод с использованием `every()`:
   Мы можем пройтись по каждому элементу первого массива и проверять, существует ли этот элемент в втором массиве.
2. Метод с использованием объекта (для оптимизации):
   Можно использовать объект для подсчета количества элементов в обоих массивах, чтобы гарантировать, что элементы из первого массива есть в необходимом количестве во втором массиве.
🎯 Решение с использованием `every()`
```javascript
function isSubset(arr1, arr2) {
  return arr1.every(element => arr2.includes(element));
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
```
Объяснение:
- Мы используем метод `every()`, чтобы пройти по всем элементам массива `arr1` и проверять, есть ли каждый элемент в массиве `arr2` с помощью `includes()`.
- Этот метод работает корректно, но его время работы — O(n * m), где `n` — длина первого массива, а `m` — длина второго массива.
---
🎯 Решение с использованием объекта для подсчета элементов
Для более эффективной реализации (особенно для массивов с большим количеством элементов) можно использовать объект или карту для подсчета количества каждого элемента в массивах.
```javascript
function isSubset(arr1, arr2) {
  const countMap = {};

  // Подсчитываем количество каждого элемента во втором массиве
  arr2.forEach(element => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  // Проверяем, все ли элементы из arr1 есть в countMap с достаточным количеством
  return arr1.every(element => {
    if (countMap[element] > 0) {
      countMap[element]--;
      return true;
    }
    return false;
  });
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
console.log(isSubset([1, 2, 2], [1, 2, 2, 3])); // true
console.log(isSubset([1, 2, 2], [1, 2, 3])); // false
```
Объяснение:
- Мы создаём объект `countMap`, в котором считаем, сколько раз каждый элемент встречается в массиве `arr2`.
- Затем проверяем каждый элемент массива `arr1`. Если элемент присутствует в `countMap` с положительным значением, то уменьшаем счётчик, иначе возвращаем `false` (что означает, что это не подмножество).
- Это решение работает за O(n + m), где `n` — длина первого массива, а `m` — длина второго массива.
---
Дополнительный пример с использованием `Set` для подмножеств без учета повторений
Если подмножество не должно учитывать количество повторений, можно использовать `Set` для оптимизации поиска.
```javascript
function isSubset(arr1, arr2) {
  const set2 = new Set(arr2);  // Преобразуем второй массив в Set
  return arr1.every(element => set2.has(element));
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
```
Объяснение:
- В этом примере мы используем `Set`, чтобы проверить, содержатся ли элементы из `arr1` в `arr2`, игнорируя количество повторений.
- Это решение работает за O(n + m), где `n` — длина первого массива, а `m` — длина второго массива, благодаря использованию структуры данных `Set`, которая позволяет эффективно проверять наличие элементов.
Резюме:
1. Использование `every()` и `includes()`: Простой способ проверки, но работает за O(n * m).
2. Использование объекта для подсчёта: Оптимальный подход для массива с большим количеством элементов, работает за O(n + m).
3. Использование `Set`: Простой и эффективный метод, если не нужно учитывать количество повторений элементов.
---------------------
⋙ ❍ ⌛ Задача: Анаграммы:
---
Анаграммы — это слова или фразы, полученные путём перестановки букв другого слова или фразы, при этом должны быть использованы все буквы, и их количество должно совпадать.
Для проверки, являются ли два слова анаграммами, нужно выполнить несколько шагов:
1. Проверить, что обе строки имеют одинаковую длину.
2. Проверить, что у обеих строк одинаковое количество каждого символа.
🎯 Решение на JavaScript
1. Преобразуем обе строки в массивы символов.
2. Отсортируем массивы.
3. Сравним отсортированные строки.
🎯 Решение с использованием сортировки:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Преобразуем строки в массивы символов, сортируем их и соединяем обратно в строки
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы разделяем строки на массивы символов с помощью `split('')`.
- Сортируем массивы с помощью `sort()`, чтобы символы были в алфавитном порядке.
- Затем мы соединяем отсортированные массивы обратно в строки с помощью `join('')`.
- Если отсортированные строки совпадают, значит, это анаграммы.
---
🎯 Решение с использованием объекта для подсчёта символов
Вместо сортировки можно подсчитать количество каждого символа в обеих строках и сравнить их.
🎯 Решение с подсчётом символов:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countMap = {};

  // Подсчитываем символы в первой строке
  for (let char of str1) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  // Проверяем, есть ли такие же символы во второй строке
  for (let char of str2) {
    if (!countMap[char]) {
      return false;
    }
    countMap[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы создаём объект `countMap`, чтобы подсчитать количество каждого символа в первой строке.
- Затем проходим по второй строке и уменьшаем счетчик символов в `countMap`. Если какой-то символ отсутствует в объекте или его количество меньше, чем требуется, значит строки не являются анаграммами.
- В конце проверяем, что все значения в `countMap` равны нулю, что подтверждает, что строки содержат одинаковые символы.
🎯 Решение с использованием `Map`
Для улучшенной читаемости можно использовать `Map` для подсчёта символов.
🎯 Решение с использованием `Map`:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countMap = new Map();

  // Подсчитываем символы в первой строке
  for (let char of str1) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  // Проверяем, есть ли такие же символы во второй строке
  for (let char of str2) {
    if (!countMap.has(char)) {
      return false;
    }
    countMap.set(char, countMap.get(char) - 1);
  }

  // Убедимся, что все значения в countMap равны 0
  for (let count of countMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы используем `Map` для подсчёта символов в строках.
- Для каждого символа мы увеличиваем или уменьшаем его счетчик в `Map`.
- В конце проверяем, что все счётчики равны нулю, что подтверждает, что строки содержат одинаковые символы.
---
🎯 Решение с использованием регулярных выражений
Если строки содержат только буквы, можно использовать регулярное выражение для проверки анаграмм. Однако этот метод не столь гибок, как предыдущие, и не будет работать, если строки содержат пробелы или специальные символы.
Пример (не рекомендуемый метод для общего использования):
```javascript
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // true
```
Этот метод идентичен подходу с использованием сортировки и `join`, только это скорее нестандартное решение, которое мы разобрали раньше.
Резюме:
1. Сортировка строк: Самый простой способ — отсортировать символы в строках и сравнить их.
2. Подсчёт символов с использованием объекта или `Map`: Это более эффективный способ, который работает за O(n), так как мы не сортируем строки, а просто подсчитываем символы.
3. Регулярные выражения — подходят только для специфичных случаев (например, без пробелов и символов).
---------------------
⋙ ❍ ⌛ Задача: Перевернуть матрицу 3х3:
---
Перевёрнутая матрица для 3x3 подразумевает её транспонирование, то есть замену строк на столбцы. Другими словами, элемент на позиции `[i][j]` в исходной матрице становится элементом на позиции `[j][i]` в новой матрице.
⌛ Задача: Напишите функцию, которая переворачивает (транспонирует) матрицу 3x3.
🎯 Решение:
Для решения задачи мы можем создать новый массив, который будет хранить перевёрнутую матрицу.
🎯 Решение с объяснением:
```javascript
function transposeMatrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = matrix[j][i]; // Транспонируем
    }
  }

  return result;
}

// Пример использования:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposed = transposeMatrix(matrix);
console.log(transposed);
```
Результат:
```
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```
Объяснение:
- Внешний цикл (`for (let i = 0; i < matrix.length; i++)`) итерирует по строкам исходной матрицы.
- Внутренний цикл (`for (let j = 0; j < matrix[i].length; j++)`) итерирует по столбцам.
- Мы присваиваем элементы исходной матрицы новому массиву `result[i][j]`, где индексы местами меняются, что и является процессом транспонирования.
🎯 Альтернативное решение с использованием `map()`
Можно также использовать метод `map()` для транспонирования матрицы:
```javascript
function transposeMatrix(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

// Пример использования:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposed = transposeMatrix(matrix);
console.log(transposed);
```
Объяснение:
- Метод `map()` позволяет нам пройти по каждому столбцу исходной матрицы.
- Внутренний `map()` помогает нам извлечь элементы столбца и перестроить их в строки нового массива.
Результат:
```
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```
Резюме:
1. Транспонирование матрицы — это процесс замены строк на столбцы.
2. Мы использовали два подхода: один с использованием циклов, другой с методом `map()`, который является более функциональным и удобным.
---------------------
⋙ ❍ ⌛ Задача: Простой поиск:
---
Простой поиск — это процесс нахождения элемента в массиве или другой структуре данных. Самый простой алгоритм поиска — линейный поиск, который перебирает элементы последовательно, пока не найдёт нужный.
---
Линейный поиск (Linear Search)
Линейный поиск проходит по массиву слева направо, сравнивая каждый элемент с искомым значением. Это простой, но не самый эффективный способ, особенно для больших массивов.
🎯 Реализация:
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Возвращаем индекс найденного элемента
    }
  }
  return -1; // Возвращаем -1, если элемент не найден
}

// Пример использования:
const numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30)); // 2
console.log(linearSearch(numbers, 60)); // -1
```
Объяснение:
- Мы перебираем массив с помощью цикла `for`.
- Сравниваем каждый элемент с искомым значением `target`.
- Если элемент найден, возвращаем его индекс. Если нет, возвращаем `-1`.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива.
- Пространственная сложность: \( O(1) \), так как мы не используем дополнительную память.
---
Поиск в отсортированном массиве (Бинарный поиск)
Если массив отсортирован, можно использовать бинарный поиск. Этот метод делит массив на две части и исключает половину элементов за одну итерацию.
🎯 Реализация:
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Элемент найден
    } else if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

// Пример использования:
const sortedNumbers = [10, 20, 30, 40, 50];
console.log(binarySearch(sortedNumbers, 30)); // 2
console.log(binarySearch(sortedNumbers, 60)); // -1
```
Объяснение:
- Устанавливаем указатели на начало (`left`) и конец (`right`) массива.
- Находим средний элемент массива.
- Если средний элемент равен искомому значению, возвращаем его индекс.
- Если значение меньше среднего элемента, сужаем поиск до левой половины.
- Если значение больше, сужаем поиск до правой половины.
- Повторяем процесс до тех пор, пока не найдём элемент или не исчерпаем массив.
Сложность:
- Временная сложность: \( O(\log n) \), так как мы каждый раз делим массив пополам.
- Пространственная сложность: \( O(1) \).
---------------------
⋙ ❍ ⌛ Задача: Поиск в объектах (Hash Search)
---
Если данные представлены в виде объекта или карты, можно использовать прямой доступ по ключу, что делает поиск мгновенным.
🎯 Реализация:
```javascript
const data = {
  alice: 25,
  bob: 30,
  charlie: 35,
};

console.log(data['bob']); // 30
console.log(data['dave']); // undefined
```
Объяснение:
- В объектах (или структурах типа `Map`) доступ по ключу имеет сложность \( O(1) \).
- Если ключ отсутствует, возвращается `undefined`.
---
Пример сложного поиска в массиве объектов
Для более сложных данных, например, массива объектов, можно использовать линейный поиск с проверкой по свойству.
🎯 Реализация:
```javascript
function findByName(arr, name) {
  return arr.find(person => person.name === name) || null;
}

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

console.log(findByName(people, 'Bob')); // { name: 'Bob', age: 30 }
console.log(findByName(people, 'Dave')); // null
```
Объяснение:
- Метод `find()` возвращает первый элемент массива, удовлетворяющий переданному условию.
- Если элемент не найден, возвращаем `null`.
Сложность:
- Временная сложность: \( O(n) \).
Выбор метода поиска
| Тип данных          | Лучший метод           | Сложность       |
|--------------------------|----------------------------|---------------------|
| Несортированный массив   | Линейный поиск            | \( O(n) \)          |
| Отсортированный массив   | Бинарный поиск            | \( O(\log n) \)     |
| Объекты (или Map)        | Прямой доступ (хэш-поиск) | \( O(1) \)          |
| Массив объектов          | Линейный поиск с фильтром | \( O(n) \)          |
Резюме
1. Линейный поиск подходит для небольших массивов или несортированных данных.
2. Для отсортированных массивов используйте бинарный поиск, который быстрее при больших данных.
3. Для доступа по ключу в объектах используйте прямой доступ (`O(1)`).
4. В сложных структурах, таких как массив объектов, можно использовать фильтры или `find`.
---------------------
⋙ ❍ Сбалансированные скобки:
---
⌛ Задача: Проверка сбалансированности скобок
Дано строку, содержащую скобки следующих типов: `()`, `{}`, `[]`. Необходимо написать функцию, которая определяет, являются ли скобки в строке сбалансированными.
Что значит сбалансированные скобки?
1. Каждая открывающая скобка должна быть закрыта соответствующей закрывающей скобкой.
2. Порядок вложенности должен быть правильным.
Пример:
- Сбалансированные: `"(){}[]"`, `"{[()]}"`, `""` (пустая строка).
- Несбалансированные: `"(}"`, `"({[)]}"`, `"("`.
---
🎯 Алгоритм решения
1. Используем стек:
   - Каждый раз, когда встречаем открывающую скобку, кладём её в стек.
   - Когда встречаем закрывающую скобку, проверяем, соответствует ли она верхнему элементу стека.
   - Если стек в конце пуст, скобки сбалансированы.
2. Если на каком-либо этапе закрывающая скобка не соответствует верхней открывающей скобке, строка несбалансирована.
---
🎯 Реализация
```javascript
function isBalanced(s) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      // Открывающую скобку кладем в стек
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      // Проверяем соответствие верхней скобки в стеке
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  // Если стек пуст, скобки сбалансированы
  return stack.length === 0;
}

// Примеры использования:
console.log(isBalanced("(){}[]")); // true
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("(}"));     // false
console.log(isBalanced("({[)]}")); // false
console.log(isBalanced("("));      // false
```
Объяснение
1. Карта соответствий скобок:
   - Используем объект `brackets` для проверки соответствия закрывающей и открывающей скобок.
   - Например: `')'` соответствует `'('`, `'}'` соответствует `'{'`.
2. Алгоритм:
   - Когда видим открывающую скобку, кладём её в стек.
   - Когда видим закрывающую скобку, сравниваем её с верхним элементом стека:
     - Если соответствует, удаляем верхний элемент из стека.
     - Если не соответствует или стек пуст, скобки несбалансированы.
   - После обработки всей строки, если стек пуст, скобки сбалансированы.
3. Сложность:
   - Временная сложность: \( O(n) \), где \( n \) — длина строки, так как мы проходим строку один раз.
   - Пространственная сложность: \( O(n) \), так как в худшем случае все скобки могут быть открывающими и добавлены в стек.
Расширенные примеры
Пример 1: Смешанные символы
Строка может содержать другие символы, помимо скобок. Их нужно игнорировать.
```javascript
function isBalanced(s) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("a + b * (c - d)")); // true (скобки в строке сбалансированы)
console.log(isBalanced("{a + [b * (c - d)]}")); // true
console.log(isBalanced("{a + (b * c - d]}")); // false
```
---
Пример 2: Пустая строка
Если строка пустая, скобки считаются сбалансированными.

```javascript
console.log(isBalanced("")); // true
```
---
Пример 3: Сложные строки
```javascript
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("{[(()])}")); // false
console.log(isBalanced("()[]{}{()}")); // true
```
Резюме
1. Подход с использованием стека — самый эффективный способ проверки сбалансированности скобок.
2. Ключевые моменты:
   - Добавление открывающих скобок в стек.
   - Сопоставление закрывающих скобок с верхним элементом стека.
   - Проверка пустоты стека в конце.
3. Сложность:
   - Временная: \( O(n) \).
   - Пространственная: \( O(n) \).
---------------------
⋙ ❍ ⌛ Задача: Очередь с О(1) сложностью операций:
---
🎯 Реализация очереди с операциями добавления (enqueue) и удаления (dequeue) за O(1) сложность возможна с использованием двух подходов:
1. Двух указателей: Голова (`head`) и хвост (`tail`) для управления массивом.
2. Связанный список: Используется для эффективного добавления/удаления.
---
1. Очередь на массиве с двумя указателями
Мы создаём фиксированный массив и управляем двумя указателями: `head` для удаления элементов и `tail` для добавления. Благодаря этому операции вставки и удаления работают за O(1).
🎯 Реализация:
```javascript
class Queue {
  constructor(size = 1000) {
    this.queue = new Array(size); // Фиксированный массив
    this.head = 0; // Указатель на первый элемент
    this.tail = 0; // Указатель на место вставки
    this.length = 0; // Количество элементов в очереди
    this.capacity = size; // Максимальный размер очереди
  }

  // Добавить элемент в очередь
  enqueue(value) {
    if (this.length === this.capacity) {
      throw new Error("Queue is full");
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity; // Циклическое перемещение
    this.length++;
  }

  // Удалить элемент из очереди
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity; // Циклическое перемещение
    this.length--;
    return value;
  }

  // Вернуть первый элемент без удаления
  peek() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.head];
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.length === 0;
  }

  // Получить размер очереди
  size() {
    return this.length;
  }
}

// Пример использования:
const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);            // Очередь заполнена
console.log(queue.size());    // 4
```
Объяснение:
1. Добавление (`enqueue`):
   - Значение вставляется в позицию `tail`.
   - Указатель `tail` перемещается вперёд (циклически).
   - Сложность: O(1).
2. Удаление (`dequeue`):
   - Элемент удаляется из позиции `head`.
   - Указатель `head` перемещается вперёд (циклически).
   - Сложность: O(1).
---
2. Очередь на связанном списке
Связанный список — это ещё один способ реализовать очередь с O(1) сложностью для операций добавления и удаления. Мы используем узлы (`Node`), где каждый узел хранит данные и ссылку на следующий.
🎯 Реализация:
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Указатель на первый элемент
    this.tail = null; // Указатель на последний элемент
    this.length = 0;  // Размер очереди
  }

  // Добавить элемент в очередь
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Удалить элемент из очереди
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return value;
  }

  // Вернуть первый элемент без удаления
  peek() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.head.value;
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.length === 0;
  }

  // Получить размер очереди
  size() {
    return this.length;
  }
}

// Пример использования:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
```
Объяснение:
1. Добавление (`enqueue`):
   - Новый узел добавляется в конец списка.
   - Указатель `tail` обновляется на новый узел.
   - Сложность: O(1).
2. Удаление (`dequeue`):
   - Указатель `head` перемещается на следующий узел.
   - Если очередь становится пустой, `tail` также обнуляется.
   - Сложность: O(1).
Сравнение двух подходов
| Характеристика         | Реализация на массиве      | Реализация на связанном списке |
|------------------------|----------------------------|--------------------------------|
| Сложность операций | O(1)                  | O(1)                      |
| Использование памяти | Фиксированный размер массива | Гибкий (динамический) размер   |
| Управление памятью | Требуется фиксированный объём | Требует дополнительной памяти для ссылок |
| Подходит для        | Очередей с известным размером | Динамических очередей          |
Резюме
1. Очередь на массиве:
   - Подходит, если заранее известен максимальный размер очереди.
   - Проста в реализации, требует управления указателями.
2. Очередь на связанном списке:
   - Динамическая очередь, нет ограничений по размеру.
   - Использует больше памяти из-за ссылок в каждом узле.
---------------------
⋙ ❍ ⌛ Задача: Deep Equal:
---
Deep Equal (глубокое сравнение) — это процесс сравнения двух объектов или структур данных для проверки, являются ли они структурно идентичными. В отличие от поверхностного сравнения (`===`), которое сравнивает только ссылки для объектов, глубокое сравнение рекурсивно проверяет каждое свойство объектов или элементов массивов.
⌛ Задача: Сравнить два объекта (или массивы) и определить, являются ли они полностью идентичными, включая вложенные свойства.
---
🎯 Решение 1: Реализация с использованием рекурсии
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если обе ссылки указывают на одно и то же, объекты равны
  if (obj1 === obj2) return true;

  // Если один из них null или не является объектом, они не равны
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Получаем массивы ключей обоих объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Если количество ключей не совпадает, объекты не равны
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проверяем каждое свойство
  for (let key of keys1) {
    // Рекурсивно сравниваем значения свойств
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Bob', details: { age: 25, city: 'NY' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Объяснение:
1. Сравнение ссылок:
   Если обе переменные указывают на одну и ту же ссылку (`===`), возвращаем `true`.
2. Проверка типов:
   Если один из объектов `null` или не является объектом, они не равны.
3. Ключи объектов:
   Сравниваем массивы ключей объектов. Если количество ключей отличается, объекты не равны.
4. Рекурсия:
   Рекурсивно вызываем функцию для каждого свойства объекта.
---
🎯 Решение 2: Сравнение массивов и объектов
Этот подход поддерживает сравнение как массивов, так и объектов.
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если объекты идентичны
  if (obj1 === obj2) return true;

  // Если это массивы
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((value, index) => deepEqual(value, obj2[index]));
  }

  // Если это не объекты или null
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Если это объекты
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// Пример использования:
const arr1 = [1, { a: 1 }, [2, 3]];
const arr2 = [1, { a: 1 }, [2, 3]];
const arr3 = [1, { a: 2 }, [2, 3]];

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(arr1, arr3)); // false
```
---
🎯 Решение 3: С использованием `JSON.stringify`
Иногда, если объекты не содержат функций или циклических ссылок, можно использовать преобразование в JSON для сравнения.
Код:
```javascript
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Alice', details: { age: 25, city: 'LA' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Недостатки:
- `JSON.stringify` не поддерживает циклические ссылки.
- Сравнение чувствительно к порядку ключей в объектах.
---
🎯 Решение 4: Обработка циклических ссылок
Если объекты содержат циклические ссылки (ссылаются сами на себя), необходимо обработать их с помощью, например, `WeakMap`.
Код:
```javascript
function deepEqual(obj1, obj2, visited = new WeakMap()) {
  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Обработка циклических ссылок
  if (visited.has(obj1)) return visited.get(obj1) === obj2;

  visited.set(obj1, obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice' };
objA.self = objA;

const objB = { name: 'Alice' };
objB.self = objB;

console.log(deepEqual(objA, objB)); // true
```
Резюме
| Метод                      | Особенности                                                                                      | Сложность       |
|----------------------------|--------------------------------------------------------------------------------------------------|-----------------|
| Рекурсия               | Работает с объектами, массивами, вложенными структурами. Не поддерживает циклические ссылки.    | O(n)        |
| JSON.stringify         | Простое решение, но не подходит для циклических ссылок. Чувствительно к порядку ключей.         | O(n)        |
| С мемоизацией (`WeakMap`) | Поддерживает циклические ссылки. Работает с любыми объектами и структурами.                     | O(n)       |
Для большинства задач, особенно без циклических ссылок, достаточно рекурсивного подхода. Для сложных случаев с циклическими ссылками лучше использовать вариант с `WeakMap`.
---------------------
⋙ ❍ ⌛ Задача: Последовательность Фибоначчи:
---
Последовательность Фибоначчи — это последовательность чисел, в которой каждое число является суммой двух предыдущих. Начальные числа последовательности: \( F(0) = 0 \), \( F(1) = 1 \), а для всех \( n > 1 \):
\[
F(n) = F(n-1) + F(n-2)
\]
Несколько способов вычисления последовательности Фибоначчи в JavaScript:
1. Генерация последовательности Фибоначчи с использованием итерации
Если вы хотите создать последовательность Фибоначчи до определённого числа \( n \), можно использовать итеративный подход:
🎯 Решение:
Код:
```javascript
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы начинаем с массива `[0, 1]`, содержащего первые два числа последовательности.
- Затем, начиная с \( i = 2 \), добавляем сумму двух предыдущих чисел в массив.
---
2. Генерация с использованием рекурсии
Рекурсивный подход вычисляет каждое число Фибоначчи путём вызова функции для двух предыдущих чисел.
🎯 Решение:
Код:
```javascript
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Генерация последовательности
function generateFibonacciRecursive(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciRecursive(i));
  }
  return sequence;
}

console.log(generateFibonacciRecursive(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Функция `fibonacciRecursive` возвращает число Фибоначчи для заданного индекса.
- Мы используем цикл, чтобы сгенерировать последовательность чисел.
Недостатки:
- Рекурсивный метод имеет экспоненциальную сложность O(2^n).
- Он повторно вычисляет одни и те же значения, что делает его медленным.
---
3. Оптимизированная рекурсия с мемоизацией
Мемоизация сохраняет уже вычисленные значения, чтобы избежать повторных расчётов.
🎯 Решение:
Код:
```javascript
function fibonacciMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

// Генерация последовательности
function generateFibonacciMemoized(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciMemoized(i));
  }
  return sequence;
}

console.log(generateFibonacciMemoized(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы используем объект `memo` для хранения уже вычисленных значений.
- Функция проверяет, существует ли значение в `memo`. Если да, то оно возвращается, иначе выполняется вычисление.
Преимущества:
- Сложность уменьшается до O(n).
---
4. Генерация последовательности с использованием формулы Бине
Число Фибоначчи можно вычислить напрямую с помощью формулы Бине:
\[
F(n) = \frac{\varphi^n - \psi^n}{\sqrt{5}}
\]
где \( \varphi = \frac{1 + \sqrt{5}}{2} \) (золотое сечение), а \( \psi = \frac{1 - \sqrt{5}}{2} \).
🎯 Решение:
Код:
```javascript
function fibonacciBinet(n) {
  const phi = (1 + Math.sqrt(5)) / 2; // Золотое сечение
  const psi = (1 - Math.sqrt(5)) / 2; // Обратное золотое сечение

  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

// Генерация последовательности
function generateFibonacciBinet(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciBinet(i));
  }
  return sequence;
}

console.log(generateFibonacciBinet(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Этот метод основан на математической формуле, но может быть менее точным для больших значений \( n \), из-за ошибок округления.
- Формула полезна для быстрого расчёта отдельных чисел, но менее эффективна для последовательностей.
---
5. Генерация последовательности с использованием `while`
Если нужно сгенерировать последовательность до определённого значения, а не индекса \( n \), используем цикл `while`.
🎯 Решение:
Код:
```javascript
function generateFibonacciUntil(maxValue) {
  const sequence = [0, 1];
  let nextValue = 0;

  while ((nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= maxValue) {
    sequence.push(nextValue);
  }

  return sequence;
}

console.log(generateFibonacciUntil(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы продолжаем вычислять числа Фибоначчи до тех пор, пока следующее число не превысит `maxValue`.
Резюме:
| Метод                          | Сложность | Особенности                                                   |
|--------------------------------|-----------|---------------------------------------------------------------|
| Итерация                   | O(n)  | Эффективный метод, занимает мало памяти.                     |
| Рекурсия                   | O(2^n)| Медленный метод, неэффективен для больших значений \( n \).   |
| Рекурсия с мемоизацией     | O(n)  | Ускоренная версия рекурсии, сохраняет вычисленные значения.   |
| Формула Бине               | O(1)  | Быстрый способ для вычисления отдельного числа Фибоначчи.     |
| Генерация до предела       | O(n)  | Позволяет сгенерировать последовательность до заданного значения. |
Для большинства задач рекомендуется использовать итеративный метод или рекурсию с мемоизацией, так как они наиболее эффективны.
---------------------
⋙ ❍ ⌛ Задача: Своя функция bind:
---
Создание собственной реализации функции `bind` в JavaScript — интересная задача, которая помогает понять, как работает метод `Function.prototype.bind`. Давайте разберем шаги для создания собственной функции `myBind`.
Что делает `bind`:
1. `bind` позволяет привязать контекст (`this`) к функции.
2. Возвращает новую функцию, которую можно вызывать позже с тем же контекстом и (при необходимости) переданными аргументами.
Пример использования:
```javascript
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: 'Alice' };
const boundGreet = greet.bind(person);
boundGreet('Hello'); // "Hello, my name is Alice"
```
🎯 Пошаговая реализация `myBind`:
Шаги для реализации:
1. `myBind` должна принимать:
   - контекст (`this`), к которому будет привязана функция.
   - начальные аргументы, которые нужно передать функции.
2. Возвращаемая функция должна:
   - сохранять переданный контекст.
   - принимать дополнительные аргументы, если они передаются при вызове.
   - учитывать передачу начальных и дополнительных аргументов.
3. Работать корректно для функций-конструкторов (то есть сохранять прототип оригинальной функции).
🎯 Реализация:
```javascript
Function.prototype.myBind = function(context, ...args) {
  const originalFunction = this; // Сохраняем ссылку на исходную функцию

  return function boundFunction(...newArgs) {
    // Проверяем, вызвана ли функция как конструктор
    if (this instanceof boundFunction) {
      // Если вызвана через `new`, используем оригинальную функцию с текущим контекстом
      return new originalFunction(...args, ...newArgs);
    }
    // Иначе вызываем с привязанным контекстом
    return originalFunction.apply(context, [...args, ...newArgs]);
  };
};
```
Объяснение кода:
1. Сохранение оригинальной функции:
   - `this` внутри метода `myBind` указывает на функцию, которую мы привязываем (например, `greet`).
2. Передача контекста и аргументов:
   - `args` — это массив начальных аргументов, которые передаются при вызове `myBind`.
   - `newArgs` — это аргументы, которые передаются при вызове возвращённой функции.
3. Использование `apply` для вызова функции:
   - `apply` позволяет передать контекст (`context`) и объединённый список аргументов (`args` и `newArgs`).
4. Поддержка конструктора:
   - Если `boundFunction` вызывается с помощью `new`, то `this instanceof boundFunction` будет `true`, и мы вызываем исходную функцию с новым контекстом.
---
Примеры использования:
Пример 1: Привязка контекста
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };

const boundGreet = greet.myBind(person, 'Hello');
boundGreet('!'); // "Hello, my name is Alice!"
```
---
Пример 2: Добавление аргументов во время вызова
```javascript
function add(a, b) {
  return a + b;
}

const addFive = add.myBind(null, 5); // Привязываем первый аргумент как 5
console.log(addFive(10)); // 15
```
---
Пример 3: Использование с `new`
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const BoundPerson = Person.myBind(null, 'Alice');
const person = new BoundPerson(30); // Используем `new` для создания объекта
console.log(person.name); // "Alice"
console.log(person.age); // 30
```
---
Проверка работоспособности:
- Обычный вызов с привязкой контекста: работает корректно.
- Передача аргументов: поддерживает как начальные аргументы, так и аргументы, переданные при вызове.
- Использование с `new`: корректно работает с функциями-конструкторами.
Резюме:
Метод `myBind` реализует ключевые функции стандартного `Function.prototype.bind`. Он:
1. Привязывает контекст (`this`) к функции.
2. Поддерживает передачу аргументов.
3. Корректно работает при вызове с `new`.
---------------------
⋙ ❍ Универсальная сумма:
---
⌛ Задача "Универсальная сумма" может означать вычисление суммы элементов в различных структурах данных или суммирование элементов с разными типами данных (например, чисел, строк и других типов). В контексте JavaScript можно рассматривать такие задачи как:
- Суммирование чисел в массиве.
- Суммирование элементов в более сложных структурах данных (например, массив объектов).
- Преобразование данных перед суммированием.
Я покажу несколько вариантов реализации "универсальной суммы" для различных случаев.
1. Сумма чисел в массиве
Простой случай: у нас есть массив чисел, и мы хотим вычислить их сумму.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Метод `reduce()` используется для суммирования всех элементов массива.
- Начальное значение суммы — `0`.
- В результате мы получаем сумму всех элементов массива.
---
2. Универсальная сумма для смешанных типов данных (например, чисел и строк)
Предположим, у нас есть массив, содержащий различные типы данных, такие как числа и строки. Мы хотим суммировать только числовые значения и игнорировать строки.
🎯 Решение:
```javascript
function universalSum(arr) {
  return arr.reduce((sum, item) => {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string' && !isNaN(Number(item))) {
      sum += Number(item);
    }
    return sum;
  }, 0);
}

const mixedArray = [1, '2', 3, '4', 'hello', 5];
console.log(universalSum(mixedArray)); // 15
```
Объяснение:
- В этом примере мы проверяем тип каждого элемента в массиве.
- Если элемент — это число, мы добавляем его к сумме.
- Если элемент — это строка, и её можно преобразовать в число (с помощью `Number()`), то мы также добавляем его к сумме.
- В случае, если элемент не является числом или строкой, мы его игнорируем.
---
3. Суммирование числовых значений в объекте
Иногда данные могут быть представлены в виде объекта, и нам нужно суммировать все числовые значения этого объекта.
🎯 Решение:
```javascript
function sumObjectValues(obj) {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === 'number') {
      sum += value;
    }
    return sum;
  }, 0);
}

const data = {
  a: 10,
  b: 20,
  c: 30,
  d: 'hello',
  e: 40
};

console.log(sumObjectValues(data)); // 100
```
Объяснение:
- Мы используем `Object.values(obj)`, чтобы получить все значения объекта.
- Затем с помощью `reduce()` суммируем только числовые значения.
---
4. Универсальная сумма с условием (например, суммировать только чётные числа)
Иногда может понадобиться суммировать только те элементы, которые удовлетворяют определённому условию (например, только чётные числа).
🎯 Решение:
```javascript
function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumEvenNumbers(numbers)); // 20 (2 + 4 + 6 + 8)
```
Объяснение:
- Мы используем метод `filter()`, чтобы отфильтровать только чётные числа.
- Затем применяем `reduce()`, чтобы суммировать отфильтрованные числа.
---
5. Универсальная сумма для вложенных массивов (плоский массив)
Иногда требуется выполнить сумму элементов, даже если данные находятся в глубоко вложенных массивах. Для этого можно использовать метод, который разворачивает массив.
🎯 Решение с использованием `flat()`:
```javascript
function sumFlattenedArray(arr) {
  return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}

const nestedArray = [1, [2, 3], [4, [5, [6]]]];
console.log(sumFlattenedArray(nestedArray)); // 21 (1 + 2 + 3 + 4 + 5 + 6)
```
Объяснение:
- Мы используем метод `flat(Infinity)`, чтобы "расплющить" массив на все уровни вложенности.
- После этого применяем `reduce()`, чтобы посчитать сумму всех элементов.
---
6. Суммирование с учётом типов (например, строки и числа)
Предположим, что нам нужно суммировать числовые значения, а строки при этом объединять.
🎯 Решение:
```javascript
function sumOrConcatenate(arr) {
  return arr.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc.sum += item;
    } else if (typeof item === 'string') {
      acc.concat += item;
    }
    return acc;
  }, { sum: 0, concat: '' });
}

const mixedArray = [1, 'hello', 2, 'world', 3];
const result = sumOrConcatenate(mixedArray);

console.log(result.sum); // 6
console.log(result.concat); // "helloworld"
```
Объяснение:
- Мы используем `reduce()`, чтобы пройти по всем элементам массива.
- Если элемент является числом, мы добавляем его к сумме.
- Если элемент является строкой, мы добавляем его к строке.
---
7. Суммирование с учётом ключей объектов
Иногда объекты могут содержать числовые значения в разных ключах, и нам нужно посчитать сумму значений всех этих ключей.
🎯 Решение:
```javascript
function sumObjectValuesByKey(obj) {
  return Object.keys(obj).reduce((sum, key) => {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
    return sum;
  }, 0);
}

const object = {
  a: 10,
  b: 20,
  c: 30,
  d: 'hello'
};

console.log(sumObjectValuesByKey(object)); // 60
```
Объяснение:
- Мы используем `Object.keys()` для получения всех ключей объекта и затем с помощью `reduce()` суммируем все числовые значения.
Резюме:
1. Сумма чисел в массиве: Простая задача, решаемая с использованием `reduce()`.
2. Суммирование смешанных типов данных: Мы фильтруем и преобразуем данные перед суммированием.
3. Суммирование значений объектов: Для объектов можно использовать методы `Object.values()` или `Object.keys()` в сочетании с `reduce()`.
4. Суммирование с условием: Например, сумма чётных чисел с использованием `filter()` и `reduce()`.
5. Плоский массив: Если массив вложен, используем `flat()` перед суммированием.


~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: GroupBy:
---
Метод `groupBy` в JavaScript используется для группировки элементов массива по какому-либо критерию. Например, можно сгруппировать элементы по определённому свойству объекта или по значению.
JavaScript не предоставляет встроенный метода `groupBy`, но его можно легко реализовать с помощью стандартных методов массивов, таких как `reduce()` или с использованием библиотеки, например, Lodash.
Давайте рассмотрим, как можно реализовать `groupBy` в чистом JavaScript, а затем пример с использованием Lodash.
1. 🎯 Реализация `groupBy` с использованием `reduce()`
⌛ Пример задачи:
Нам нужно сгруппировать массив объектов по определённому ключу.
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

function groupBy(arr, key) {
  return arr.reduce((result, currentValue) => {
    // Получаем значение ключа для текущего элемента
    const groupKey = currentValue[key];

    // Если в объекте нет такого ключа, создаём новый массив для этой группы
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Добавляем текущий элемент в соответствующую группу
    result[groupKey].push(currentValue);

    return result;
  }, {});  // Начальный результат — это пустой объект
}

const groupedByAge = groupBy(people, 'age');
console.log(groupedByAge);
```
Вывод:
```javascript
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35: [
    { name: 'Eve', age: 35 }
  ]
}
```
Объяснение:
- Мы используем метод `reduce()`, чтобы пройти по каждому элементу массива и сгруппировать элементы по ключу (в данном случае `age`).
- Для каждого элемента мы проверяем, существует ли уже группа с таким ключом. Если не существует, создаём новую.
- В результате возвращается объект, где ключами являются значения из поля `age`, а значениями — массивы людей с этим возрастом.
---
2. 🎯 Реализация `groupBy` с использованием `Map`
Иногда для группировки данных удобно использовать структуру данных `Map`, которая предоставляет быстрый доступ и порядок вставки.
```javascript
function groupBy(arr, key) {
  return arr.reduce((map, obj) => {
    // Получаем значение ключа для текущего объекта
    const groupKey = obj[key];

    // Если группа не существует, создаём её
    if (!map.has(groupKey)) {
      map.set(groupKey, []);
    }

    // Добавляем текущий объект в соответствующую группу
    map.get(groupKey).push(obj);

    return map;
  }, new Map()); // Используем Map вместо объекта
}

const groupedByAgeMap = groupBy(people, 'age');
console.log(groupedByAgeMap);
```
Вывод:
```javascript
Map(3) {
  25 => [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30 => [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35 => [{ name: 'Eve', age: 35 }]
}
```
Объяснение:
- В отличие от обычного объекта, `Map` сохраняет порядок добавления элементов.
- Для группировки мы использовали `Map` с ключами, равными значению поля `age`.
---
3. 🎯 Использование Lodash для `groupBy`
Lodash — это популярная библиотека с набором полезных функций для работы с коллекциями. В Lodash уже есть готовая функция `groupBy()`, которая упрощает задачу.
Чтобы использовать Lodash, необходимо сначала установить его:
```bash
npm install lodash
```
Затем можно использовать его функцию `groupBy()`:
```javascript
const _ = require('lodash');

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

const groupedByAge = _.groupBy(people, 'age');
console.log(groupedByAge);
```
Вывод:
```javascript
{
  '25': [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  '30': [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  '35': [
    { name: 'Eve', age: 35 }
  ]
}
```
Объяснение:
- Функция `_.groupBy` из Lodash работает аналогично нашему решению с использованием `reduce()`, но она гораздо короче и автоматически поддерживает различные типы данных.
---
4. 🎯 Группировка по нескольким полям
Иногда бывает полезно группировать данные по нескольким полям, например, по возрасту и полу. Для этого можно комбинировать ключи.
```javascript
function groupByMultiple(arr, keys) {
  return arr.reduce((result, obj) => {
    // Создаем ключ для каждой группы по всем переданным ключам
    const groupKey = keys.map(key => obj[key]).join('-');

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(obj);
    return result;
  }, {});
}

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 25, gender: 'male' },
  { name: 'David', age: 30, gender: 'male' },
  { name: 'Eve', age: 35, gender: 'female' }
];

const groupedByAgeAndGender = groupByMultiple(people, ['age', 'gender']);
console.log(groupedByAgeAndGender);
```
Вывод:
```javascript
{
  '25-female': [ { name: 'Alice', age: 25, gender: 'female' } ],
  '30-male': [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'David', age: 30, gender: 'male' }
  ],
  '25-male': [ { name: 'Charlie', age: 25, gender: 'male' } ],
  '35-female': [ { name: 'Eve', age: 35, gender: 'female' } ]
}
```
Объяснение:
- Мы создаём уникальный ключ для каждой группы, соединяя значения по указанным полям (в данном случае `age` и `gender`).
- Это позволяет группировать данные по нескольким атрибутам.
Резюме:
1. Использование `reduce()`: Мы можем легко группировать данные, используя метод `reduce()` для накопления результатов в объект или `Map`.
2. Использование Lodash: Если вы используете библиотеку Lodash, то можете использовать её готовую функцию `_.groupBy()`, которая сокращает код.
3. Группировка по нескольким полям: Мы можем комбинировать несколько полей в ключ для создания групп, что позволяет делать сложную группировку.

~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: + - Числа Фибоначчи - РЕКУРСИЯ:
---
Пример с комментариями
function fibonacci(n) {
  if (n <= 1) return n;  // Базовые случаи: F(0) = 0, F(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов для F(n-1) и F(n-2)
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
Для вычисления чисел Фибоначчи с использованием рекурсии в JavaScript, нам нужно создать функцию, которая будет вызывать сама себя для вычисления предыдущих значений последовательности, пока не дойдёт до базовых случаев (0 и 1).
🎯 Решение с рекурсией
Функция для вычисления чисел Фибоначчи будет рекурсивно вызывать себя для \( F(n-1) \) и \( F(n-2) \), пока не достигнет базовых значений:
\[
F(0) = 0
\]
\[
F(1) = 1
\]
🎯 Решение:
```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение:
1. Базовые случаи:
   - Если \( n \) равно 0 или 1, функция сразу возвращает \( n \), так как эти значения являются начальными числами последовательности Фибоначчи.
2. Рекурсивный случай:
   - Для \( n > 1 \) функция возвращает сумму двух предыдущих чисел, вызывая саму себя для \( n - 1 \) и \( n - 2 \).

   Например, для \( n = 5 \):
   \[
   F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1))
   \]
   Этот процесс продолжается до достижения базовых значений.
Проблемы с рекурсией:
- Медленная производительность: Рекурсивный метод может быть неэффективным для больших значений \( n \), так как многократно вычисляются одни и те же подзадачи. Например, для \( F(5) \), функция будет дважды вычислять \( F(3) \) и \( F(2) \), что приводит к экспоненциальному времени выполнения — O(2^n).
- Решение проблемы (мемоизация): Для оптимизации рекурсивного подхода можно использовать технику мемоизации, которая будет хранить результаты уже вычисленных значений.
Оптимизация с использованием мемоизации:
Мемоизация позволяет нам запоминать результаты вычислений, чтобы не повторять одни и те же вычисления.
```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;

  // Проверяем, есть ли уже результат в мемоизации
  if (memo[n]) return memo[n];

  // Сохраняем результат в мемоизации и возвращаем
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение оптимизации:
- Мы добавляем объект `memo`, который будет хранить уже вычисленные значения для каждого \( n \).
- При каждом рекурсивном вызове мы проверяем, есть ли уже результат для текущего значения \( n \). Если есть, мы сразу возвращаем его, чтобы не пересчитывать.
- Мемоизация снижает время выполнения до O(n), так как каждое значение вычисляется только один раз.
Резюме:
1. Рекурсивный способ решения задачи даёт понятный и элегантный способ вычисления чисел Фибоначчи, но для больших значений \( n \) может быть неэффективен из-за экспоненциальной сложности O(2^n).
2. Мемоизация позволяет значительно улучшить производительность, снижая время выполнения до O(n).
Рекурсия является хорошим способом понять саму структуру задачи, но для реальных приложений и больших чисел лучше использовать более эффективные методы (например, итеративные решения или методы с мемоизацией).

~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Числа Фибоначчи - Итеративный способ:
---
Числа Фибоначчи — это последовательность чисел, в которой каждое следующее число является суммой двух предыдущих. Начинается последовательность с 0 и 1. Формально, \( F(0) = 0 \), \( F(1) = 1 \), а для всех \( n > 1 \), \( F(n) = F(n-1) + F(n-2) \).
Для вычисления чисел Фибоначчи существует несколько способов, включая рекурсивный и итеративный. Итеративный способ является более эффективным с точки зрения времени выполнения и памяти, особенно для больших значений.
Итеративный способ вычисления чисел Фибоначчи
В итеративном подходе мы будем использовать два числа для хранения предыдущих значений последовательности и будем обновлять их по мере необходимости, избегая использования рекурсии.
🎯 Решение:
```javascript
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение:
1. Инициализация: Мы начинаем с двух переменных `a` и `b`, которые хранят два первых числа последовательности (0 и 1).
2. Цикл: В цикле мы начинаем с 2 и доходим до \( n \), каждый раз обновляя значения переменных `a` и `b` для вычисления следующего числа Фибоначчи.
   - В каждой итерации мы вычисляем новое число как сумму текущих значений `a` и `b`.
   - Затем обновляем `a` и `b`, чтобы `a` стало равно старому значению `b`, а `b` — новому числу.
3. Возвращаем результат: В конце цикла `b` содержит нужное значение числа Фибоначчи для заданного индекса \( n \).
Пример:
- Для \( n = 10 \), вывод будет `55`, так как 10-е число Фибоначчи в последовательности равно 55:
  \[
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  \]
Преимущества итеративного подхода:
- Время выполнения: Итеративный подход работает за O(n) времени, так как мы проходим по циклу от 2 до \( n \).
- Память: Итеративный подход использует O(1) памяти, поскольку нам нужно хранить только два числа на каждом шаге, а не весь массив.
Резюме:
Итеративный метод является самым эффективным способом вычисления чисел Фибоначчи с точки зрения времени и памяти. Он подходит для расчёта чисел Фибоначчи даже для больших значений \( n \), где рекурсивные методы с высокой сложностью могут быть менее эффективны.


~ ~ ~
---------------------
⋙ ❍ Палиндром:
---
Палиндром — это слово, фраза, число или другая последовательность символов, которая читается одинаково в обоих направлениях (слева направо и справа налево), игнорируя пробелы, знаки препинания и регистр букв.
⌛ Задача: Проверка палиндрома на JavaScript
Для того чтобы проверить, является ли строка палиндромом, можно использовать несколько методов. Рассмотрим основные подходы.
🎯 Решение 1: Простой способ с использованием метода `split()`, `reverse()` и `join()`
1. Мы удаляем все неалфавитные символы и приводим строку к одному регистру.
2. Переворачиваем строку и сравниваем её с оригинальной.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Переворачиваем строку и сравниваем с оригиналом
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем регулярное выражение `[^a-zA-Z0-9]`, чтобы удалить все символы, не являющиеся буквами и цифрами.
- Приводим строку к нижнему регистру с помощью `toLowerCase()`.
- С помощью `split('')` преобразуем строку в массив символов, затем `reverse()` переворачиваем массив, и `join('')` снова объединяем массив в строку.
- Если оригинальная строка и перевёрнутая строки одинаковы, значит, это палиндром.
---
🎯 Решение 2: Использование цикла для проверки палиндрома
Если мы не хотим использовать дополнительные методы, такие как `split()`, `reverse()`, `join()`, можно использовать цикл для проверки каждого символа с обеих сторон строки.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanedStr.length - 1;

  // Сравниваем символы с двух сторон
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы начинаем с двух указателей: один указывает на начало строки, другой — на конец.
- В цикле мы сравниваем символы на соответствующих позициях. Если они не совпадают, то строка не является палиндромом.
- Если мы прошли всю строку и символы с обеих сторон совпали, возвращаем `true`.
---
🎯 Решение 3: Использование `every()` для проверки палиндрома
Метод `every()` позволяет проверить, что все элементы массива удовлетворяют условию. Мы можем использовать его для проверки палиндрома.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return [...cleanedStr].every((char, i) => char === cleanedStr[cleanedStr.length - 1 - i]);
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы превращаем строку в массив с помощью оператора распространения (`...`).
- Метод `every()` проверяет, что каждый символ с позиции `i` совпадает с символом на соответствующей позиции с конца строки.
---
🎯 Решение 4: Проверка палиндрома с помощью стека
Можно использовать структуру данных стек, чтобы проверить, является ли строка палиндромом.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const stack = [];

  // Помещаем все символы в стек
  for (let i = 0; i < cleanedStr.length; i++) {
    stack.push(cleanedStr[i]);
  }

  // Сравниваем строку с элементами стека
  for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i] !== stack.pop()) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы помещаем все символы строки в стек.
- Стек работает по принципу LIFO (последний пришёл — первый ушёл), поэтому при извлечении элементов из стека мы будем проверять их с начала строки.
Резюме:
1. Метод с использованием `reverse()`:
   - Простой способ, но требует больше памяти, так как создаёт новые массивы и строки.
   - Работает за O(n) по времени и O(n) по памяти.
2. Метод с использованием цикла:
   - Экономичен по памяти, так как не требует создания дополнительных структур данных.
   - Работает за O(n) по времени и O(1) по памяти.
3. Метод с использованием `every()`:
   - Функциональный стиль решения, также работает за O(n) по времени и O(n) по памяти.
4. Метод с использованием стека:
   - Использует стек для хранения символов строки.
   - Работает за O(n) по времени и O(n) по памяти.
В зависимости от задачи, вы можете выбрать подход, который лучше всего соответствует вашим требованиям по времени и памяти.

~ ~ ~
---------------------
⋙ ❍ Задача на понимание замыканий\колбеков:
---
1. Создание простого замыкания
⌛ Задача: Напишите функцию, которая создаёт и возвращает другую функцию, запоминающую значение.
🎯 Решение:
```javascript
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```
Объяснение: `inner` является замыканием, потому что оно имеет доступ к переменной `counter` из внешней функции `outer`, даже после того как `outer` завершит выполнение.
---
2. Колбек с асинхронной функцией
⌛ Задача: Напишите функцию, которая принимает колбек и вызывает его после задержки в 1 секунду.
🎯 Решение:
```javascript
function delayedCall(callback) {
  setTimeout(() => {
    callback('Hello after 1 second');
  }, 1000);
}

delayedCall(message => console.log(message)); // "Hello after 1 second" через 1 секунду
```
Объяснение: Мы используем `setTimeout`, чтобы имитировать асинхронную операцию и вызвать переданный колбек через 1 секунду.
---
3. Применение замыкания для счётчика
⌛ Задача: Напишите функцию, которая создаёт счётчик с функциями для увеличения и сброса значения.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    reset: () => { count = 0; },
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
counter.reset();
console.log(counter.getCount()); // 0
```
Объяснение: Мы создаём объект с методами для увеличения, сброса и получения значения счётчика. Переменная `count` остаётся доступной через замыкание.
---
4. Использование замыкания для скрытия данных
⌛ Задача: Напишите функцию, которая инкапсулирует переменную и предоставляет только методы для её изменения.
🎯 Решение:
```javascript
function secretData() {
  let data = 'secret';
  return {
    getData: () => data,
    setData: (newData) => { data = newData; }
  };
}

const secret = secretData();
console.log(secret.getData()); // "secret"
secret.setData('new secret');
console.log(secret.getData()); // "new secret"
```
Объяснение: Переменная `data` инкапсулирована в замыкании и доступна только через публичные методы `getData` и `setData`.
---
5. Колбеки с обработкой ошибок
⌛ Задача: Напишите функцию, которая выполняет операцию и вызывает переданный колбек с ошибкой или результатом.
🎯 Решение:
```javascript
function doOperation(callback) {
  const error = false;
  if (error) {
    callback('Error occurred', null);
  } else {
    callback(null, 'Operation successful');
  }
}

doOperation((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result); // "Operation successful"
  }
});
```
Объяснение: В функции `doOperation` проверяется ошибка, и вызывается колбек с соответствующим значением: ошибкой или результатом.
---
6. Замыкание для формирования уникального идентификатора
⌛ Задача: Напишите функцию, которая генерирует уникальные идентификаторы.
🎯 Решение:
```javascript
function uniqueIdGenerator() {
  let id = 0;
  return function() {
    return ++id;
  };
}

const getId = uniqueIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
```
Объяснение: Функция `uniqueIdGenerator` создаёт замыкание для переменной `id`, которая инкрементируется при каждом вызове внутренней функции.
---
7. Асинхронные колбеки с использованием `setTimeout`
⌛ Задача: Напишите функцию, которая вызывает колбек после 2 секунд задержки.
🎯 Решение:
```javascript
function delayedMessage(callback) {
  setTimeout(() => {
    callback('Message after 2 seconds');
  }, 2000);
}

delayedMessage(msg => console.log(msg)); // "Message after 2 seconds" через 2 секунды
```
Объяснение: Мы используем `setTimeout`, чтобы задержать выполнение колбека на 2 секунды.
---
8. Замыкание для создания приватных переменных
⌛ Задача: Напишите функцию, которая инкапсулирует переменные, предоставляя доступ только через методы.
🎯 Решение:
```javascript
function createPerson(name, age) {
  return {
    getName: () => name,
    getAge: () => age,
    setName: (newName) => { name = newName; },
    setAge: (newAge) => { age = newAge; }
  };
}

const person = createPerson('Alice', 30);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
person.setName('Bob');
person.setAge(35);
console.log(person.getName()); // Bob
console.log(person.getAge()); // 35
```
Объяснение: Переменные `name` и `age` скрыты внутри замыкания, и их можно изменить только через публичные методы.
---
9. Колбек для асинхронной загрузки данных
⌛ Задача: Напишите функцию, которая имитирует асинхронную загрузку данных и вызывает переданный колбек.
🎯 Решение:
```javascript
function loadData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

loadData(data => console.log(data)); // "Data loaded" через 1 секунду
```
Объяснение: Используем `setTimeout`, чтобы симулировать асинхронную операцию, которая вызывает колбек после 1 секунды.
---
10. Колбек с фильтрацией данных
⌛ Задача: Напишите функцию, которая фильтрует элементы массива с использованием колбека.
🎯 Решение:
```javascript
function filterArray(arr, callback) {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```
Объяснение: Функция `filterArray` использует колбек для фильтрации элементов массива, возвращая только чётные числа.
---
11. Замыкание для создания счётчика с ограничением
⌛ Задача: Напишите функцию, которая создаёт счётчик с максимальным значением.
🎯 Решение:
```javascript
function createLimitedCounter(max) {
  let count = 0;
  return function() {
    if (count < max) {
      count++;
    }
    return count;
  };
}

const counter = createLimitedCounter(5);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
console.log(counter()); // 5 (дальше не увеличивается)
```
Объяснение: Внутри замыкания переменная `count` ограничена максимальным значением `max`.
---
12. Замыкание для создания таймера
⌛ Задача: Напишите функцию, которая отсчитывает время, вызывая колбек каждую секунду.
🎯 Решение:
```javascript
function startTimer(callback) {
  let time = 0;
  setInterval(() => {
    time++;
    callback(time);
  }, 1000);
}

startTimer(time => console.log(`Time: ${time}s`));
```
Объяснение: Используем `setInterval`, чтобы вызывать колбек каждую секунду и отслеживать время.
---
13. Замыкание для создания и отслеживания состояния
⌛ Задача: Напишите функцию, которая инкапсулирует состояние и изменяет его через публичные методы.
🎯 Решение:
```javascript
function createState(initialValue) {
  let state = initialValue;
  return {
    getState: () => state,
    setState: (newState) => { state = newState; }
  };
}

const state = createState(0);
console.log(state.getState()); // 0
state.setState(10);
console.log(state.getState()); // 10
```
Объяснение: Состояние инкапсулировано внутри замыкания и доступно только через публичные методы.
---
14. Колбек с асинхронной обработкой нескольких данных
⌛ Задача: Напишите функцию, которая принимает массив данных и вызывает колбек для каждого элемента.
🎯 Решение:
```javascript
function processData(data, callback) {
  data.forEach(item => {
    callback(item);
  });
}

processData([1, 2, 3, 4], item => console.log(item * 2)); // 2 4 6 8
```
Объяснение: Мы проходим по всем данным и вызываем колбек для каждого элемента массива.
---
15. Внешний и внутренний счётчик
⌛ Задача: Напишите функцию, которая увеличивает счётчик в зависимости от внешнего значения.
🎯 Решение:
```javascript
function createCounter(increment) {
  let count = 0;
  return function() {
    count += increment;
    return count;
  };
}

const counter = createCounter(2);
console.log(counter()); // 2
console.log(counter()); // 4
console.log(counter()); // 6
```
Объяснение: Внутренний счётчик зависит от значения, переданного в качестве аргумента функции `createCounter`.
---
16. Колбек с выводом результата
⌛ Задача: Напишите функцию, которая выводит результат асинхронной операции через колбек.
🎯 Решение:
```javascript
function asyncOperation(callback) {
  setTimeout(() => {
    callback('Operation completed');
  }, 1500);
}

asyncOperation(result => console.log(result)); // "Operation completed" через 1.5 секунды
```
Объяснение: Мы используем `setTimeout`, чтобы симулировать асинхронную операцию и вызвать колбек через 1.5 секунды.
---
17. Закрытие доступа через замыкание
⌛ Задача: Напишите функцию, которая защищает доступ к приватным данным через замыкание.
🎯 Решение:
```javascript
function createPrivateData() {
  let privateData = 'secret';
  return {
    getPrivateData: () => privateData,
    setPrivateData: (newData) => { privateData = newData; }
  };
}

const data = create


~ ~ ~
---------------------
⋙ ❍ Задача с концертами?:
---
Задача с концертами обычно может быть связана с выбором времени для мероприятий, например, когда вам нужно организовать несколько концертов и обеспечить, чтобы они не пересекались по времени, либо найти оптимальный способ организовать концерты, чтобы они не конфликтовали.
Давайте рассмотрим типичную задачу, связанную с расписанием концертов:
⌛ Задача: Найти максимальное количество концертов, которые можно посетить
У нас есть список концертов, каждый из которых имеет начальное и конечное время. Нужно найти максимальное количество концертов, которые можно посетить, если концерты не должны пересекаться по времени.
Алгоритм решения:
1. Сначала отсортируем концерты по времени их завершения.
2. Для каждого концерта будем проверять, можно ли его посетить, не пересекаясь с уже выбранными концертами.
3. Для этого будем хранить время окончания последнего выбранного концерта.
🎯 Решение:
Пример данных:
- Каждый концерт представлен объектом с полями `start` (начало концерта) и `end` (конец концерта).
```javascript
function maxConcerts(concerts) {
  // Сортируем концерты по времени их завершения
  concerts.sort((a, b) => a.end - b.end);

  let count = 0;
  let lastEndTime = 0;

  // Итерируем по всем концертам
  for (let i = 0; i < concerts.length; i++) {
    const concert = concerts[i];

    // Если начало концерта позже времени окончания последнего выбранного концерта, можно посетить этот концерт
    if (concert.start >= lastEndTime) {
      count++;
      lastEndTime = concert.end;  // Обновляем время окончания последнего выбранного концерта
    }
  }

  return count;
}

// Пример использования:
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 },
  { start: 5, end: 7 }
];

const result = maxConcerts(concerts);
console.log(result); // 3 (можно посетить концерты с временем [1-3], [3-5] и [5-7])
```
Объяснение:
1. Мы начинаем с сортировки концертов по времени их завершения (`concert.end`), так как это позволяет нам эффективно выбирать концерты, которые заканчиваются как можно раньше.
2. Затем мы начинаем с первого концерта и проверяем, можем ли посетить его, учитывая, что концерт может быть посещён, если его начало не совпадает с или позже времени завершения предыдущего выбранного концерта.
3. Если можем посетить концерт, увеличиваем счётчик `count` и обновляем `lastEndTime` на время окончания этого концерта.
Пример 1:
```javascript
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 },
  { start: 5, end: 7 }
];

const result = maxConcerts(concerts);
console.log(result); // 3
```
Здесь мы можем посетить:
- Концерт с временем [1-3],
- Концерт с временем [3-5],
- Концерт с временем [5-7].
Итого: 3 концерта.
Пример 2:
```javascript
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 5, end: 7 },
  { start: 6, end: 8 },
  { start: 8, end: 9 }
];

const result = maxConcerts(concerts);
console.log(result); // 4
```
Здесь можно посетить:
- Концерт с временем [1-3],
- Концерт с временем [5-7],
- Концерт с временем [8-9].
Итого: 4 концерта.
Объяснение алгоритма:
- Сортировка: Мы сортируем концерты по времени окончания, потому что нужно всегда выбирать концерт, который заканчивается раньше, чтобы освободить время для следующего.
- Перебор: После сортировки мы просто перебираем массив и выбираем те концерты, которые не перекрывают друг друга.
Этот алгоритм работает за O(n log n), где `n` — это количество концертов, так как основное время уходит на сортировку массива концертов. После сортировки выбор концертов происходит за O(n).
Резюме:
Этот метод позволяет эффективно найти максимальное количество концертов, которые можно посетить, не сталкиваясь с пересечениями. Мы используем жадный алгоритм, который на каждом шаге выбирает концерт, который завершится как можно раньше, освобождая время для последующих мероприятий.


~ ~ ~

---------------------
⋙ ❍ Периметр закрашенной области:
---
Для нахождения периметра закрашенной области (например, области на двумерной сетке или в некоторой фигуре), необходимо учитывать как саму область, так и её границы. Если область ограничена определенной формой (например, прямоугольником или многоугольником), то задача сводится к вычислению длины периметра этой фигуры.
Допустим, у нас есть массив координат, представляющий вершины закрашенной области (например, многоугольника), и мы хотим вычислить периметр этой области.
⌛ Задача: Найти периметр закрашенной области (многоугольника)
Предположим, что нам даны координаты вершин многоугольника (в двумерной системе координат), и мы должны вычислить периметр, соединяя эти вершины.
Периметр многоугольника можно вычислить, сложив расстояния между каждой парой соседних вершин.
Формула для вычисления расстояния между двумя точками \((x_1, y_1)\) и \((x_2, y_2)\) в 2D пространстве:
\[
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\]
🎯 Решение на JavaScript
1. Мы будем рассчитывать расстояние между каждой парой соседних точек.
2. Учитываем, что многоугольник замкнут, т.е. последняя точка соединяется с первой.
```javascript
function calculatePerimeter(coords) {
  let perimeter = 0;

  for (let i = 0; i < coords.length; i++) {
    // Индекс следующей точки, если i == последняя точка, то следующая точка - первая
    const nextIndex = (i + 1) % coords.length;

    const x1 = coords[i][0];
    const y1 = coords[i][1];
    const x2 = coords[nextIndex][0];
    const y2 = coords[nextIndex][1];

    // Вычисление расстояния между точками (x1, y1) и (x2, y2)
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    perimeter += distance;
  }

  return perimeter;
}

// Пример использования:
const polygonCoordinates = [
  [0, 0],  // Точка 1
  [4, 0],  // Точка 2
  [4, 3],  // Точка 3
  [0, 3]   // Точка 4
];

const perimeter = calculatePerimeter(polygonCoordinates);
console.log(perimeter); // 14 (периметр прямоугольника)
```
Объяснение:
1. Перебор координат: Мы перебираем все точки массива, где каждая точка имеет координаты в виде `[x, y]`.
2. Расстояние между соседними точками: Для каждой пары соседних точек (с учётом того, что последняя точка соединяется с первой), мы вычисляем расстояние с использованием формулы Евклида.
3. Замкнутый многоугольник: Поскольку последний узел соединяется с первым, для последней точки мы берём индекс первой точки (через операцию `(i + 1) % coords.length`).
Пример 1: Прямоугольник
- Вершины: `[0, 0], [4, 0], [4, 3], [0, 3]`
- Периметр будет \(4 + 3 + 4 + 3 = 14\).
Пример 2: Треугольник
- Вершины: `[0, 0], [4, 0], [2, 3]`
- Периметр будет \(5 + 4 + 3 = 12\).
```javascript
const triangleCoordinates = [
  [0, 0],  // Точка 1
  [4, 0],  // Точка 2
  [2, 3]   // Точка 3
];

const perimeterTriangle = calculatePerimeter(triangleCoordinates);
console.log(perimeterTriangle); // 12
```
Общий случай:
Этот алгоритм работает для любого многоугольника с любым количеством вершин (и выпуклого, и вогнутого), так как мы учитываем все его стороны и замкнутость.
Дополнительные замечания:
- Этот подход работает только для двумерных многоугольников.
- Если нужно учитывать многоугольники, имеющие "вырезанные" или полые области, подход должен быть доработан (например, с использованием метода для вычисления площади, например, с учётом Внешнего и Внутреннего периметра).
Заключение:
Для нахождения периметра закрашенной области в JavaScript можно использовать методы, подобные приведённому решению. Важно учитывать, что каждый многоугольник может иметь разное количество сторон, и периметр следует вычислять через сумму расстояний между соседними вершинами.


~ ~ ~
---------------------
⋙ ❍ Задачи с числами и массивом:
---
1. Сумма всех элементов массива
⌛ Задача: Напишите функцию, которая находит сумму всех элементов массива.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
```
Объяснение: Используем метод `reduce()` для нахождения суммы элементов массива.
---
2. Уникальные элементы в массиве
⌛ Задача: Напишите функцию, которая возвращает новый массив, содержащий только уникальные элементы из исходного массива.
🎯 Решение:
```javascript
function uniqueElements(arr) {
  return [...new Set(arr)];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```
Объяснение: Используем `Set`, который автоматически удаляет дубликаты, и оператор расширения для преобразования его обратно в массив.
---
3. Найти наибольшее число в массиве
⌛ Задача: Напишите функцию, которая находит наибольшее число в массиве.
🎯 Решение:
```javascript
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
```
Объяснение: Используем метод `Math.max()` в сочетании с оператором расширения для нахождения максимального значения в массиве.
---
4. Перевернуть массив
⌛ Задача: Напишите функцию, которая переворачивает массив.
🎯 Решение:
```javascript
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```
Объяснение: Метод `reverse()` изменяет массив, переставляя его элементы в обратном порядке.
---
5. Проверка на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка или массив палиндромом.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение: Сначала переворачиваем строку и сравниваем её с исходной.
---
6. Найти второй по величине элемент в массиве
⌛ Задача: Напишите функцию, которая находит второй по величине элемент в массиве.
🎯 Решение:
```javascript
function secondLargest(arr) {
  const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArr[1] || null;
}

console.log(secondLargest([1, 3, 2, 4])); // 3
```
Объяснение: Сначала удаляем дубликаты с помощью `Set`, затем сортируем массив по убыванию и возвращаем второй элемент.
---
7. Проверка массива на отсортированность
⌛ Задача: Напишите функцию, которая проверяет, отсортирован ли массив по возрастанию.
🎯 Решение:
```javascript
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false
```
Объяснение: Проверяем, что каждый элемент массива не меньше предыдущего.
---
8. Нахождение индекса первого вхождения элемента
⌛ Задача: Напишите функцию, которая находит индекс первого вхождения элемента в массиве.
🎯 Решение:
```javascript
function findIndex(arr, value) {
  return arr.indexOf(value);
}

console.log(findIndex([1, 2, 3, 4], 3)); // 2
```
Объяснение: Метод `indexOf()` возвращает индекс первого вхождения элемента в массив или `-1`, если элемент не найден.
---
9. Сумма четных чисел в массиве
⌛ Задача: Напишите функцию, которая находит сумму всех чётных чисел в массиве.
🎯 Решение:
```javascript
function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4])); // 6
```
Объяснение: Мы используем `filter()` для выбора чётных чисел и `reduce()` для вычисления их суммы.
---
10. Умножить все элементы массива на число
⌛ Задача: Напишите функцию, которая умножает все элементы массива на заданное число.
🎯 Решение:
```javascript
function multiplyArray(arr, multiplier) {
  return arr.map(num => num * multiplier);
}

console.log(multiplyArray([1, 2, 3], 2)); // [2, 4, 6]
```
Объяснение: Используем `map()`, чтобы умножить каждый элемент массива на заданное число.
---
11. Перевести строку в массив чисел
⌛ Задача: Напишите функцию, которая принимает строку чисел, разделённых пробелами, и преобразует её в массив чисел.
🎯 Решение:
```javascript
function stringToArray(str) {
  return str.split(' ').map(Number);
}

console.log(stringToArray("1 2 3 4")); // [1, 2, 3, 4]
```
Объяснение: Используем `split()` для разделения строки на элементы массива, затем используем `map(Number)` для преобразования их в числа.
---
12. Удалить дубликаты в массиве
⌛ Задача: Напишите функцию, которая удаляет все дубликаты из массива.
🎯 Решение:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 1, 2])); // [1, 2, 3]
```
Объяснение: Используем `Set`, который хранит только уникальные значения.
---
13. Разделить массив на два подмассива
⌛ Задача: Напишите функцию, которая делит массив на два подмассива.
🎯 Решение:
```javascript
function splitArray(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}
console.log(splitArray([1, 2, 3, 4, 5])); // [[1, 2], [3, 4, 5]]
```
Объяснение: Мы используем `slice()`, чтобы разделить массив на два подмассива по середине.
---
14. Найти минимальное значение в массиве
⌛ Задача: Напишите функцию, которая находит минимальное значение в массиве.
🎯 Решение:
```javascript
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 1, 8, 2])); // 1
```
Объяснение: Мы используем `Math.min()` с оператором расширения для поиска минимального значения.
---
15. Преобразовать массив строк в одну строку
⌛ Задача: Напишите функцию, которая преобразует массив строк в одну строку, разделённую пробелами.
🎯 Решение:
```javascript
function joinStrings(arr) {
  return arr.join(' ');
}

console.log(joinStrings(["Hello", "world"])); // "Hello world"
```
Объяснение: Метод `join()` объединяет элементы массива в строку, используя заданный разделитель.
---
16. Сортировать массив по убыванию
⌛ Задача: Напишите функцию, которая сортирует массив по убыванию.
🎯 Решение:
```javascript
function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 2])); // [4, 3, 2, 1]
```
Объяснение: Мы используем метод `sort()` с функцией сравнения, чтобы отсортировать массив по убыванию.
---
17. Найти среднее значение массива
⌛ Задача: Напишите функцию, которая находит среднее значение всех чисел в массиве.
🎯 Решение:
```javascript
function average(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log(average([1, 2, 3, 4])); // 2.5
```
Объяснение: Мы используем `reduce()` для нахождения суммы всех элементов массива и делим её на длину массива.


  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Обход n-го дерево:
---
Обход n-арного дерева (или дерева с произвольным числом дочерних узлов) в JavaScript можно выполнить различными методами, такими как обход в глубину (DFS) или обход в ширину (BFS).
🎯 Решение:
1. Определение структуры n-арного дерева
Прежде чем приступить к обходу, давайте определим структуру n-арного дерева. В n-арном дереве каждый узел может иметь произвольное количество дочерних узлов.
Каждый узел будет представлять собой объект, в котором:
- `value` — значение узла.
- `children` — массив дочерних узлов.
Пример структуры n-арного дерева:
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}
```
Теперь давайте реализуем два типа обхода: обход в глубину (DFS) и обход в ширину (BFS).
---
2. Обход в глубину (DFS)
Обход в глубину можно реализовать двумя способами:
1. Рекурсивно — через рекурсивные вызовы.
2. Итеративно — через стек.
🎯 Решение (Рекурсивный DFS):
```javascript
function depthFirstSearch(root) {
  console.log(root.value); // Обрабатываем текущий узел

  // Рекурсивно обходим всех дочерних узлов
  for (let child of root.children) {
    depthFirstSearch(child);
  }
}

// Пример использования:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

depthFirstSearch(root);
// Вывод: 1 2 3 4 (обход в глубину)
```
Объяснение:
- Мы начинаем с корня дерева и рекурсивно обходим все дочерние узлы.
- Для каждого узла выводим его значение, затем рекурсивно вызываем функцию для каждого из дочерних узлов.
🎯 Решение (Итеративный DFS):
```javascript
function depthFirstSearchIterative(root) {
  const stack = [root]; // Стек для хранения узлов

  while (stack.length > 0) {
    const node = stack.pop(); // Берем последний элемент из стека
    console.log(node.value); // Обрабатываем узел

    // Добавляем детей в стек (в порядке обхода)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
}

// Пример использования:
depthFirstSearchIterative(root);
// Вывод: 1 2 3 4 (обход в глубину)
```
Объяснение:
- В итеративной версии мы используем стек, чтобы вручную управлять обходом. Мы добавляем дочерние узлы в стек, начиная с последнего, чтобы сохранить правильный порядок обхода.
---
3. Обход в ширину (BFS)
Обход в ширину используется для обхода дерева уровни за уровнем. Для этого мы используем очередь.
🎯 Решение (BFS):
```javascript
function breadthFirstSearch(root) {
  const queue = [root]; // Очередь для хранения узлов

  while (queue.length > 0) {
    const node = queue.shift(); // Берем первый элемент из очереди
    console.log(node.value); // Обрабатываем узел

    // Добавляем детей в очередь
    for (let child of node.children) {
      queue.push(child);
    }
  }
}

// Пример использования:
breadthFirstSearch(root);
// Вывод: 1 2 3 4 (обход в ширину)
```
Объяснение:
- В BFS мы используем очередь для обхода дерева уровни за уровнем.
- Сначала обрабатываем корень, затем добавляем всех его детей в очередь, и так продолжаем, пока очередь не станет пустой.
---
4. Пример использования
🎯 Давайте создадим пример дерева и используем оба алгоритма обхода.
```javascript
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

const child11 = new Node(5);
const child12 = new Node(6);

child1.addChild(child11);
child1.addChild(child12);

// Обход в глубину (рекурсивно)
console.log("DFS (рекурсивно):");
depthFirstSearch(root);

// Обход в ширину
console.log("BFS:");
breadthFirstSearch(root);
```
Результат:
```
DFS (рекурсивно):
1
2
5
6
3
4

BFS:
1
2
3
4
5
6
```
5. Вывод:
- DFS (Обход в глубину): Рекурсивно или итеративно исследуется каждый узел в глубину. Это полезно для поиска элементов или выполнения операций, которые требуют полного изучения пути в дереве.
- BFS (Обход в ширину): Обрабатывает все узлы на текущем уровне, прежде чем переходить к следующему уровню. Это полезно, например, для поиска наименьшего пути в графах.


  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Объединить отсорт. масссивы:
---
Объединение отсортированных массивов в JavaScript можно выполнить с помощью различных методов. Так как оба массива уже отсортированы, самым эффективным способом будет использование метода слияния двух отсортированных массивов, который работает за O(n) (где n — это количество элементов в обоих массивах).
Алгоритм объединения отсортированных массивов:
1. Используем два указателя, которые будут перемещаться по двум массивам.
2. Сравниваем элементы с текущих позиций в обоих массивах.
3. Добавляем наименьший элемент в новый массив и сдвигаем соответствующий указатель.
4. Если один массив заканчивается, добавляем оставшиеся элементы из другого массива.
🎯 Решение:
```javascript
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0; // Указатель для первого массива
  let j = 0; // Указатель для второго массива

  // Пока оба массива не пусты
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Добавляем оставшиеся элементы из первого массива, если они есть
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Добавляем оставшиеся элементы из второго массива, если они есть
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Пример использования:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
1. Два указателя:
   - `i` и `j` — это указатели для двух массивов `arr1` и `arr2`.
   - Мы сравниваем элементы на позициях `i` и `j` и добавляем наименьший элемент в новый массив.
2. Цикл объединения:
   - Пока оба массива не пусты, мы добавляем наименьший элемент в массив `result` и двигаем указатель на тот массив, откуда был выбран элемент.
3. Остаточные элементы:
   - После завершения основного цикла, если один из массивов ещё не был полностью обработан, мы добавляем оставшиеся элементы из другого массива в результат.
Пример с другими массивами:
```javascript
const arr1 = [1, 4, 6, 8];
const arr2 = [2, 3, 5, 7, 9];

const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Альтернативный подход (с использованием `concat()` и `sort()`)
Если вам не важна эффективность (когда массивы маленькие или вам не требуется строгая оптимизация), вы можете просто объединить два массива и отсортировать их:
```javascript
function mergeAndSortArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Пример использования:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = mergeAndSortArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Мы объединяем два массива с помощью оператора распространения (`...`) и затем сортируем объединённый массив с помощью метода `.sort()`. Однако этот метод работает за O(n log n), что медленнее, чем метод слияния, если массивы уже отсортированы.
Резюме:
1. Если оба массива отсортированы, лучше использовать метод **слияния с двумя указателями**, который работает за O(n).
2. Если массивы не отсортированы, можно использовать метод объединения с `concat()` и `sort()`, но это менее эффективно для больших массивов.


  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: найти простые числа в массиве:
---
Чтобы найти простые числа в массиве с использованием Vanilla JavaScript, нам нужно создать функцию, которая будет проверять, является ли число простым, и затем использовать её для фильтрации чисел в массиве.
Простое число — это число больше 1, которое делится только на 1 и на себя.
Алгоритм:
1. Число считается простым, если оно больше 1 и не имеет делителей, кроме 1 и самого себя.
2. Для проверки делимости можно пройтись по числам от 2 до квадратного корня из проверяемого числа, так как если число делится на какое-то число больше, его делители будут найдены раньше.
🎯 Решение:
```javascript
function isPrime(num) {
  if (num <= 1) return false; // Число должно быть больше 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Если находим делитель, число не простое
    }
  }
  return true; // Если делителей не найдено, число простое
}

function findPrimes(arr) {
  return arr.filter(isPrime); // Фильтруем массив, оставляя только простые числа
}
// Пример использования
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15];
const primes = findPrimes(numbers);

console.log(primes); // [2, 3, 5, 7, 11, 13]
```
Объяснение:
1. `isPrime(num)` — функция для проверки простоты числа. Мы проверяем, делится ли число на другие числа от 2 до квадратного корня из числа. Если делитель найден, то число не простое.
2. `findPrimes(arr)` — эта функция фильтрует массив, оставляя только простые числа. Мы используем метод массива `.filter()`, чтобы пройти по всем элементам и оставить только те, для которых `isPrime()` возвращает `true`.
Оптимизация:
- Вместо проверки делимости на все числа до самого числа, мы проверяем только до квадратного корня. Это значительно уменьшает количество операций, особенно для больших чисел.
Пример с выводом:
```javascript
const numbers = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 23, 24];
const primes = findPrimes(numbers);
console.log(primes);  // [2, 3, 5, 17, 19, 23]
```

~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Конвертировать цену:
---
Конвертация цены в JavaScript и React может быть полезной в различных ситуациях, например, при изменении валюты или форматировании чисел. Давайте рассмотрим два примера — один с чистым JavaScript и другой с использованием React.
1. Конвертация цены с использованием JavaScript
Предположим, что у нас есть цена в одной валюте, и мы хотим конвертировать её в другую валюту, используя фиксированный курс.
🎯 Решение с JavaScript:
```javascript
// Функция для конвертации цены
function convertPrice(amount, conversionRate) {
  return (amount * conversionRate).toFixed(2); // Округление до двух знаков после запятой
}
// Пример использования
const priceInUSD = 100; // Цена в долларах
const conversionRateToEUR = 0.85; // Курс 1 USD = 0.85 EUR
const priceInEUR = convertPrice(priceInUSD, conversionRateToEUR);
console.log(`Цена в долларах: $${priceInUSD}`);
console.log(`Цена в евро: €${priceInEUR}`);
```
Объяснение:
- Мы создаём функцию `convertPrice`, которая принимает сумму и курс конверсии.
- Метод `toFixed(2)` используется для округления результата до двух знаков после запятой.
---
2. Конвертация цены с использованием React
В React, мы можем создать компонент для отображения и конвертации цен, который будет принимать значения через props и вычислять цену на основе выбора валюты.
🎯 Решение с React:
```jsx
import React, { useState } from 'react';

function PriceConverter() {
  const [price, setPrice] = useState(100); // Начальная цена
  const [currency, setCurrency] = useState('USD');

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * conversionRates[currency]).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
      </div>

      <div>
        <p>Цена в {currency}: {convertedPrice}</p>
      </div>
    </div>
  );
}

export default PriceConverter;
```
Объяснение:
- `useState` используется для управления состоянием цены и выбранной валюты.
- `conversionRates` содержит коэффициенты для каждой валюты.
- Мы отображаем цену в выбранной валюте, вычисляя её с помощью коэффициента преобразования и округляя до двух знаков после запятой с помощью `.toFixed(2)`.
- Пользователь может изменять цену и валюту через поля ввода и выпадающий список.
---
3. Пример использования с реальными данными (API)
Если вам нужно использовать реальный API для получения курсов валют, вы можете использовать API, такие как [ExchangeRate-API](https://www.exchangerate-api.com/), чтобы получить актуальные курсы валют.
```javascript
import React, { useState, useEffect } from 'react';

function PriceConverterWithAPI() {
  const [price, setPrice] = useState(100);
  const [currency, setCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      });
  }, []);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * (rates[currency] || 1)).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены с использованием реального API</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            disabled={loading}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency} disabled={loading}>
            {Object.keys(rates).map((currencyCode) => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        <div>
          <p>Цена в {currency}: {convertedPrice}</p>
        </div>
      )}
    </div>
  );
}

export default PriceConverterWithAPI;
```
Объяснение:
- `useEffect` используется для загрузки актуальных курсов валют через API при монтировании компонента.
- При изменении валюты или цены происходит пересчёт с учётом актуального курса.
- Компонент отображает «Загрузка данных...» до тех пор, пока курсы валют не будут получены.
Резюме:
- В JavaScript можно создать простую функцию для конвертации цен, используя фиксированные курсы валют.
- В React мы можем сделать это интерактивно, позволяя пользователю выбирать цену и валюту.
- Для получения актуальных курсов валют можно использовать внешний API.


  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Индексы бд на алгоритмах:
---
Индексы в базах данных используются для ускорения поиска и извлечения данных. Индексы помогают ускорить выполнение запросов, не сканируя всю таблицу, а только определённые данные, например, через бинарные деревья или хэш-таблицы.
В контексте реализации на JavaScript, можно имитировать работу с базой данных, создавая индексы для поиска по данным, например, с использованием бинарного поиска или хэш-таблиц.
1. Индексы на основе бинарного дерева поиска (BST)
Бинарное дерево поиска — это структура данных, где для каждого узла выполняется условие, что левый дочерний узел имеет меньшее значение, а правый — большее.
🎯 Решение: Реализация бинарного дерева поиска
```javascript
class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new TreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (key > current.key) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        current.value = value; // Обновляем значение, если ключ существует
        return;
      }
    }
  }

  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) return current.value;
      if (key < current.key) current = current.left;
      else current = current.right;
    }
    return null; // Если элемент не найден
  }

  delete(key) {
    this.root = this._deleteRecursively(this.root, key);
  }

  _deleteRecursively(node, key) {
    if (!node) return node;

    if (key < node.key) {
      node.left = this._deleteRecursively(node.left, key);
    } else if (key > node.key) {
      node.right = this._deleteRecursively(node.right, key);
    } else {
      // Если ключ найден
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      node.key = this._findMin(node.right).key; // Находим минимальный элемент в правом поддереве
      node.right = this._deleteRecursively(node.right, node.key);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
}

const bst = new BinarySearchTree();
bst.insert(50, "value 50");
bst.insert(30, "value 30");
bst.insert(70, "value 70");
bst.insert(20, "value 20");
bst.insert(40, "value 40");

console.log(bst.search(30)); // "value 30"
bst.delete(30);
console.log(bst.search(30)); // null
```
Объяснение:
- В этом примере мы создаем бинарное дерево поиска (BST), где:
  - Каждый узел имеет ключ и значение.
  - Для поиска и вставки мы рекурсивно сравниваем ключи и находим правильную позицию для каждого нового узла.
  - Метод `delete` позволяет удалять узлы с учётом трех вариантов: отсутствие детей, один ребенок и два ребенка.
---
2. Индексы с использованием хэш-таблиц
Хэш-таблица использует хэш-функцию для вычисления индекса в массиве, где каждый ключ будет хранить своё значение. Это позволяет делать поиск, вставку и удаление за O(1) в среднем случае.
🎯 Решение: Реализация хэш-таблицы
```javascript
class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  search(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return null;

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) return value;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("country", "USA");

console.log(hashTable.search("age")); // 25
console.log(hashTable.search("country")); // "USA"
hashTable.delete("age");
console.log(hashTable.search("age")); // null
```
Объяснение:
- В хэш-таблице мы используем массив для хранения элементов, а каждый элемент вычисляется с использованием хэш-функции.
- Хэш-функция генерирует индекс на основе строки ключа.
- В случае коллизий (когда два ключа хэшируются в одинаковый индекс) мы используем массив внутри ячейки для хранения пары ключ-значение.
- Методы `insert`, `search` и `delete` работают с хэш-таблицей с использованием индекса.
---
3. Индексы на основе сортированного массива (двойной индексации)
Этот метод используется для ускорения поиска в таблицах, когда индексы отсортированы. Такой подход полезен для хранения данных, которые могут быть отсортированы по определённому ключу.
🎯 Решение: Реализация индекса с сортировкой
```javascript
class SortedIndex {
  constructor() {
    this.data = [];
  }

  insert(key, value) {
    this.data.push([key, value]);
    this.data.sort((a, b) => a[0] - b[0]);  // Сортируем по ключу
  }

  search(key) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.data[mid][0] === key) return this.data[mid][1];
      if (this.data[mid][0] < key) left = mid + 1;
      else right = mid - 1;
    }

    return null;  // Если ключ не найден
  }

  delete(key) {
    const index = this.data.findIndex(item => item[0] === key);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;  // Если элемент не найден
  }
}

const index = new SortedIndex();
index.insert(1, "apple");
index.insert(3, "banana");
index.insert(2, "cherry");

console.log(index.search(2)); // "cherry"
index.delete(2);
console.log(index.search(2)); // null
```
Объяснение:
- Мы создаем отсортированный индекс, который поддерживает сортировку по ключу.
- Метод `insert` добавляет элементы и сразу сортирует массив.
- Для поиска мы используем бинарный поиск, чтобы найти элемент по ключу за O(log N).
- Метод `delete` удаляет элемент, используя поиск по индексу.
Резюме:
1. Бинарное дерево поиска (BST) — используется для хранения элементов с быстрым поиском, добавлением и удалением. Каждый узел хранит ключ и значение, и структура данных поддерживает быструю вставку и поиск по ключу.
2. Хэш-таблица — более эффективная структура данных для быстрого поиска с использованием хэш-функции. Столкновение решается через связанный список внутри ячеек.
3. Сортированный массив — полезен для задач, где важен порядок и нужно быстро находить элементы через бинарный поиск.


  ~ ~ ~
---------------------
⋙ ❍ Хэш-таблицы (!хэшмап)(массив, остаток от деления и два вида разрешения коллизий разрешаются связанным списком):
---
Реализация хэш-таблицы с разрешением коллизий с использованием связанного списка
⌛ Задача: Реализуйте хэш-таблицу, используя массив для хранения элементов и метод разрешения коллизий через связанные списки. В хэш-таблице данные будут храниться в виде пар ключ-значение. При коллизии (когда два ключа имеют одинаковый хэш) элементы будут храниться в связанном списке.
🎯 Решение:
1. Массив как базовая структура: Хэш-таблица использует массив для хранения элементов. Индекс для каждого элемента будет вычисляться как остаток от деления хэш-функции.
2. Хэш-функция: Для получения индекса мы будем использовать простую хэш-функцию, которая возвращает остаток от деления на размер массива.
3. Разрешение коллизий: В случае коллизий (когда два элемента имеют одинаковый индекс) мы будем хранить элементы в связанном списке на этом индексе. Связанный список будет содержать элементы с одинаковым хэшом.
4. Операции:
   - Добавление: Добавление элемента в хэш-таблицу с использованием хэш-функции.
   - Поиск: Поиск элемента в хэш-таблице по ключу.
   - Удаление: Удаление элемента из хэш-таблицы.
---
Реализация хэш-таблицы с разрешением коллизий через связанный список
Шаг 1: Определим структуру данных для связанного списка.
```javascript
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
```
- `ListNode` представляет собой элемент связанного списка. Каждый узел содержит пару `key-value` и указатель на следующий узел.
Шаг 2: Реализуем хэш-таблицу.
```javascript
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size); // Массив для хранения связанных списков
  }

  // Хэш-функция (остаток от деления)
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Добавление элемента в хэш-таблицу
  set(key, value) {
    const index = this.hash(key);

    // Создаём новый узел
    const newNode = new ListNode(key, value);

    if (!this.table[index]) {
      // Если на этом индексе нет элемента, добавляем новый
      this.table[index] = newNode;
    } else {
      // Если на индексе уже есть элементы, разрешаем коллизию через связанный список
      let current = this.table[index];

      // Проверим, есть ли уже элемент с таким же ключом
      while (current) {
        if (current.key === key) {
          current.value = value; // Обновляем значение, если ключ найден
          return;
        }
        if (!current.next) break;
        current = current.next;
      }

      // Если элемент с таким ключом не найден, добавляем его в конец связанного списка
      current.next = newNode;
    }
  }

  // Поиск элемента по ключу
  get(key) {
    const index = this.hash(key);
    let current = this.table[index];

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        return current.value; // Возвращаем значение, если ключ найден
      }
      current = current.next;
    }

    return undefined; // Возвращаем undefined, если ключ не найден
  }

  // Удаление элемента по ключу
  remove(key) {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        if (prev) {
          // Если элемент не первый в списке, удаляем его
          prev.next = current.next;
        } else {
          // Если элемент первый, просто меняем указатель
          this.table[index] = current.next;
        }
        return true; // Элемент удален
      }
      prev = current;
      current = current.next;
    }

    return false; // Элемент не найден
  }
}
```
Пример использования хэш-таблицы
```javascript
const hashTable = new HashTable();

// Добавление элементов
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("occupation", "developer");

// Поиск элементов
console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("occupation")); // developer

// Обновление значения
hashTable.set("age", 26);
console.log(hashTable.get("age")); // 26

// Удаление элемента
hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
```
Объяснение:
1. Хэш-функция: Простой способ вычисления хэша, основанный на вычислении суммы кодов символов и взятии остатка от деления на размер хэш-таблицы.
2. Обработка коллизий: Если два элемента имеют одинаковый хэш, они хранятся в связном списке на одном индексе массива. Мы используем метод перебора элементов в списке, чтобы найти нужный элемент или добавить новый.
3. Операции:
   - `set()`: Добавляет новый элемент или обновляет существующий.
   - `get()`: Ищет элемент по ключу, пробегая по связанному списку, если коллизия произошла.
   - `remove()`: Удаляет элемент по ключу, также обрабатывая случаи с коллизиями.
Резюме:
- Хэш-таблица — это структура данных, использующая хэш-функцию для быстрого поиска элементов.
- Связанные списки используются для разрешения коллизий, когда два элемента имеют одинаковый хэш.
- Это решение эффективно для большинства задач, где требуется хранить и быстро искать элементы по ключу.


  ~ ~ ~
---------------------
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
1. Инкапсуляция через приватные свойства
⌛ Задача: Реализуйте класс `Counter` с приватным свойством `count`, которое нельзя изменить напрямую.
🎯 Решение:
```javascript
class Counter {
  #count = 0; // Приватное свойство

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.#count); // Ошибка: приватное свойство
```
Объяснение: Свойство `#count` доступно только внутри класса. Внешний код не может его прочитать или изменить напрямую.
---
2. Приватные методы
⌛ Задача: Реализуйте класс `User`, в котором есть приватный метод для проверки пароля.
🎯 Решение:
```javascript
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  #checkPassword(input) {
    return input === this.#password;
  }

  login(input) {
    return this.#checkPassword(input) ? "Login successful" : "Access denied";
  }
}

const user = new User("secret");
console.log(user.login("secret")); // Login successful
// console.log(user.#checkPassword("secret")); // Ошибка: приватный метод
```
Объяснение: Метод `#checkPassword` доступен только внутри класса.
---
3. Инкапсуляция через функции и замыкания
⌛ Задача: Реализуйте функцию `createCounter` с приватным состоянием.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined
```
Объяснение: Переменная `count` скрыта внутри замыкания и доступна только через методы объекта.
---
4. Использование Symbol для приватных свойств
⌛ Задача: Реализуйте класс с приватными свойствами через `Symbol`.
🎯 Решение:
```javascript
const _id = Symbol("id");

class Product {
  constructor(id, name) {
    this[_id] = id;
    this.name = name;
  }

  getId() {
    return this[_id];
  }
}

const product = new Product(123, "Laptop");
console.log(product.getId()); // 123
// console.log(product[_id]); // undefined
```
Объяснение: Символы создают уникальные свойства, которые невозможно случайно перезаписать или прочитать напрямую.
---
5. Геттеры и сеттеры
⌛ Задача: Реализуйте класс `Rectangle` с инкапсулированными свойствами `width` и `height`.
🎯 Решение:
```javascript
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    if (value > 0) this.#width = value;
  }

  get width() {
    return this.#width;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 200
```
Объяснение: Геттеры и сеттеры позволяют управлять доступом к приватным свойствам.
---
6. Создание singleton через инкапсуляцию
⌛ Задача: Реализуйте класс `Database` с шаблоном Singleton.
🎯 Решение:
```javascript
class Database {
  static #instance;

  constructor(connectionString) {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connectionString = connectionString;
    Database.#instance = this;
  }
}

const db1 = new Database("db://localhost");
const db2 = new Database("db://remote");

console.log(db1 === db2); // true
```
Объяснение: Приватное статическое свойство `#instance` обеспечивает наличие только одного экземпляра класса.
---
7. Инкапсуляция через фабричные функции
⌛ Задача: Реализуйте фабричную функцию для создания объекта с приватными данными.
🎯 Решение:
```javascript
function createUser(name) {
  let balance = 0;

  return {
    name,
    addBalance(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const user = createUser("Alice");
user.addBalance(100);
console.log(user.getBalance()); // 100
// console.log(user.balance); // undefined
```
Объяснение: `balance` защищён внутри замыкания.
---
8. Использование WeakMap для приватных данных
⌛ Задача: Реализуйте класс с приватными данными через `WeakMap`.
🎯 Решение:
```javascript
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User("Bob");
console.log(user.getName()); // Bob
// console.log(privateData.get(user)); // Приватные данные недоступны извне
```
Объяснение: `WeakMap` используется для хранения приватных данных, связанных с экземпляром.
---
9. Инкапсуляция в модулях ES6
⌛ Задача: Реализуйте модуль с приватными данными.
🎯 Решение:
`user.js`:
```javascript
const users = [];

export function addUser(user) {
  users.push(user);
}

export function getUsers() {
  return users;
}
```

`main.js`:
```javascript
import { addUser, getUsers } from "./user.js";

addUser("Alice");
console.log(getUsers()); // ["Alice"]
// console.log(users); // Ошибка: users недоступен
```
Объяснение: Приватные данные инкапсулируются в модуле.
---
10. Полиморфизм с инкапсуляцией
⌛ Задача: Создайте класс `Shape` и наследников `Circle` и `Square`.
🎯 Решение:
```javascript
class Shape {
  #type;

  constructor(type) {
    this.#type = type;
  }

  getType() {
    return this.#type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) =>
  console.log(`${shape.getType()} Area: ${shape.getArea()}`)
);
```
---
11. Создать класс `BankAccount` с приватными методами для депозита и снятия
⌛ Задача: Реализовать класс `BankAccount` с приватными методами для депозита, снятия денег и проверки баланса.
🎯 Решение:
```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 300
// console.log(account.#balance); // Ошибка: приватное свойство
```
Объяснение:
- Свойство `#balance` инкапсулировано, и его нельзя изменить напрямую снаружи класса.
- Методы `deposit` и `withdraw` предоставляют интерфейс для работы с балансом.
---
12. Реализовать класс `Logger` с ограниченным доступом к логам
⌛ Задача: Реализовать класс `Logger`, который хранит логи и предоставляет методы для записи и получения логов. Логи должны быть приватными, и внешний код не должен иметь доступа к ним напрямую.
🎯 Решение:
```javascript
class Logger {
  #logs = [];

  log(message) {
    this.#logs.push(message);
  }

  getLogs() {
    return this.#logs.slice();
  }
}

const logger = new Logger();
logger.log("Лог 1");
logger.log("Лог 2");
console.log(logger.getLogs()); // ["Лог 1", "Лог 2"]
// console.log(logger.#logs); // Ошибка: приватное свойство
```
Объяснение:
- Логи хранятся в приватном свойстве `#logs`.
- Метод `getLogs` возвращает копию массива логов, предотвращая прямой доступ к внутренним данным.
---
13. Сделать фабрику для управления доступом к данным
⌛ Задача: Реализовать фабричную функцию, которая создаёт объект с приватными данными, а внешним кодом можно управлять только через предоставленный интерфейс.
🎯 Решение:
```javascript
function createUser(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    setName(newName) {
      if (newName) _name = newName;
    },
    setAge(newAge) {
      if (newAge > 0) _age = newAge;
    }
  };
}

const user = createUser("Alice", 25);
console.log(user.getName()); // Alice
user.setName("Bob");
console.log(user.getName()); // Bob
// console.log(user._name); // undefined
```
Объяснение:
- Приватные данные инкапсулируются внутри замыкания и доступны только через публичные методы.
---
14. Инкапсулировать состояние в React-компоненте с `useState`
⌛ Задача: В React создайте компонент, в котором инкапсулировано состояние. Только внутренние методы могут изменять это состояние, а наружу оно передается через геттер.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Внутренний метод для изменения состояния
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Геттер для состояния
  const getCount = () => count;

  return (
    <div>
      <h1>Counter: {getCount()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
Обяснение:
- Внутренние методы `increment` и `decrement` изменяют состояние с помощью `setCount`.
- Внешний код не может напрямую изменять `count`, он только может использовать геттер `getCount`.
---
15. Создать модуль для работы с API, скрывающий реализацию запросов
⌛ Задача: Создать модуль для работы с API, который инкапсулирует логику выполнения HTTP-запросов и предоставляет только публичный интерфейс.
🎯 Решение:
```javascript
// api.js
const api = (() => {
  const apiUrl = "https://api.example.com/";

  const fetchData = async (endpoint) => {
    const response = await fetch(apiUrl + endpoint);
    const data = await response.json();
    return data;
  };

  return {
    getUserData: (userId) => fetchData(`users/${userId}`),
  };
})();

api.getUserData(1).then((data) => console.log(data));
```
Объяснение:
- Вся логика работы с API инкапсулирована внутри модуля `api`, а наружу доступен только метод `getUserData`.
- Приватная функция `fetchData` скрыта и не доступна извне.
---
16. Реализовать класс `Cache`, защищающий данные от прямого доступа
⌛ Задача: Реализовать класс `Cache`, который инкапсулирует кэшированные данные и предоставляет методы для работы с ними, скрывая внутреннюю структуру данных.
🎯 Решение:
```javascript
class Cache {
  #data = {};

  get(key) {
    return this.#data[key] || null;
  }

  set(key, value) {
    this.#data[key] = value;
  }

  clear() {
    this.#data = {};
  }
}

const cache = new Cache();
cache.set("user", { name: "Alice", age: 25 });
console.log(cache.get("user")); // { name: "Alice", age: 25 }
// console.log(cache.#data); // Ошибка: приватное свойство
```
Объяснение:
- Приватное свойство `#data` скрывает структуру данных.
- Внешний код может только использовать методы `get`, `set` и `clear` для работы с кэшем.
---
17. Инкапсулировать сложную логику в модули и экспортировать только интерфейс
⌛ Задача: Реализовать модуль, который инкапсулирует сложную логику (например, для работы с датами) и предоставляет только интерфейс для работы.
🎯 Решение:
```javascript
// dateUtils.js
const dateUtils = (() => {
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return {
    format: formatDate,
  };
})();

console.log(dateUtils.format(new Date())); // Форматирует дату: 21/9/2021
```
Объяснение:
- Сложная логика работы с датами инкапсулирована в модуле `dateUtils`.
- Наружу экспортируется только функция `format`, скрывая другие детали реализации.
Итог
Эти задачи охватывают различные аспекты инкапсуляции в JavaScript и React:
- Использование приватных свойств и методов в классах.
- Применение фабричных функций и замыканий.
- Инкапсуляция состояния в React.
- Скрытие сложной логики и взаимодействия с API.


  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Разворот массива:
---
Разворот массива — это операция, при которой элементы массива меняют порядок на обратный.
🎯 Решение: Вот несколько способов реализации на JavaScript:
1. С использованием встроенного метода `reverse`
Самый простой способ — использовать метод `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();

console.log("Оригинальный массив:", array);      // [5, 4, 3, 2, 1]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `reverse` изменяет исходный массив, так что будьте осторожны при использовании.
---
2. С использованием цикла `for`
Если вы хотите оставить исходный массив неизменным, используйте цикл для создания нового массива:
```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
---
3. С использованием деструктуризации и `reduce`
```javascript
function reverseArray(arr) {
  return arr.reduce((acc, curr) => [curr, ...acc], []);
}
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Функция `reduce` добавляет текущий элемент в начало результирующего массива.
---
4. С использованием двух указателей
Этот метод изменяет исходный массив на месте, минимизируя использование памяти:
```javascript
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Меняем местами элементы
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);

console.log("Развёрнутый массив:", array); // [5, 4, 3, 2, 1]
```
Особенность:
- Этот метод не создаёт новый массив и экономит память.
- Используется деструктуризация для обмена элементов местами.
---
5. С использованием рекурсии
```javascript
function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Рекурсивный метод хорошо работает для небольших массивов.
- При больших массивах может вызвать переполнение стека вызовов.
---
6. С использованием `Array.from`
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = Array.from(array).reverse();

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `Array.from(array)` создаёт копию массива, поэтому `reverse` не изменяет оригинал.
Итог
Когда использовать какой метод:
1. `reverse`: Когда нужно быстро изменить порядок, и исходный массив может быть изменён.
2. Цикл `for`: Если вы хотите сохранить оригинальный массив неизменным.
3. `reduce`: Когда требуется функциональный стиль программирования.
4. Два указателя: Для экономии памяти и работы на месте.
5. Рекурсия: Для учебных целей или когда массивы небольшие.

  ~ ~ ~
---------------------
⋙ ❍ Переложить данные из коллекции в коллекцию:
---
⌛ Задача: Переложить данные из одной коллекции в другую
🎯 Решение: Реализация включает:
1. На чистом JavaScript (Vanilla): Работа с массивами, объектами или другими структурами данных.
2. На React: С использованием состояния (`useState`) и компонентов.
---
1. Реализация на JavaScript
Пример 1. Перенос данных из массива в массив
```javascript
function transferData(source, destination) {
  while (source.length > 0) {
    // Удаляем элемент из исходного массива и добавляем в целевой
    const item = source.shift();
    destination.push(item);
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

transferData(sourceArray, destinationArray);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [1, 2, 3, 4, 5]
```
---
Пример 2. Перенос данных из объекта в объект
```javascript
function transferObjectData(source, destination) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
      delete source[key]; // Удаляем из исходного объекта
    }
  }
}

const sourceObject = { a: 1, b: 2, c: 3 };
const destinationObject = {};

transferObjectData(sourceObject, destinationObject);

console.log("Source:", sourceObject);       // {}
console.log("Destination:", destinationObject); // { a: 1, b: 2, c: 3 }
```
---
Пример 3. Перенос данных с преобразованием
```javascript
function transferAndTransform(source, destination, transformFn) {
  while (source.length > 0) {
    const item = source.shift();
    destination.push(transformFn(item)); // Преобразуем элемент перед добавлением
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

// Увеличиваем значения на 10 перед переносом
transferAndTransform(sourceArray, destinationArray, (x) => x + 10);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [11, 12, 13, 14, 15]
```
---
2. Реализация на React
В React перенос данных между коллекциями может быть реализован с использованием состояния (`useState`).
Пример 1. Перенос элементов из одного списка в другой
```jsx
import React, { useState } from "react";

function TransferList() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = () => {
    if (source.length > 0) {
      const item = source[0];
      setSource(source.slice(1)); // Удаляем элемент из исходного списка
      setDestination([...destination, item]); // Добавляем элемент в целевой список
    }
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferItem}>Transfer Next Item</button>
    </div>
  );
}

export default TransferList;
```
---
Пример 2. Перенос всех элементов
```jsx
import React, { useState } from "react";

function TransferAll() {
  const [source, setSource] = useState(["Apple", "Banana", "Cherry"]);
  const [destination, setDestination] = useState([]);

  const transferAllItems = () => {
    setDestination([...destination, ...source]); // Добавляем все элементы
    setSource([]); // Очищаем исходный список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferAllItems}>Transfer All Items</button>
    </div>
  );
}

export default TransferAll;
```
---
Пример 3. Перенос с удалением по клику
```jsx
import React, { useState } from "react";

function TransferOnClick() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = (item) => {
    setSource(source.filter((i) => i !== item)); // Удаляем элемент из источника
    setDestination([...destination, item]); // Добавляем в целевой список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => transferItem(item)}>Transfer</button>
          </li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransferOnClick;
```
Объяснение React-кодов
1. Состояние:
   - Используется `useState` для хранения данных коллекций (`source` и `destination`).
   - Перенос выполняется с обновлением этих состояний.
2. Методы:
   - В первом примере: по одному элементу из `source` перемещается в `destination`.
   - Во втором примере: все элементы из `source` перемещаются в `destination` одним кликом.
   - В третьем примере: элементы переносятся с удалением по клику.
3. Рендеринг:
   - Используется метод `map` для отображения списков.

  ~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Пройти циклом и суммировать данные за исключением указанного отрезка:
---
🎯 Решение: Вот пример кода на JavaScript, где данные суммируются, исключая указанный отрезок индексов:
Код
```javascript
function sumExcludingRange(arr, start, end) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Пропускаем элементы из указанного диапазона
    if (i >= start && i <= end) {
      continue;
    }

    sum += arr[i];
  }

  return sum;
}

// Пример использования
const data = [10, 20, 30, 40, 50, 60];
const startIndex = 2; // Индекс начала отрезка (включительно)
const endIndex = 4;   // Индекс конца отрезка (включительно)

const result = sumExcludingRange(data, startIndex, endIndex);

console.log("Итоговая сумма:", result); // 10 + 20 + 60 = 90
```
Объяснение:
1. Входные параметры:
   - `arr`: Массив данных, в котором будет выполняться суммирование.
   - `start`: Начальный индекс отрезка (включительно).
   - `end`: Конечный индекс отрезка (включительно).
2. Цикл `for`:
   - Перебирает все элементы массива.
   - С помощью `if (i >= start && i <= end)` мы определяем, попадает ли текущий индекс в исключаемый отрезок.
   - Если индекс попадает в исключаемый отрезок, выполняется `continue`, что пропускает текущую итерацию.
3. Сложение:
   - Элементы за пределами указанного диапазона суммируются в переменной `sum`.
4. Результат:
   - Возвращается итоговая сумма, за исключением значений в указанном отрезке.
---
Пример с пустым отрезком
Если отрезок пустой (например, `startIndex > endIndex`), все элементы будут учтены:
```javascript
const data = [10, 20, 30, 40];
console.log(sumExcludingRange(data, 5, 3)); // Сумма всех: 100
```
Пример с использованием `reduce`
Альтернативный способ через метод `reduce`:
```javascript
function sumExcludingRange(arr, start, end) {
  return arr.reduce((sum, value, index) => {
    return index >= start && index <= end ? sum : sum + value;
  }, 0);
}
// Пример использования
const data = [10, 20, 30, 40, 50];
console.log(sumExcludingRange(data, 1, 3)); // Сумма: 10 + 50 = 60
```

~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: Реализовать DAO даошку:
---
🎯 Решение: Реализация DAO (Data Access Object)
DAO (Data Access Object) — это шаблон проектирования, который используется для абстракции работы с данными. Он обеспечивает интерфейс для доступа к базе данных, файлам или другим хранилищам данных.
Мы реализуем DAO-шку, которая:
1. Предоставляет методы для чтения, создания, обновления и удаления данных.
2. Абстрагирует источник данных (локальный массив, API, база данных).
---
1. Реализация DAO на JavaScript (Vanilla)
Код
```javascript
class UserDAO {
  constructor() {
    this.users = []; // Локальное хранилище данных (может быть заменено на API/БД)
    this.nextId = 1; // Счётчик для уникальных ID
  }

  // Получить всех пользователей
  getAllUsers() {
    return this.users;
  }

  // Найти пользователя по ID
  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  // Добавить нового пользователя
  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  // Обновить пользователя по ID
  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  // Удалить пользователя по ID
  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

// Пример использования
const userDAO = new UserDAO();

// Создаём пользователей
userDAO.addUser({ name: "Alice", age: 25 });
userDAO.addUser({ name: "Bob", age: 30 });

// Получаем всех пользователей
console.log("Все пользователи:", userDAO.getAllUsers());

// Обновляем пользователя
userDAO.updateUser(1, { age: 26 });
console.log("Обновлённый пользователь:", userDAO.getUserById(1));

// Удаляем пользователя
userDAO.deleteUser(2);
console.log("После удаления:", userDAO.getAllUsers());
```
Объяснение:
1. Конструктор:
   - Создаётся массив `users` для хранения пользователей.
   - `nextId` используется для генерации уникальных идентификаторов.
2. Методы:
   - `getAllUsers`: Возвращает всех пользователей.
   - `getUserById`: Ищет пользователя по ID.
   - `addUser`: Добавляет нового пользователя.
   - `updateUser`: Обновляет данные пользователя.
   - `deleteUser`: Удаляет пользователя.
---
2. Реализация DAO на React
В React мы реализуем DAO как сервисный класс, который будет вызываться из компонентов.
Код
1. Сервисный класс (`UserDAO`)
```javascript
class UserDAO {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UserDAO(); // Экспортируем экземпляр DAO
```
---
2. Компонент React
```jsx
import React, { useState, useEffect } from "react";
import userDAO from "./UserDAO"; // Импортируем DAO

function UserManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Загружаем пользователей при монтировании
  useEffect(() => {
    setUsers(userDAO.getAllUsers());
  }, []);

  // Обработчик для добавления пользователя
  const handleAddUser = () => {
    const addedUser = userDAO.addUser({
      name: newUser.name,
      age: parseInt(newUser.age),
    });
    setUsers([...users, addedUser]); // Обновляем состояние
    setNewUser({ name: "", age: "" }); // Очищаем форму
  };

  // Обработчик для удаления пользователя
  const handleDeleteUser = (id) => {
    userDAO.deleteUser(id);
    setUsers(userDAO.getAllUsers()); // Обновляем состояние
  };

  return (
    <div style={styles.container}>
      <h1>User Manager</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.age} years old)
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserManager;
```
Объяснение:
1. Сервисный класс `UserDAO`:
   - Инкапсулирует логику работы с данными (CRUD).
   - Может быть заменён на реализацию с API или базой данных.
2. React-компонент `UserManager`:
   - Подключается к `UserDAO` для управления состоянием.
   - Использует `useState` для управления пользователями и формой.
   - Использует `useEffect` для загрузки данных при монтировании.
Итог
1. На JavaScript DAO предоставляет интерфейс для работы с локальными данными.
2. На React реализуется UI для взаимодействия с DAO.
3. DAO можно легко адаптировать для работы с REST API или базой данных.

  ~ ~ ~
---------------------
⋙ ❍ ПоМапить классы (map):
---
Маппинг классов на JavaScript и React
Маппинг классов — это задача, в которой необходимо применить определённые классы к элементам, например, динамически добавлять CSS-классы в зависимости от данных или состояния.
1. Реализация на чистом JavaScript
В этом примере мы маппим классы к элементам списка на основе их состояния (например, выбранный элемент получает класс `selected`).
Код JavaScript
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class Mapping</title>
  <style>
    .item {
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .selected {
      background-color: #007bff;
      color: white;
    }

    .highlight {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <ul id="itemList"></ul>

  <script>
    // Данные
    const items = [
      { id: 1, name: "Item 1", isSelected: false },
      { id: 2, name: "Item 2", isSelected: true },
      { id: 3, name: "Item 3", isSelected: false },
    ];

    // Контейнер для списка
    const itemList = document.getElementById("itemList");

    // Рендерим элементы списка
    function renderItems() {
      itemList.innerHTML = ""; // Очищаем контейнер

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;

        // Маппим классы
        li.className = "item";
        if (item.isSelected) li.classList.add("selected");

        // Обработчик клика для выбора элемента
        li.addEventListener("click", () => toggleSelection(item.id));

        itemList.appendChild(li);
      });
    }

    // Переключение состояния "isSelected"
    function toggleSelection(id) {
      items.forEach((item) => {
        item.isSelected = item.id === id ? !item.isSelected : false;
      });

      renderItems(); // Перерисовываем список
    }

    renderItems(); // Первичный рендер
  </script>
</body>
</html>
```
Объяснение JavaScript-кода
1. Маппинг классов:
   - К каждому элементу применяется базовый класс `item`.
   - Если элемент выбран (`isSelected`), добавляется класс `selected`:
     ```javascript
     if (item.isSelected) li.classList.add("selected");
     ```
2. Динамическое обновление:
   - При клике состояние элемента (`isSelected`) меняется.
   - После этого вызывается `renderItems`, чтобы перерисовать список.
---
2. Реализация на React
В React маппинг классов реализуется с помощью библиотеки `classnames` или встроенной логики.
🎯 Реализация без библиотек
```jsx
import React, { useState } from "react";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`item ${item.isSelected ? "selected" : ""}`}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
🎯 Реализация с использованием библиотеки `classnames`
Установите библиотеку:
```bash
npm install classnames
```
Используем `classnames` для динамического маппинга классов:
```jsx
import React, { useState } from "react";
import classNames from "classnames";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={classNames("item", { selected: item.isSelected })}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
---
CSS для React
```css
.item {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.selected {
  background-color: #007bff;
  color: white;
}
```
Объяснение React-кода
1. Состояние:
   - Используется `useState` для хранения массива элементов с их состоянием.
2. Маппинг классов:
   - Без `classnames`:
     ```jsx
     className={`item ${item.isSelected ? "selected" : ""}`}
     ```
   - С использованием `classnames`:
     ```jsx
     classNames("item", { selected: item.isSelected })
     ```
3. Динамическое обновление:
   - `setItems` обновляет состояние списка, чтобы отобразить изменение класса.
---
Сравнение JavaScript и React
| Характеристика   | Vanilla JavaScript                             | React                                |
|-----------------------|----------------------------------------------------|------------------------------------------|
| Обновление данных | Ручная перерисовка DOM                             | Использование `state` и автоматический рендер |
| Маппинг классов   | `classList.add` и `classList.remove`               | Использование `className` или `classnames` |
| Простота в использовании | Быстрее для простых задач                     | Более подходящий для сложных интерфейсов |

  ~ ~ ~ 
---------------------
⋙ ❍ ⌛ Задача: Напишите бинарный поиск по памяти или канстомный линкед лист, обход графа за N сложность:
---
🎯 Решение: Реализация бинарного поиска, пользовательского связного списка и обхода графа
Ниже представлены три отдельных реализации:
1. Бинарный поиск (по массиву).
2. Кастомный связный список (Linked List).
3. Обход графа за линейное время O(N) с помощью BFS или DFS.
---
1. Бинарный поиск
Бинарный поиск применяется к отсортированным массивам, имеет сложность O(log N).
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Элемент найден
    }

    if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);

console.log(result); // Индекс элемента: 3
```
Объяснение:
1. Алгоритм:
   - Определяем центральный элемент массива (`mid`).
   - Сравниваем центральный элемент с `target`.
   - Сужаем область поиска, удаляя половину массива на каждой итерации.
2. Сложность:
   - Время: O(log N), так как на каждой итерации мы делим массив пополам.
   - Память: O(1), так как не используется рекурсия.
---
2. Кастомный связный список
Реализация пользовательского `LinkedList`
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Добавить элемент в конец списка
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Удалить элемент
  delete(value) {
    if (!this.head) return;

    // Удаляем голову
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }

    if (!current.next) {
      this.tail = current; // Обновляем хвост, если удалён последний элемент
    }
  }

  // Поиск элемента
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Печать всех элементов
  print() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Пример использования
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30

list.delete(20);
list.print(); // 10 -> 30

console.log(list.find(10)); // Node { value: 10, next: Node { ... } }
```
Объяснение:
1. Операции:
   - `append(value)`: Добавляет элемент в конец списка. Сложность O(1).
   - `delete(value)`: Удаляет элемент. Сложность O(N) в худшем случае.
   - `find(value)`: Поиск элемента. Сложность O(N).
2. Использование:
   - Связный список полезен для сценариев, где часто добавляются или удаляются элементы.
---
3. Обход графа за линейное время O(N)
Обход графа может быть выполнен с использованием DFS (глубина) или BFS (ширина). Оба алгоритма имеют сложность O(V + E), где:
- V — количество вершин.
- E — количество рёбер.
Реализация обхода в ширину (BFS)
```javascript
function bfs(graph, start) {
  const visited = new Set(); // Чтобы не заходить в одну вершину дважды
  const queue = [start]; // Очередь для BFS
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      // Добавляем всех соседей в очередь
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(bfs(graph, startNode)); // [1, 2, 3, 4, 5, 6]
```
---
Реализация обхода в глубину (DFS)
```javascript
function dfs(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return;

  visited.add(start);
  result.push(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(dfs(graph, startNode)); // [1, 2, 4, 3, 5, 6]
```
Объяснение BFS и DFS:
1. BFS (ширина):
   - Использует очередь (`queue`) для обхода.
   - Проходит уровень за уровнем.
2. DFS (глубина):
   - Использует рекурсию (или стек) для обхода.
   - Проходит до конца одного пути, затем возвращается.
Вывод
- Бинарный поиск: Для отсортированных массивов, O(log N).
- Кастомный связный список: Гибкость в работе с элементами, O(N) для операций поиска/удаления.
- Обход графа:
  - BFS и DFS обходят граф за O(V + E).
  - Выбор зависит от задачи (поиск кратчайшего пути — BFS, поиск путей вглубь — DFS).

~ ~ ~
---------------------
⋙ ❍ ⌛ Задача: !!!Написать функцию глубокого копирования объекта с доп условием - внутри есть циклические и иные ссылки между элементами, т.е. объект - не дерево:
---
Глубокое копирование объекта с учетом циклических ссылок — это сложная задача, которая требует хранения уже посещённых объектов. Для её решения мы можем использовать Map для отслеживания уже обработанных ссылок и избегания бесконечной рекурсии.
🎯 Решение:
```javascript
function deepClone(obj, map = new Map()) {
  // Если объект не является объектом или массивом, возвращаем его
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Если объект уже клонирован (циклическая ссылка), возвращаем его копию из Map
  if (map.has(obj)) {
    return map.get(obj);
  }

  // Создаем копию объекта или массива
  const clone = Array.isArray(obj) ? [] : {};

  // Сохраняем объект в Map, чтобы учесть циклические ссылки
  map.set(obj, clone);

  // Рекурсивно копируем свойства объекта или элементы массива
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
// Пример использования
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
obj.b.e = obj; // Циклическая ссылка

const copiedObj = deepClone(obj);
console.log(copiedObj);
```
Объяснение:
1. Проверка типа:
   - Если объект не является объектом или массивом (`typeof obj !== "object"`), он возвращается без изменений, так как примитивы копируются по значению.
2. Обработка циклических ссылок:
   - Используется `Map`, чтобы отслеживать уже обработанные объекты.
   - Если объект уже находится в `Map`, возвращается его ранее созданная копия:
     ```javascript
     if (map.has(obj)) {
       return map.get(obj);
     }
     ```
3. Копирование свойств:
   - Рекурсивно обходим все свойства объекта с помощью `for...in` и создаём их копии.
4. Работа с массивами:
   - Если объект — массив, создаётся пустой массив:
     ```javascript
     const clone = Array.isArray(obj) ? [] : {};
     ```
5. Поддержка сложных объектов:
   - Копируются свойства объектов и массивов любого уровня вложенности, включая циклические ссылки.
---
Тесты:
Пример с циклическими ссылками:
```javascript
const obj = { a: 1 };
obj.b = obj; // Циклическая ссылка

const cloned = deepClone(obj);
console.log(cloned); // { a: 1, b: [Circular] }
console.log(cloned.b === cloned); // true
```
Пример с массивом:
```javascript
const arr = [1, 2, 3];
arr.push(arr); // Циклическая ссылка

const clonedArr = deepClone(arr);
console.log(clonedArr); // [1, 2, 3, [Circular]]
console.log(clonedArr[3] === clonedArr); // true
```
Улучшение: Копирование специальных объектов
Если нужно поддерживать такие структуры как `Date`, `Set`, `Map`, можно дополнить функцию:
```javascript
function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  // Копирование специальных объектов
  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Map) {
    const clonedMap = new Map();
    map.set(obj, clonedMap);
    for (const [key, value] of obj.entries()) {
      clonedMap.set(deepClone(key, map), deepClone(value, map));
    }
    return clonedMap;
  }

  if (obj instanceof Set) {
    const clonedSet = new Set();
    map.set(obj, clonedSet);
    for (const value of obj.values()) {
      clonedSet.add(deepClone(value, map));
    }
    return clonedSet;
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
```
---
Пример использования с `Map` и `Set`
```javascript
const complexObj = {
  date: new Date(),
  map: new Map([[1, "one"]]),
  set: new Set([1, 2, 3]),
};
complexObj.self = complexObj; // Циклическая ссылка

const clonedComplexObj = deepClone(complexObj);
console.log(clonedComplexObj);
console.log(clonedComplexObj.map.get(1)); // "one"
console.log(clonedComplexObj.set.has(2)); // true
console.log(clonedComplexObj.self === clonedComplexObj); // true
```
Итог
- Функция поддерживает:
  - Глубокое копирование объектов и массивов.
  - Циклические ссылки.
  - Специальные объекты: `Date`, `Set`, `Map`.
- Решение эффективно для работы с любыми вложенными структурами. Если нужно добавить поддержку других типов, например, `RegExp`, это легко сделать.

~ ~ ~
---------------------
⋙ ❍ В цикле переложить элементы, меняя первые с последними. (фильтр-отсев кандитатов):
---
⌛ Задача: Переложить элементы массива так, чтобы первые элементы стали последними, а последние — первыми.
🎯 Решение на Vanilla JavaScript
```javascript
function reverseArray(arr) {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    // Меняем первый и последний элементы
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

// Пример использования
const array = [1, 2, 3, 4, 5];
console.log("Исходный массив:", array);
console.log("Перевернутый массив:", reverseArray(array));
```
Объяснение:
1. Итерация до середины массива:
   - Мы используем цикл `for` с условием `i < length / 2`, чтобы обменивать элементы только до середины массива.
   - Это исключает лишние обмены, т. к. элементы в середине не требуют изменений.
2. Обмен элементов:
   - Используем временную переменную `temp` для сохранения текущего элемента:
     ```javascript
     const temp = arr[i];
     arr[i] = arr[length - 1 - i];
     arr[length - 1 - i] = temp;
     ```
3. Результат:
   - Первый элемент меняется местами с последним, второй — с предпоследним, и так далее.
---
🎯 Решение с использованием встроенных методов
Если вы хотите использовать встроенные методы, можно использовать `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log("Перевернутый массив:", reversedArray);
```
Примечание: Этот метод изменяет исходный массив.
---
🎯 Пример для строк
Если вы хотите перевернуть строку:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
