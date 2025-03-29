---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
2. Поиск самого частого элемента в массиве
⌛ Задача: Напишите функцию, которая находит самый часто встречающийся элемент в массиве.
Пример:
```javascript
const arr = [1, 3, 3, 2, 2, 2, 5];
mostFrequentElement(arr);  // 2
```
🎯 Решение:
```javascript
const mostFrequentElement = (arr) => {
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequent = null;

  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxCount) {
      maxCount = frequencyMap[key];
      mostFrequent = key;
    }
  }

  return mostFrequent;
};
```
Объяснение:
- Мы используем объект `frequencyMap`, чтобы подсчитать, сколько раз каждый элемент встречается в массиве.
- Затем мы проходим по объекту и находим элемент с максимальной частотой.
Сложность: O(n), где `n` — длина массива.
---------------------------------------------------------------------------------------------  
