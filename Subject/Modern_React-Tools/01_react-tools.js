---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
1. Динамическая навигация с параметрами в React Router
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
