---------------------------------------------------------------------------------------------  
⋙ ❍ Задания с Примитивами:
---
17. Проверка типа данных с использованием `typeof`
⌛ Задача: Напишите функцию, которая принимает значение и возвращает его тип с использованием оператора `typeof`.
🎯 Решение:
```javascript
function checkType(value) {
  return typeof value;
}

console.log(checkType(123)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(true)); // "boolean"
console.log(checkType({})); // "object"
console.log(checkType(undefined)); // "undefined"
```
Объяснение: Оператор `typeof` возвращает строку, указывающую тип переданного значения.
---------------------------------------------------------------------------------------------  
