9. Задержка обновления состояния с `setTimeout` и `useEffect`
⌛ Задача: Напишите компонент, который задерживает обновление состояния на 2 секунды.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DelayedUpdate() {
  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    const timer = setTimeout(() => setMessage('Updated after 2 seconds'), 2000);
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return <p>{message}</p>;
}
```
🎯 Решение:
- `setTimeout` используется для задержки обновления состояния на определённое время. Функция очистки отменяет таймер при размонтировании.
---

