---------------------------------------------------------------------------------------------  
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
9. Преобразование массива объектов в массив строк
⌛ Задача: Напишите функцию, которая преобразует массив объектов в массив строк.
Пример:
```javascript
const people = [
  { name: 'Alex', age: 30 },
  { name: 'Ivan', age: 25 }
];
convertToStringArray(people); // ['Alex is 30 years old', 'Ivan is 25 years old']
```
🎯 Решение:
```javascript
const convertToStringArray = (arr) => {
  return arr.map(person => `${person.name} is ${person.age} years old`);
};
```
Объяснение:
- Метод `map()` преобразует каждый объект в строку.
---------------------------------------------------------------------------------------------  
