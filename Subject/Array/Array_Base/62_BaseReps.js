---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Найти второй по величине элемент в массиве.
🎯 Решение:
6.3. Один проход (два указателя)
```javascript
function secondMax(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Два указателя (`max`, `secondMax`).
- O(N).
---------------------------------------------------------------------------------------------  
