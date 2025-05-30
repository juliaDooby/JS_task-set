---------------------------------------------------------------------------------------------  
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
14. Преобразование массива объектов в объект с ключами как ID
⌛ Задача: Напишите функцию, которая преобразует массив объектов в объект, где ключами будут значения из определённого поля (например, `id`), а значениями — сами объекты.
Пример:
```javascript
const items = [
  { id: 1, name: 'item1', price: 10 },
  { id: 2, name: 'item2', price: 20 },
  { id: 3, name: 'item3', price: 30 }
];
convertToObject(items);
// {
//   1: { id: 1, name: 'item1', price: 10 },
//   2: { id: 2, name: 'item2', price: 20 },
//   3: { id: 3, name: 'item3', price: 30 }
// }
```
🎯 Решение:
```javascript
const convertToObject = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};
```
Объяснение:
- Метод `reduce()` используется для преобразования массива в объект.
- В процессе работы аккумулятор (`acc`) заполняется новыми ключами, где ключом является `id` каждого объекта, а значением — сам объект.
---------------------------------------------------------------------------------------------  
