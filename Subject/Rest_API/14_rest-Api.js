---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
14. Получение и отображение данных с кешированием
⌛ Задача: Кешировать данные для повторного использования.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithCache() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('posts');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('posts', JSON.stringify(data));
          setData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Данные кешируются в `localStorage` для использования при следующих запросах.
---------------------------------------------------------------------------------------------  
