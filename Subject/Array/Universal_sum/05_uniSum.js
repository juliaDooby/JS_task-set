---------------------------------------------------------------------------------------------  
⋙ ❍ Универсальная сумма:
---
5. Суммирование с учётом типов (например, строки и числа)
Предположим, что нам нужно суммировать числовые значения, а строки при этом объединять.
🎯 Решение:
```javascript
function sumOrConcatenate(arr) {
  return arr.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc.sum += item;
    } else if (typeof item === 'string') {
      acc.concat += item;
    }
    return acc;
  }, { sum: 0, concat: '' });
}

const mixedArray = [1, 'hello', 2, 'world', 3];
const result = sumOrConcatenate(mixedArray);

console.log(result.sum); // 6
console.log(result.concat); // "helloworld"
```
Объяснение:
- Мы используем `reduce()`, чтобы пройти по всем элементам массива.
- Если элемент является числом, мы добавляем его к сумме.
- Если элемент является строкой, мы добавляем его к строке.
---------------------------------------------------------------------------------------------  
