---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
5. Оптимизация вложенных компонентов с `React.memo` и `useCallback`
⌛ Задача: Использование `useCallback` и `React.memo` для оптимизации дочерних компонентов.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` предотвращает пересоздание функции, а `React.memo` оптимизирует рендер дочернего компонента, если его пропсы не изменились.
---------------------------------------------------------------------------------------------
