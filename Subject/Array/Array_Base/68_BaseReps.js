---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Развернуть порядок слов в строке.
🎯 Решение:
7.4. Использование стека (`push()` и `pop()`)
```javascript
function reverseWords(str) {
    let words = str.split(" ");
    let stack = [];
    for (let word of words) stack.push(word);
    return stack.reverse().join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Заполняем массив (`push()`), переворачиваем (`reverse()`).
- O(N).
---------------------------------------------------------------------------------------------  
