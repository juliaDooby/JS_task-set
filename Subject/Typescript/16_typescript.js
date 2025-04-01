---------------------------------------------------------------------------------------------  
⋙ ❍ Typescript:
---
16. Типизация `fetch` запроса
⌛ Задача: Сделайте типизацию данных, возвращаемых запросом.
🎯 Решение:
```typescript
type User = {
  id: number;
  name: string;
};

async function fetchUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}

fetchUser().then((user) => console.log(user));
```
Объяснение: `Promise<User>` указывает тип данных, возвращаемых запросом.
---------------------------------------------------------------------------------------------  
