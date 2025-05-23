--------------------------------------------------------------------------------------------- 
⋙ ❍ Решение практических задач по программированию:
---
5️⃣ Уникальные элементы в массиве
⌛ Задача: Напишите функцию, которая возвращает массив с уникальными элементами (удаляет дубликаты).
🎯 Решение:
```js
function uniqueElements(arr) {
  return [...new Set(arr)];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение: Мы используем объект `Set`, который хранит только уникальные значения, и затем преобразуем его обратно в массив с помощью оператора распространения.
--------------------------------------------------------------------------------------------- 
