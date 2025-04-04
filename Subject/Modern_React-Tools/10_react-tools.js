---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
10. Ленивая загрузка с `React Query`
⌛ Задача: Загружать данные только при необходимости (например, при прокрутке).
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    enabled: false, // запрос не будет выполняться при монтировании компонента
  });

  const handleFetchData = () => {
    data.refetch();
  };

  return (
    <div>
      <button onClick={handleFetchData}>Load Posts</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
    </div>
  );
}
```
Объяснение:
- `enabled: false` предотвращает выполнение запроса при монтировании компонента. Запрос выполняется только после вызова `refetch`, например, при клике на кнопку.
---------------------------------------------------------------------------------------------  
