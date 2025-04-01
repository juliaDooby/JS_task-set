---------------------------------------------------------------------------------------------
⋙ ❍ Реализуйте функцию reduce с помощью рекурсии?
---
18. Вот пример реализации функции `reduce()` с использованием рекурсии:
```javascript
function reduce(arr, callback, initialValue) {
  // Проверка наличия начального значения
  if (initialValue !== undefined) {
    return reduceHelper(arr, callback, initialValue, 0);
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    return reduceHelper(arr.slice(1), callback, arr[0], 1);
  }
}

function reduceHelper(arr, callback, accumulator, index) {
  // Базовый случай: если индекс достиг длины массива, возвращаем аккумулятор
  if (index === arr.length) {
    return accumulator;
  }
  // Рекурсивный случай: применяем функцию callback к текущему элементу и результату предыдущего вызова
  const newAccumulator = callback(accumulator, arr[index], index, arr);
  // Рекурсивный вызов с обновленными значениями
  return reduceHelper(arr, callback, newAccumulator, index + 1);
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const sum = reduce(arr, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
```
Эта реализация `reduce()` работает как стандартный метод `reduce()`. Она принимает массив, функцию обратного вызова и (опционально) начальное значение аккумулятора. Рекурсивная функция `reduceHelper()` обходит массив, применяя функцию обратного вызова к каждому элементу и обновляя аккумулятор на каждом шаге.
---------------------------------------------------------------------------------------------
