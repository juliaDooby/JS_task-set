---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
3. Глубокое сравнение двух объектов
⌛ Задача: Напишите функцию, которая проверяет, равны ли два объекта, включая вложенные объекты.
Пример:
```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
deepEqual(obj1, obj2); // true
```
🎯 Решение:
```javascript
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
};
```
Объяснение:
- Функция рекурсивно сравнивает все свойства объектов.
- Если объект содержит вложенные объекты, вызываем `deepEqual()` снова.
Сложность: O(n), где `n` — количество свойств, включая вложенные.
---------------------------------------------------------------------------------------------  
