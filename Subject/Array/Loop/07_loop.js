---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
7. Использование цикла `for...of`
Цикл `for...of` позволяет перебирать элементы массива, и таким же образом можно отслеживать наибольший и наименьший элементы.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (const num of numbers) {
  if (num > max) max = num;
  if (num < min) min = num;
}

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Этот метод использует цикл `for...of` для перебора всех элементов массива.
- В цикле проверяется, если текущий элемент больше или меньше максимального и минимального значений, обновляем их.
Сложность:
- Временная сложность: \( O(n) \).
- Пространственная сложность: \( O(1) \).
---------------------------------------------------------------------------------------------  
