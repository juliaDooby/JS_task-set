13. Использование `useEffect` для подписки на события
⌛ Задача: Напишите компонент, который подписывается на события и очищает подписку при размонтировании.
Пример:
```javascript
import { useEffect } from 'react';

function EventListener() {
  useEffect(() => {
    const handleResize = () => console.log('Window resized');
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Resize the window and check the console!</p>;
}
```
🎯 Решение:
- Используем `useEffect`, чтобы подписаться на событие `resize` и очистить подписку при размонтировании компонента.
---

