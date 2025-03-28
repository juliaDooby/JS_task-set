---------------------------------------------------------------------------------------------
11
⋙ ❍ Развернуть массив без .reverse(): ?
---
Чтобы развернуть массив в JavaScript без использования метода `.reverse()`, можно использовать цикл:
1: С помощью цикла `for`
```javascript
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
2: С использованием метода `reduce`
```javascript
function reverseArray(arr) {
    return arr.reduce((reversed, item) => [item, ...reversed], []);
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
3: Обмен значений местами внутри исходного массива
Если нужно развернуть массив на месте, без создания нового:
```javascript
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Обмен значений
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

let original = [1, 2, 3, 4, 5];
reverseArrayInPlace(original);

console.log(original); // [5, 4, 3, 2, 1]
```
Выбирайте метод в зависимости от ваших задач: создание нового массива или изменение исходного.
---------------------------------------------------------------------------------------------
