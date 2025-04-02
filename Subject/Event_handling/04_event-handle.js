---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
4. Прекращение всплытия
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
--------------------------------------------------------------------------------------------- 
