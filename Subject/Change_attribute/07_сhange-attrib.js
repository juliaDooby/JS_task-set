---------------------------------------------------------------------------------------------   
⋙ ❍ Изменение атрибутов:
---
7. Динамическое добавление нескольких атрибутов
⌛ Задача: Добавьте атрибуты `class` и `title` к элементу.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.setAttribute('class', 'highlight');
element.setAttribute('title', 'Hover text');

console.log(element.className); // "highlight"
console.log(element.title); // "Hover text"
```
Объяснение: `setAttribute` позволяет добавлять сразу несколько атрибутов.
---------------------------------------------------------------------------------------------  
