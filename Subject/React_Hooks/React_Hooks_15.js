15. Использование `useEffect` для выполнения побочных эффектов при изменении пропсов
⌛ Задача: Напишите компонент, который выполняет побочный эффект при изменении пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer({ delay }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [delay]);  // Перезапускаем таймер, если изменился delay

  return <p>Time: {time}</p>;
}
```
🎯 Решение:
- `useEffect` с зависимостью от пропса `delay` позволяет перезапускать таймер, когда изменяется этот пропс.
