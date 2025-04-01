---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
11. Получение данных с авторизацией
⌛ Задача: Получить данные с API с авторизацией через Bearer Token.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithAuth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
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
- Заголовок `Authorization: Bearer` используется для отправки токена аутентификации.
---------------------------------------------------------------------------------------------  
