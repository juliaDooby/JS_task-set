---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
9. Обработка ошибок с React Query
⌛ Задача: Обработка ошибок при запросах с помощью `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- `React Query` имеет встроенную обработку ошибок. Мы можем использовать свойство `error` для отображения ошибки в случае сбоя запроса.
--------------------------------------------------------------------------------------------- 
