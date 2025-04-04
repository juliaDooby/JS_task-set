---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
14. Группировка API-запросов с React Query
⌛ Задача: Загружать данные из нескольких источников одновременно с помощью `React Query`.
🎯 Решение:
```javascript
import { useQueries } from 'react-query';

function PostsAndUsers() {
  const queries = useQueries([
    { queryKey: 'posts', queryFn: fetchPosts },
    { queryKey: 'users', queryFn: fetchUsers },
  ]);

  const posts = queries[0].data;
  const users = queries[1].data;

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>

      <h2>Users</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
```
Объяснение:
- `useQueries` позволяет выполнять несколько запросов параллельно, что полезно для загрузки различных данных одновременно и синхронного отображения.
---------------------------------------------------------------------------------------------  
