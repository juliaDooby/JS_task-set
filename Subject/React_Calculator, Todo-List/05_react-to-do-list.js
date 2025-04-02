---------------------------------------------------------------------------------------------  
⋙ ❍ Список to do:
---
⌛ Задача: Реализовать To-Do List с возможностью добавления, удаления и отметки задач как выполненных. Используйте React.
Функциональность:
1. Пользователь может добавлять задачи.
2. Пользователь может удалять задачи.
3. Пользователь может отмечать задачи как выполненные.
4. Список задач отображается на экране.
🎯 Решение:
1. Начальная структура приложения
Создадим компонент `TodoApp`, который будет содержать все функции и рендерить список задач.
```jsx
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // Игнорируем пустые задачи
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask(""); // Сброс поля ввода
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
Объяснение:
1. Состояние задач:
   - Используем хук `useState` для хранения списка задач:
     ```jsx
     const [tasks, setTasks] = useState([]);
     ```
   - Каждая задача представлена объектом с тремя свойствами:
     - `id`: Уникальный идентификатор задачи.
     - `text`: Текст задачи.
     - `completed`: Флаг выполнения (`true`/`false`).
2. Добавление задачи:
   - Создаётся новый объект задачи:
     ```jsx
     const task = { id: Date.now(), text: newTask, completed: false };
     ```
   - Новая задача добавляется к списку с помощью:
     ```jsx
     setTasks([...tasks, task]);
     ```
3. Удаление задачи:
   - Фильтруем список задач, исключая задачу с соответствующим `id`:
     ```jsx
     setTasks(tasks.filter((task) => task.id !== id));
     ```
4. Отметка задачи как выполненной:
   - Используем метод `map`, чтобы изменить свойство `completed` для нужной задачи:
     ```jsx
     setTasks(
       tasks.map((task) =>
         task.id === id ? { ...task, completed: !task.completed } : task
       )
     );
     ```
5. Рендеринг задач:
   - Используем `map` для отображения каждой задачи в списке:
     ```jsx
     tasks.map((task) => (
       <li key={task.id}>
         <span>{task.text}</span>
       </li>
     ));
     ```
   - Добавляем стили для зачёркивания выполненных задач:
     ```jsx
     style={{ textDecoration: task.completed ? "line-through" : "none" }}
     ```
Дополнительные улучшения:
1. Пустой список
Добавьте сообщение, если список задач пуст:
```jsx
{tasks.length === 0 && <p>Список задач пуст</p>}
```
2. Валидация
Игнорируйте ввод пустых задач:
```jsx
if (newTask.trim() === "") return;
```
3. Сохранение задач в `localStorage`
Сохраните задачи в `localStorage`, чтобы они сохранялись между перезагрузками страницы:
```jsx
useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
---
Пример стилей (CSS):
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  cursor: pointer;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1a1a;
}
```
Как это использовать:
1. Создайте новый проект React с помощью:
   ```bash
   npx create-react-app todo-app
   cd todo-app
   ```
2. Замените содержимое `App.js` на код из задачи.
3. Добавьте стили в файл `App.css`.
4. Запустите проект:
   ```bash
   npm start
   ```
---------------------------------------------------------------------------------------------  
