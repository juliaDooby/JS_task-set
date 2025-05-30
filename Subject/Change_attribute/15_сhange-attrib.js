---------------------------------------------------------------------------------------------  
⋙ ❍ Изменение атрибутов:
---
15. Добавление атрибута для нескольких элементов
⌛ Задача: Добавьте атрибут `data-index` ко всем элементам списка.
🎯 Решение:
```javascript
const items = document.querySelectorAll('li');
items.forEach((item, index) => {
  item.setAttribute('data-index', index);
});

console.log(items[0].dataset.index); // "0"
```
Объяснение: Используйте цикл для добавления атрибута ко множеству элементов.
---------------------------------------------------------------------------------------------  
