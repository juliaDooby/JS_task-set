---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
0. Получение данных с REST API (GET)
⌛ Задача: Напишите код, который делает запрос к API и отображает полученные данные.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
- Используется `fetch()` для выполнения GET-запроса.
- В `useEffect` загружаем данные при монтировании компонента.
- Ответ обрабатывается через `.json()`, и данные сохраняются в состоянии с помощью `setData`.
---------------------------------------------------------------------------------------------  
