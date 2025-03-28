
---------------------
⋙ ❍ Обработка событий:
---
Часть 1: Обработка событий в Vanilla JS
---
1. Простое событие `click`
⌛ Задача: Добавьте обработчик события `click` к кнопке, чтобы вывести текст в консоль.
🎯 Решение:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked');
});
```
Объяснение: `addEventListener` добавляет обработчик события к элементу.
---
2. Удаление обработчика
⌛ Задача: Удалите обработчик события `click` у кнопки после первого клика.
🎯 Решение:
```javascript
const button = document.querySelector('button');
const handleClick = () => {
  console.log('Button clicked');
  button.removeEventListener('click', handleClick);
};
button.addEventListener('click', handleClick);
```
Объяснение: `removeEventListener` удаляет обработчик события.
---
3. Событие `input`
⌛ Задача: Отслеживайте изменения в поле ввода и выводите их в консоль.
🎯 Решение:
```javascript
const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  console.log(event.target.value);
});
```
Объяснение: Событие `input` срабатывает при каждом изменении значения в поле.
---
4. Событие `keydown`
⌛ Задача: Выведите код нажатой клавиши в консоль.
🎯 Решение:
```javascript
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```
Объяснение: Событие `keydown` срабатывает при нажатии клавиши.
---
5. Прекращение всплытия
⌛ Задача: Остановите всплытие события при клике по дочернему элементу.
🎯 Решение:
```javascript
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', () => console.log('Parent clicked'));
child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked');
});
```
Объяснение: `stopPropagation` предотвращает всплытие события к родительским элементам.
---
6. Прекращение действия по умолчанию
⌛ Задача: Отмените переход по ссылке при клике.
🎯 Решение:
```javascript
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Default action prevented');
});
```
Объяснение: `preventDefault` отменяет действие, назначенное по умолчанию для элемента.
---
7. Делегирование событий
⌛ Задача: Обрабатывайте клики на элементах списка через делегирование.
🎯 Решение:
```javascript
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`Clicked on item: ${event.target.textContent}`);
  }
});
```
Объяснение: Делегирование позволяет обрабатывать события для потомков через общий родительский элемент.
---
8. Событие `mousemove`
⌛ Задача: Отслеживайте координаты мыши.
🎯 Решение:
```javascript
document.addEventListener('mousemove', (event) => {
  console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});
```
Объяснение: Событие `mousemove` срабатывает при каждом движении мыши.
---
9. Один раз обработчик
⌛ Задача: Обработайте событие только один раз.
🎯 Решение:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked');
}, { once: true });
```
Объяснение: Опция `{ once: true }` автоматически удаляет обработчик после первого срабатывания.
---
10. Событие `change`
⌛ Задача: Отслеживайте изменение значения у чекбокса.
🎯 Решение:
```javascript
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', (event) => {
  console.log(`Checked: ${event.target.checked}`);
});
```
Объяснение: Событие `change` срабатывает при изменении состояния элемента.
---------
Часть 2: Обработка событий в React
---
11. Простое событие `onClick`
⌛ Задача: Добавьте обработчик события `onClick` к кнопке.
🎯 Решение:
```javascript
function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```
Объяснение: В React события обрабатываются через пропсы, такие как `onClick`.
---
12. Событие `onChange`
⌛ Задача: Отслеживайте изменения в поле ввода.
🎯 Решение:
```javascript
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}
```
Объяснение: Используйте `onChange` для работы с событиями изменения в элементах формы.
---
13. Передача параметров в обработчик
⌛ Задача: Передайте параметр в обработчик события.
🎯 Решение:
```javascript
function App() {
  const handleClick = (name) => {
    console.log(`Hello, ${name}`);
  };

  return <button onClick={() => handleClick('Alice')}>Greet</button>;
}
```
Объяснение: Передача параметров через стрелочную функцию позволяет вызывать обработчик с аргументами.
---
14. Использование `preventDefault`
⌛ Задача: Отмените действие по умолчанию у ссылки.
🎯 Решение:
```javascript
function App() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Link click prevented');
  };

  return <a href="https://example.com" onClick={handleClick}>Click me</a>;
}
```
Объяснение: В React нужно явно вызвать `preventDefault` в обработчике.
---
15. Событие `onSubmit`
⌛ Задача: Обработайте отправку формы.
🎯 Решение:
```javascript
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение: Событие `onSubmit` обрабатывает отправку формы.
---
16. Событие `onMouseEnter`
⌛ Задача: Реализуйте подсказку при наведении на элемент.
🎯 Решение:
```javascript
function App() {
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  return <div onMouseEnter={handleMouseEnter}>Hover over me</div>;
}
```
Объяснение: `onMouseEnter` срабатывает при наведении курсора на элемент.
---
17. Условная обработка события
⌛ Задача: Выполните обработчик события только при выполнении условия.
🎯 Решение:
```javascript
function App() {
  const isEnabled = true;

  const handleClick = () => {
    if (isEnabled) {
      console.log('Action executed');
    }
  };

  return <button onClick={handleClick}>Conditional Click</button>;
}
```
Объяснение: Условие проверяется внутри обработчика перед выполнением действия.
