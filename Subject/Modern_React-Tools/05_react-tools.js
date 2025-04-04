---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
5. Предотвращение повторных запросов с `React Query`
⌛ Задача: Обработать запросы, чтобы не отправлять их, если данные уже загружены.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    staleTime: 60000, // данные считаются актуальными 1 минуту
    cacheTime: 300000, // кэшированные данные сохраняются 5 минут
  });

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
- Параметры `staleTime` и `cacheTime` помогают избежать повторных запросов, если данные уже загружены и актуальны в течение определенного времени.
---------------------------------------------------------------------------------------------  
