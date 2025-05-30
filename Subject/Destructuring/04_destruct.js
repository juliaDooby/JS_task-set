---------------------------------------------------------------------------------------------   
⋙ ❍ Деструктуризация:
---
4. Переименование переменных
⌛ Задача: Извлеките `name` из объекта, но присвойте его другой переменной.
🎯 Решение:
```javascript
const person = { name: "Alice", age: 25 };
const { name: fullName } = person;

console.log(fullName); // "Alice"
```
Объяснение: Переименование переменных полезно для избежания конфликтов имен.
--------------------------------------------------------------------------------------------- 
