---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
50. Проверка палиндрома
⌛ Задача: Проверить, является ли строка палиндромом.
🎯 Решение:
4.1. Сравнение с `reverse()`
```javascript
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Разворачиваем строку и сравниваем.
- O(N).
---------------------------------------------------------------------------------------------  
