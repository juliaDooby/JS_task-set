--------------------------------------------------------------------------------------------- 
⋙ ❍ Решение практических задач по программированию:
---------------------
3️⃣ Максимальное произведение после удаления одного элемента
⌛ Задача: Напишите функцию, которая находит максимальное произведение чисел в массиве после удаления одного элемента.
🎯 Решение:
```js
function maxProduct(arr) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;

  for (let num of arr) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  let productExcludingMin = max1 * max2 * max3;
  let productExcludingMax = min1 * min2 * max1;

  return Math.max(productExcludingMin, productExcludingMax);
}

console.log(maxProduct([1, 2, 3, 4])); // 24
console.log(maxProduct([-10, -10, 5, 2])); // 500
```
Объяснение: Мы находим три максимальных числа и два минимальных числа. После этого рассматриваем два варианта: исключение минимального числа из произведения и исключение максимального. Мы выбираем максимальный результат.
--------------------------------------------------------------------------------------------- 
