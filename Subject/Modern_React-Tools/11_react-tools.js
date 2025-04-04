---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
11. Использование Next.js для рендеринга API на сервере
⌛ Задача: Создать серверный API в Next.js.
🎯 Решение:
```javascript
// pages/api/posts.js
export async function handler(req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  res.status(200).json(posts);
}
```
Объяснение:
- В Next.js можно создавать API-роуты внутри папки `pages/api`. Эти API-роуты могут выполнять серверные операции, такие как запросы к базе данных или другим API.
---------------------------------------------------------------------------------------------  
