---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
5. Прекращение действия по умолчанию
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
--------------------------------------------------------------------------------------------- 
