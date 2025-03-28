5. Использование `useCallback` для мемоизации функции
⌛ Задача: Напишите компонент, который использует `useCallback` для мемоизации обработчика кликов.
Пример:
```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useCallback` мемоизирует функцию `increment`, предотвращая её пересоздание при каждом рендере компонента `Parent`.
---
