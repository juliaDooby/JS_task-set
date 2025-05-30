---------------------------------------------------------------------------------------------
⋙ ❍ Реализуйте функцию поиска пересечения двух массивов?
---
26. 
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
function intersection (a, b) {
// ??
}
intersection(first, second) // -> [3, 4]
Для поиска пересечения двух массивов можно воспользоваться методом `filter()`, который позволяет отфильтровать элементы массива на основе определенного условия. Вот как можно реализовать функцию поиска пересечения двух массивов:
```javascript
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
    // Отфильтровать элементы первого массива, оставив только те, которые также присутствуют во втором массиве
    return a.filter(item => b.includes(item));
}

console.log(intersection(first, second)); // -> [3, 4]
```
Эта функция принимает два массива в качестве аргументов и возвращает новый массив, содержащий элементы, которые присутствуют и в первом, и во втором массиве.
---------------------------------------------------------------------------------------------
