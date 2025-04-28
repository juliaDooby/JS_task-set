---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Проверить, является ли строка палиндромом.
🎯 Решение:
4.3. Рекурсивный способ
```javascript
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Сравниваем первый и последний символы.
- O(N), но O(N) памяти.
---------------------------------------------------------------------------------------------  
