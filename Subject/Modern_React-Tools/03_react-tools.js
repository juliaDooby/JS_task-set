---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
3. Fetch данных с использованием React Query
⌛ Задача: Загружать данные с API с использованием `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
- `useQuery` из `React Query` используется для получения данных с сервера и автоматического обновления компонентов при изменении данных.
---------------------------------------------------------------------------------------------  
