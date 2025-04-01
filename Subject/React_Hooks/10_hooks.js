---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
10. Обновление состояния при изменении props с `useEffect`
⌛ Задача: Напишите компонент, который обновляет состояние на основе изменения пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Child({ value }) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return <p>{internalValue}</p>;
}
```
🎯 Решение:
- `useEffect` обновляет состояние `internalValue` при изменении пропса `value`.
---------------------------------------------------------------------------------------------  
