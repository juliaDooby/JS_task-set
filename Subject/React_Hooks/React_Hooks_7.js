7. Обработка асинхронных запросов с `useEffect`
⌛ Задача: Напишите компонент, который загружает данные с API при монтировании.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
🎯 Решение:
- В `useEffect` выполняется асинхронная операция загрузки данных, и состояние обновляется по завершению запроса.
---
