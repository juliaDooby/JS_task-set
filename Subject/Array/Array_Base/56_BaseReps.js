---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Удалить повторяющиеся элементы в массиве и вернуть уникальные значения.
🎯 Решение:
5.2. Использование `filter()` и `indexOf()`
```javascript
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- `indexOf()` проверяет, если элемент встречается впервые.
- O(N²) (медленно для больших массивов).
---------------------------------------------------------------------------------------------  
