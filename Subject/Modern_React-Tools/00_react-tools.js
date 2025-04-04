---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
0. Навигация с помощью React Router (React Router v6)
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
