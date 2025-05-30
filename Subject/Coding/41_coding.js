---------------------------------------------------------------------------------------------
📌 [ЗАДАЧИ MIDDLE/SENIOR В ОДНОМ ИЗВЕСТНОМ БАНКЕ ✅]:
---------------------
⋙ ❍ Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом: ?
---
41. 
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
1
2
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
Вы можете создать функцию `sum`, которая будет принимать один или два аргумента и возвращать сумму этих чисел. Вот как это можно сделать:
```javascript
function sum(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2, 3));   // Выведет: 5
console.log(sum(2)(3));   // Выведет: 5
```
Эта функция проверяет, сколько аргументов ей передано. Если передан только один аргумент, она возвращает функцию, которая ожидает второй аргумент и возвращает их сумму. Если передано два аргумента, она просто возвращает их сумму.
---------------------------------------------------------------------------------------------
