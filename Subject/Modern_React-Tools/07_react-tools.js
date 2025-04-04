---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
7. Статическая генерация с Next.js (SSG)
⌛ Задача: Создать статически генерируемую страницу с данными, полученными во время сборки.
🎯 Решение:
```javascript
// pages/index.js
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```
Объяснение:
- В Next.js статическая генерация осуществляется с помощью `getStaticProps`. Она выполняется на этапе сборки и генерирует HTML для страницы.
---------------------------------------------------------------------------------------------  
