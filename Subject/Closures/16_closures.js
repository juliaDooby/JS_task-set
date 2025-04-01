---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 16: Генератор паролей
Создайте функцию `passwordGenerator`, которая возвращает уникальные пароли.
🎯 Решение:
```javascript
function passwordGenerator() {
  let index = 0;

  return function () {
    return `pass-${++index}-${Date.now()}`;
  };
}

const generatePassword = passwordGenerator();
console.log(generatePassword()); // pass-1-<timestamp>
console.log(generatePassword()); // pass-2-<timestamp>
```
Объяснение:
- Замыкание сохраняет `index`, чтобы каждый пароль был уникальным.
---------------------------------------------------------------------------------------------  
