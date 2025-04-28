---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Какая строка встречается чаще всего:
---
0. Для того чтобы найти строку, которая встречается чаще всего в массиве строк, мы можем использовать объект для подсчёта количества повторений каждой строки. Затем мы просто находим строку с наибольшим количеством повторений.
🎯 Решение:
1. Пройдем по всем строкам в массиве и будем подсчитывать количество каждого элемента.
2. Найдем строку с наибольшим числом повторений.
🎯 Решение с использованием объекта для подсчета повторений:
```javascript
function mostFrequentString(arr) {
  const countMap = {};

  // Подсчитываем количество повторений каждой строки
  arr.forEach(str => {
    countMap[str] = (countMap[str] || 0) + 1;
  });

  // Находим строку с наибольшим количеством повторений
  let maxCount = 0;
  let mostFrequent = '';

  for (let str in countMap) {
    if (countMap[str] > maxCount) {
      maxCount = countMap[str];
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

// Пример использования:
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);

console.log(frequentString); // "apple"
```
Объяснение:
1. Мы создаём объект `countMap`, где ключи — это строки, а значения — количество их повторений.
2. Мы проходим по массиву и увеличиваем значение для каждой строки в объекте.
3. Затем мы проходим по объекту, чтобы найти строку с максимальным количеством повторений.
4. Функция возвращает строку, которая встречается чаще всего.
Пример 1:
```javascript
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "apple"
```
Пример 2:
```javascript
const strings = ["dog", "cat", "dog", "dog", "fish", "fish"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "dog"
```
Оптимизация:
- Этот метод работает за O(n), где n — количество элементов в массиве, так как мы проходим по массиву один раз и затем по объекту.
---------------------------------------------------------------------------------------------  
