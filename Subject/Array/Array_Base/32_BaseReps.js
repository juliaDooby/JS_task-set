---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Найти максимальное число в массиве.
🎯 Решение:
0.3. Метод `reduce()`
```javascript
function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- `reduce()` сравнивает элементы и сохраняет максимальное значение.
- Работает за O(N).
--------------------------------------------------------------------------------------------- 
