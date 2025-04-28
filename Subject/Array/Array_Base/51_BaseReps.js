---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
---
⌛ Задача: Проверить, является ли строка палиндромом.
🎯 Решение:
4.2. Два указателя
```javascript
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Два указателя двигаются навстречу друг другу.
- O(N).
---------------------------------------------------------------------------------------------  
