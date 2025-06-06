--------------------------------------------------------------------------------------------- 
⋙ ❍ Решение практических задач по программированию:
---
2️⃣ Проверка на число Фибоначи
⌛ Задача: Напишите функцию, которая проверяет, является ли число частью последовательности Фибоначчи.
🎯 Решение:
```js
function isFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num;
}

console.log(isFibonacci(8)); // true
console.log(isFibonacci(10)); // false
```
Объяснение: Мы генерируем числа Фибоначчи до тех пор, пока не дойдем до или не превысим нужное число.
--------------------------------------------------------------------------------------------- 
