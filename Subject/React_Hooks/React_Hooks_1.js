---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
1. Использование `useState` для хранения состояния
⌛ Задача: Напишите компонент, который использует `useState` для хранения счётчика и кнопки для его увеличения.
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useState(0)` инициализирует состояние счётчика значением 0.
- `setCount(count + 1)` обновляет состояние при клике на кнопку.
---
