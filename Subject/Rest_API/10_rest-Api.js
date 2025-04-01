---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
10. Получение данных с пагинацией
⌛ Задача: Получить данные с пагинацией.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithPagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page <= 1}>
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
```
Объяснение:
- Мы используем параметры запроса для пагинации (`_page`, `_limit`), чтобы запрашивать по 10 элементов за раз.
---------------------------------------------------------------------------------------------  
