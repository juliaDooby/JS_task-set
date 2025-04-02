---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
13. Использование `preventDefault`
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
--------------------------------------------------------------------------------------------- 
