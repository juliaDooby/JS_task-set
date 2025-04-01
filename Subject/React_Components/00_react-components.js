---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
0. Вот подробная реализация задачи To-Do List на Vanilla JavaScript:
⌛ Описание задачи:
1. Создайте список задач.
2. Реализуйте добавление новых задач.
3. Позвольте пользователю удалять задачи.
4. Позвольте отмечать задачи как выполненные.
---
🎯 Решение:
1. HTML-разметка
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
    }

    .todo-container {
      max-width: 400px;
      margin: 0 auto;
    }

    .input-container {
      display: flex;
      margin-bottom: 20px;
    }

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      margin-left: 10px;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    li.completed span {
      text-decoration: line-through;
      color: gray;
    }

    .delete-btn {
      background-color: #ff4d4d;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      padding: 5px 10px;
    }

    .delete-btn:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <div class="input-container">
      <input type="text" id="taskInput" placeholder="Enter a new task">
      <button id="addTaskBtn">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
2. JavaScript
```javascript
// Получаем элементы из DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Функция добавления задачи
function addTask() {
  const taskText = taskInput.value.trim(); // Убираем лишние пробелы
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Создаём новую задачу
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Отметить задачу как выполненную
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Кнопка удаления
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Удалить задачу
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Собираем задачу
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Добавляем в список
  taskList.appendChild(li);

  // Очищаем поле ввода
  taskInput.value = "";
}

// Событие на кнопку добавления
addTaskBtn.addEventListener("click", addTask);

// Событие на клавишу Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
```
Объяснение работы кода:
1. HTML:
   - Поле `<input>` для ввода задачи и кнопка `<button>` для добавления задачи.
   - `<ul>` отображает список задач, добавленных пользователем.
2. CSS:
   - Стилизация элементов списка (`<li>`) и кнопок (`Add`, `Delete`).
   - Класс `.completed` задаёт зачёркнутый стиль текста для выполненных задач.
3. Добавление задачи:
   - Поле ввода очищается после добавления задачи:
     ```javascript
     taskInput.value = "";
     ```
   - Проверка на пустую строку:
     ```javascript
     if (taskText === "") {
       alert("Task cannot be empty!");
       return;
     }
     ```
4. Удаление задачи:
   - Кнопка "Delete" удаляет соответствующий элемент `<li>`:
     ```javascript
     deleteBtn.addEventListener("click", () => {
       taskList.removeChild(li);
     });
     ```
5. Отметка выполнения:
   - Клик по тексту задачи добавляет/удаляет класс `completed`, чтобы зачеркнуть текст:
     ```javascript
     span.addEventListener("click", () => {
       li.classList.toggle("completed");
     });
     ```
6. Обработка клавиши `Enter`:
   - При нажатии `Enter` задача добавляется:
     ```javascript
     taskInput.addEventListener("keypress", (event) => {
       if (event.key === "Enter") {
         addTask();
       }
     });
     ```
Дополнительные улучшения
1. Сохранение задач в `localStorage`
Добавьте сохранение задач, чтобы они не исчезали при перезагрузке страницы:
```javascript
function saveTasks() {
  const tasks = Array.from(taskList.children).map((li) => ({
    text: li.querySelector("span").textContent,
    completed: li.classList.contains("completed"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    span.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Загружаем задачи при загрузке страницы
window.addEventListener("load", loadTasks);
// Сохраняем задачи при изменении
taskList.addEventListener("DOMSubtreeModified", saveTasks);
```
---
Запуск проекта:
1. Сохраните HTML-код в файл `index.html`.
2. Сохраните JavaScript-код в файл `script.js`.
3. Откройте файл `index.html` в браузере.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
1. Функциональный компонент
⌛ Задача: Создайте простой функциональный компонент, который возвращает текст "Hello, React!".
🎯 Решение:
```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;
```
Объяснение: Функциональные компоненты возвращают JSX, который рендерится в DOM.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
2. Класс-компонент
⌛ Задача: Создайте класс-компонент, который выводит "Hello, React!".
🎯 Решение:
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Greeting;
```
Объяснение: Класс-компоненты содержат метод `render`, который возвращает JSX.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
3. Пропсы в функциональном компоненте
⌛ Задача: Создайте компонент, который принимает проп `name` и выводит его.
🎯 Решение:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;

// Использование
<Greeting name="Alice" />;
```
Объяснение: Пропсы передаются в компонент как аргументы.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
4. Пропсы в класс-компоненте
⌛ Задача: Создайте класс-компонент, который принимает проп `name`.
🎯 Решение:
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;

