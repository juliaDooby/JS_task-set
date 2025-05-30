---------------------------------------------------------------------------------------------  
⋙ ❍ Typescript:
---
12. Типизация деструктуризации
⌛ Задача: Деструктурируйте объект с типизацией.
🎯 Решение:
```typescript
const user: { name: string; age: number } = { name: "Alice", age: 25 };
const { name, age }: { name: string; age: number } = user;

console.log(name, age); // "Alice", 25
```
Объяснение: Указывается тип для деструктурируемых переменных.
---------------------------------------------------------------------------------------------  
