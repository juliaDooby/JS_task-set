3. Использование `useEffect` для очистки ресурсов
⌛ Задача: Напишите компонент, который устанавливает таймер, и очищает его при размонтировании компонента.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  return <p>{seconds} seconds</p>;
}
```
🎯 Решение:
- `useEffect` возвращает функцию очистки, которая вызывается при размонтировании компонента. В данном случае мы очищаем таймер.
---
