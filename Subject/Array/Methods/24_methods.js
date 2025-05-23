---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
24. Нахождение суммы всех элементов массива
⌛ Задача:
Необходимо вычислить сумму всех чисел в массиве.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0); // Используем reduce для суммирования элементов
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Метод `reduce()` позволяет аккумулировать результат, в данном случае сумму элементов массива.
- Начальное значение аккумулятора — 0.
- Сложность: \( O(n) \), так как мы проходим по всем элементам массива.
---------------------------------------------------------------------------------------------  
