---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Найти второй по величине элемент в массиве.
🎯 Решение:
6.2. Два прохода (поиск макс, затем второго макс)
```javascript
function secondMax(arr) {
    let max = Math.max(...arr);
    let filtered = arr.filter(num => num !== max);
    return Math.max(...filtered);
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Находим максимум, фильтруем его, ищем максимум снова.
- O(N).
---------------------------------------------------------------------------------------------  
