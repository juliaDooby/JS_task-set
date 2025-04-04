---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
2. Ленивая загрузка маршрутов с React Router
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
