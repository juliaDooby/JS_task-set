--------------------------------------------------------------------------------------------- 
⋙ ❍ Сортировка массива:
---
21.
2. Реализация сортировки слиянием (Merge Sort)
Алгоритм сортировки слиянием — это один из эффективных алгоритмов сортировки с временем выполнения O(N log N). Он работает по принципу "разделяй и властвуй".
🎯 Пример реализации сортировки слиянием
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Рекурсивно сортируем левую половину
  const right = mergeSort(arr.slice(mid)); // Рекурсивно сортируем правую половину

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const array = [5, 2, 8, 1, 4, 7];
console.log(mergeSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Алгоритм делит массив пополам, сортирует каждую половину рекурсивно и затем сливает отсортированные части.
- Сложность: O(N log N).
--------------------------------------------------------------------------------------------- 
