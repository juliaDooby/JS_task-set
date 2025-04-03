---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
11. Группировка массива объектов по значению ключа
⌛ Задача: Напишите функцию, которая группирует массив объектов по значению ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' },
];
groupBy(people, 'city');
```
Выход:
```javascript
{
  'Moscow': [ { name: 'Alex', city: 'Moscow' }, { name: 'Ivan', city: 'Moscow' } ],
  'New York': [ { name: 'Joe', city: 'New York' } ]
}
```
🎯 Решение:
```javascript
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = acc[item[key]] || [];
    acc[item[key]].push(item);
    return acc;
  }, {});
};
```
Сложность: O(n).
---------------------------------------------------------------------------------------------  
