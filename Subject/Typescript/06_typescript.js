---------------------------------------------------------------------------------------------  
⋙ ❍ Typescript:
---
6. Использование `enum`
⌛ Задача: Создайте перечисление для ролей пользователя.
🎯 Решение:
```typescript
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

const userRole: Role = Role.User;
console.log(userRole); // "User"
```
Объяснение: `enum` используется для создания набора значений.
---------------------------------------------------------------------------------------------  
