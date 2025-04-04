---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
8. Динамическая маршрутизация в Next.js
⌛ Задача: Создать динамические маршруты с использованием Next.js.
🎯 Решение:
```javascript
// pages/posts/[id].js
import React from 'react';

function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export

 default Post;
```
Объяснение:
- В Next.js динамические маршруты создаются с помощью квадратных скобок в имени файла, например, `[id].js`. Функция `getServerSideProps` позволяет получить данные на сервере по переданному параметру маршрута.
---------------------------------------------------------------------------------------------  
