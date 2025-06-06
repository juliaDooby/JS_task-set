---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
0. Группировка элементов массива по условию
⌛ Задача: Напишите функцию, которая группирует элементы массива по заданному условию.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5, 6];
groupByCondition(arr, num => num % 2 === 0);  // { even: [2, 4, 6], odd: [1, 3, 5] }
```
🎯 Решение:
```javascript
const groupByCondition = (arr, condition) => {
  return arr.reduce((acc, item) => {
    const key = condition(item) ? 'even' : 'odd';
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};
```
Объяснение:
- Мы используем `reduce()` для создания объекта, где ключами будут "even" и "odd", в зависимости от условия. Внутри `reduce()` мы проверяем, подходит ли элемент под условие, и группируем его в соответствующий массив.
Сложность: O(n), где `n` — длина массива.
---------------------------------------------------------------------------------------------  

