---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
6. Создание серверного рендеринга с Next.js
⌛ Задача: Реализовать серверный рендеринг (SSR) в Next.js.
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

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```

Объяснение:
- В Next.js серверный рендеринг осуществляется с помощью функции `getServerSideProps`. Она выполняется на сервере перед рендерингом страницы и передает данные как `props` в компонент.
---------------------------------------------------------------------------------------------  
