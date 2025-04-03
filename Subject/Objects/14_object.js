---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
14. Фильтрация вложенного объекта
⌛ Задача: Напишите функцию, которая удаляет из объекта все `null` и `undefined` значения, включая вложенные объекты.
Пример:
```javascript
const obj = { a: 1, b: null, c: { d: 2, e: undefined } };
cleanObject(obj);
```
Выход:
```javascript
{ a: 1, c: { d: 2 } }
```
🎯 Решение:
```javascript
const cleanObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;

  return Object.entries(obj)
    .filter(([_, value]) => value !== null && value !== undefined)
    .reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'object' ? cleanObject(value) : value;
      return acc;
    }, {});
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
Вывод
Эти задачи охватывают ключевые концепции работы с объектами в JavaScript:
✅ Перебор (`Object.keys()`, `Object.values()`, `Object.entries()`).
✅ Глубокое копирование и сравнение.
✅ Фильтрация и группировка данных.
✅ Поиск и манипуляция значениями.
---------------------------------------------------------------------------------------------  
