---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. Вариации первого способа:
---
3. Сравнение значений в частях массива
Если массив очень большой, вы можете разбить его на части и находить максимум или минимум каждой части, а затем искать максимальное/минимальное значение среди результатов.
🎯 Решение:
Код:
```javascript
function getMaxMinInChunks(arr, chunkSize) {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push({
      max: Math.max(...chunk),
      min: Math.min(...chunk),
    });
  }

  const overallMax = Math.max(...results.map(r => r.max));
  const overallMin = Math.min(...results.map(r => r.min));

  return { overallMax, overallMin };
}

const numbers = [10, 5, 8, 20, 1, -5, 15, 30, -10, 50];
const { overallMax, overallMin } = getMaxMinInChunks(numbers, 3);

console.log(overallMax); // 50
console.log(overallMin); // -10
```
Объяснение:
- Массив делится на куски с помощью `slice`.
- Для каждого куска находится локальный максимум/минимум.
- Находим общий максимум/минимум из результатов.
Когда использовать:
- Когда массив очень большой, и вы хотите разделить его обработку.
---------------------------------------------------------------------------------------------  
