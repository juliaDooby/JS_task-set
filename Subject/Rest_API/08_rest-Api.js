---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
8. Получение данных с кастомными заголовками
⌛ Задача: Выполните GET-запрос с кастомными заголовками.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithHeaders() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
        'Custom-Header': 'CustomValue',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
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
- Мы добавляем кастомные заголовки в запрос для аутентификации и других нужд.
---------------------------------------------------------------------------------------------  
