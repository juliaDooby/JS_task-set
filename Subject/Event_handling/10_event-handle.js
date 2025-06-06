---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
Часть 2: Обработка событий в React
---
10. Простое событие `onClick`
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
--------------------------------------------------------------------------------------------- 
