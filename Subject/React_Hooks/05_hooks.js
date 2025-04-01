---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
5. Использование `useRef` для хранения мутируемого значения
⌛ Задача: Напишите компонент, который использует `useRef` для хранения предыдущего значения состояния.
Пример:
```javascript
import { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useRef` хранит мутируемое значение между рендерами. В данном случае мы сохраняем предыдущее значение состояния.
---------------------------------------------------------------------------------------------  
