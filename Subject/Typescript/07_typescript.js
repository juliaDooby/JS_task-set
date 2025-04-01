---------------------------------------------------------------------------------------------  
⋙ ❍ Typescript:
---
7. Типизация функции обратного вызова (callback)
⌛ Задача: Напишите функцию, которая принимает колбэк.
🎯 Решение:
```typescript
function processUser(id: number, callback: (id: number) => string): string {
  return callback(id);
}

const result = processUser(1, (id) => `User ID: ${id}`);
console.log(result); // "User ID: 1"
```
Объяснение: Тип колбэка задаётся `(id: number) => string`.
---------------------------------------------------------------------------------------------  
