---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
18. Глубокое сравнение объектов
⌛ Задача: Напишите функцию для глубокого сравнения двух объектов.
🎯 Решение:
```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1 }, { b: 1 })); // false
```
Объяснение:
- Используется рекурсивный метод для глубокого сравнения всех свойств объектов.
---------------------------------------------------------------------------------------------  
