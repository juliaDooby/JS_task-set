---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
17. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта.
🎯 Решение:
```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread (`...`) для объединения двух объектов. Если ключи совпадают, значение из второго объекта перезапишет значение из первого.
---------------------------------------------------------------------------------------------  
