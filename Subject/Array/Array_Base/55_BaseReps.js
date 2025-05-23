---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
55. Удаление дубликатов из массива
⌛ Задача: Удалить повторяющиеся элементы в массиве и вернуть уникальные значения.
🎯 Решение:
5.1. Использование `Set`
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- `Set` хранит только уникальные значения.
- O(N).
---------------------------------------------------------------------------------------------  