// Использование
<Greeting name="Alice" />;
```
Объяснение: В класс-компонентах пропсы доступны через `this.props`.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
5. Состояние (state) в класс-компоненте
⌛ Задача: Создайте класс-компонент, который хранит и отображает счётчик.
🎯 Решение:
```jsx
class Counter extends React.Component {
  state = { count: 0 };

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

export default Counter;
```
Объяснение: Состояние (`state`) обновляется через `setState`.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
6. Хук состояния (`useState`)
⌛ Задача: Создайте функциональный компонент со счётчиком.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
Объяснение: Хук `useState` используется для управления состоянием в функциональных компонентах.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
7. Обработка событий
⌛ Задача: Создайте кнопку, которая выводит сообщение в консоль при клике.
🎯 Решение:
```jsx
function ClickButton() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickButton;
```
Объяснение: События обрабатываются через атрибуты, такие как `onClick`.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
8. Дочерние компоненты (children)
⌛ Задача: Создайте компонент, который принимает детей через `props.children`.
🎯 Решение:
```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;

// Использование
<Container>
  <h1>Hello, World!</h1>
</Container>;
```
Объяснение: `props.children` используется для передачи вложенного содержимого.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
9. Передача данных через события
⌛ Задача: Передайте данные из дочернего компонента в родительский через событие.
🎯 Решение:
```jsx
function Child({ onSend }) {
  return <button onClick={() => onSend("Hello from Child")}>Send</button>;
}

function Parent() {
  const handleReceive = (message) => {
    console.log(message);
  };

  return <Child onSend={handleReceive} />;
}

export default Parent;
```
Объяснение: Дочерний компонент вызывает функцию, переданную через пропсы.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
10. Использование `useEffect`
⌛ Задача: Создайте компонент, который выводит сообщение в консоль при монтировании.
🎯 Решение:
```jsx
import React, { useEffect } from "react";

function Message() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <p>Hello, World!</p>;
}

export default Message;
```
Объяснение: Хук `useEffect` с пустым массивом зависимостей вызывается только при монтировании.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
11. Рендеринг списков
⌛ Задача: Отобразите список элементов.
🎯 Решение:
```jsx
function List() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
```
Объяснение: У каждого элемента списка должен быть уникальный `key`.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ React компоненты:
---
12. Условный рендеринг
⌛ Задача: Рендерьте текст в зависимости от условия.
🎯 Решение:
```jsx
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

export default Greeting;
```
Объяснение: Условный рендеринг осуществляется через тернарный оператор.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
13. Контекст React (`useContext`)
⌛ Задача: Используйте контекст для передачи данных между компонентами.
🎯 Решение:
```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}

function Parent() {
  return (
    <UserContext.Provider value="Alice">
      <Child />
    </UserContext.Provider>
  );
}

export default Parent;
```
Объяснение: Контекст позволяет передавать данные через дерево компонентов без пропсов.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------   
⋙ ❍ React компоненты:
---
14. Хранение состояния в `useReducer`
⌛ Задача: Используйте `useReducer` для управления состоянием.
🎯 Решение:
```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default Counter;
```
Объяснение: `useReducer` используется для более сложного управления состоянием.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
15. Компоненты высшего порядка (HOC)
⌛ Задача: Напишите HOC, который добавляет заголовок к компоненту.
🎯 Решение:
```jsx
function withHeader(Component) {
  return function WrappedComponent(props) {
    return (
      <>
        <h1>Header</h1>
        <Component {...props} />
      </>
    );
  };
}

function Content() {
  return <p>Content goes here</p>;
}

export default withHeader(Content);
```
Объяснение: HOC оборачивает компонент и добавляет дополнительные свойства или функциональность.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
16. Ленивая загрузка компонента
⌛ Задача: Загрузите компонент лениво.
🎯 Решение:
```jsx
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
```
Объяснение: `React.lazy` используется для ленивой загрузки компонентов.
---------------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
17. Мемоизация компонента (`React.memo`)
⌛ Задача: Используйте `React.memo` для предотвращения ненужного ререндеринга.
🎯 Решение:
```jsx
import React from "react";

const MemoizedComponent = React.memo(({ name }) => {
  console.log("Rendered");
  return <h1>Hello, {name}!</h1>;
});

export default MemoizedComponent;

// Использование
<MemoizedComponent name="Alice" />;
```
Объяснение: `React.memo` предотвращает повторный ререндеринг, если пропсы не изменились.
---------------------------------------------------------------------------------------------  
