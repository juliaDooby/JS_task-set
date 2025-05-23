---------------------------------------------------------------------------------------------  
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
7. Преобразование объекта в массив ключей
⌛ Задача: Напишите функцию, которая преобразует объект в массив его ключей.
Пример:
```javascript
const person = { name: 'Alex', age: 30, city: 'Moscow' };
getObjectKeys(person); // ['name', 'age', 'city']
```
🎯 Решение:
```javascript
const getObjectKeys = (obj) => {
  return Object.keys(obj);
};
```
Объяснение:
- Метод `Object.keys()` возвращает массив ключей объекта.
---------------------------------------------------------------------------------------------  
