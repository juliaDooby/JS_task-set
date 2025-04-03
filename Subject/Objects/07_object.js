---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
7. Глубокое копирование объекта
⌛ Задача: Напишите функцию, которая создаёт глубокую копию объекта.
Пример:
```javascript
const obj = { a: 1, b: { c: 2 } };
const copy = deepClone(obj);
copy.b.c = 42;
console.log(obj.b.c); // 2 (исходный объект не изменился)
```
🎯 Решение:
```javascript
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
```
Объяснение:
- `JSON.stringify(obj)` превращает объект в строку.
- `JSON.parse()` создаёт новый объект из строки.
- Недостаток: теряются функции и `undefined`.
Альтернативный метод (рекурсия, работает с функциями):
```javascript
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
---------------------------------------------------------------------------------------------  
