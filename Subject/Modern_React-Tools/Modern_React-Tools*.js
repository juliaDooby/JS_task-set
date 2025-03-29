---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
1. Навигация с помощью React Router (React Router v6)
⌛ Задача: Реализовать простую навигацию между страницами с использованием `React Router`.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- `React Router` используется для организации клиентской навигации. Мы используем `Routes` и `Route` для определения маршрутов, а `Link` для перехода по ним.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
2. Динамическая навигация с параметрами в React Router
⌛ Задача: Создать маршруты с динамическими параметрами (например, ID).
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- Мы использовали параметр `:id` в маршруте, чтобы отображать информацию, которая зависит от переданного параметра в URL. `useParams` позволяет получить доступ к этим параметрам в компоненте.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
3. Ленивая загрузка маршрутов с React Router
⌛ Задача: Ленивая загрузка компонентов для маршрутов, чтобы уменьшить начальный размер бандла.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```
Объяснение:
- Для ленивой загрузки компонентов используется `React.lazy` и `Suspense`. Это позволяет загружать компоненты только по мере их необходимости, что улучшает производительность приложения.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
4. Fetch данных с использованием React Query
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
5. Использование Mutation с React Query
⌛ Задача: Отправка данных через POST-запрос с использованием `useMutation` из `React Query`.
🎯 Решение:
```javascript
import { useMutation } from 'react-query';

async function postData(newData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}

function AddPost() {
  const mutation = useMutation(postData);

  const handleSubmit = () => {
    mutation.mutate({ title: 'New Post', body: 'This is a new post' });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Post</button>
      {mutation.isLoading && <div>Adding post...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Post added!</div>}
    </div>
  );
}
```
Объяснение:
- `useMutation` позволяет выполнять операции, такие как создание, обновление или удаление данных на сервере. Мы вызываем `mutate` для отправки данных.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
6. Предотвращение повторных запросов с `React Query`
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
7. Создание серверного рендеринга с Next.js
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
8. Статическая генерация с Next.js (SSG)
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
9. Динамическая маршрутизация в Next.js
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
10. Обработка ошибок с React Query
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
11. Ленивая загрузка с `React Query`
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
12. Использование Next.js для рендеринга API на сервере
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
13. Автоматическая маршрутизация в Next.js (Pages Router)
⌛ Задача: Использовать автоматическую маршрутизацию, основанную на файлах, в Next.js.
🎯 Решение:
- В Next.js структура маршрутов соответствует структуре файлов в папке `pages`. Например:
  - `/pages/index.js` → маршрут `/`
  - `/pages/about.js` → маршрут `/about`
  - `/pages/blog/[id].js` → динамический маршрут `/blog/:id`
Объяснение:
- Next.js автоматически генерирует маршруты на основе файловой структуры, что значительно упрощает работу с роутингом и ускоряет разработку.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
14. Оптимизация с использованием `next/image`
⌛ Задача: Использовать компонент `Image` для оптимизации изображений в Next.js.
🎯 Решение:
```javascript
import Image from 'next/image';

function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      <Image
        src="/static/post-image.jpg"
        alt="Blog Post Image"
        width={500}
        height={300}
      />
    </div>
  );
}
```
Объяснение:
- `next/image` автоматически оптимизирует изображения, включая поддержку различных размеров и форматов, что помогает ускорить загрузку страниц.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
15. Группировка API-запросов с React Query
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
