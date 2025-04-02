---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
1. Удаление обработчика
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
--------------------------------------------------------------------------------------------- 
