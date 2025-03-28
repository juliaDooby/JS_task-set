14. Отображение состояния загрузки с `useState`
⌛ Задача: Напишите компонент, который отображает индикатор загрузки, пока данные не загружены.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>{data.message}</p>;
}
```
🎯 Решение:
- Сначала показываем индикатор загрузки, а после завершения асинхронной операции отображаем полученные данные.
---
