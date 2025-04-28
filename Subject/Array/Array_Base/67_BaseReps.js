---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Развернуть порядок слов в строке.
🎯 Решение:
7.3. Цикл `for`
```javascript
function reverseWords(str) {
    let words = str.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    return reversed.join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Проходим по массиву слов в обратном порядке.
- O(N).
---------------------------------------------------------------------------------------------  
