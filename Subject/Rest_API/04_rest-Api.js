---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
4. Обработка ошибок при запросах
⌛ Задача: Напишите код для обработки ошибок, которые могут возникнуть при запросах к API.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchDataWithErrorHandling() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
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
- Если API не отвечает или URL неправильный, мы генерируем ошибку и выводим её пользователю.
---------------------------------------------------------------------------------------------  
