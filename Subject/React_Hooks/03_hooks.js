---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
3. Использование `useMemo` для оптимизации вычислений
⌛ Задача: Напишите компонент, который выполняет тяжёлые вычисления, и использует `useMemo` для оптимизации.
Пример:
```javascript
import { useMemo, useState } from 'react';

function FibonacciCalculator() {
  const [number, setNumber] = useState(0);

  const fib = useMemo(() => {
    const calculateFib = (n) => (n <= 1 ? n : calculateFib(n - 1) + calculateFib(n - 2));
    return calculateFib(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Fibonacci: {fib}</p>
    </div>
  );
}
```
🎯 Решение:
- `useMemo` используется для мемоизации результата вычислений. Ресчитает значение только при изменении `number`, что предотвращает повторные тяжёлые вычисления при каждом рендере.
---------------------------------------------------------------------------------------------  
