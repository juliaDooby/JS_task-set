---------------------------------------------------------------------------------------------  
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
8. Получение объектов с определённым значением
⌛ Задача: Напишите функцию, которая фильтрует массив объектов по значению ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' }
];
filterByCity(people, 'Moscow'); // [{ name: 'Alex', city: 'Moscow' }, { name: 'Ivan', city: 'Moscow' }]
```
🎯 Решение
```javascript
const filterByCity = (arr, city) => {
  return arr.filter(person => person.city === city);
};
```
Объяснение:
- Метод `filter()` применяется для фильтрации объектов по ключу `city`.
---------------------------------------------------------------------------------------------  
