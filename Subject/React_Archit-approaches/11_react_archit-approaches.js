--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
11. Комбинирование `useState` и `useEffect` для работы с API
⌛ Задача: Загружать данные из API и обновлять состояние с помощью `useState` и `useEffect`.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
```
Объяснение:
- `useEffect` используется для выполнения побочных эффектов (например, асинхронных запросов) при монтировании компонента. С помощью `useState` мы сохраняем данные, полученные с сервера.
---------------------------------------------------------------------------------------------  
