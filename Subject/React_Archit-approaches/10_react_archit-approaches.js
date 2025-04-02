--------------------------------------------------------------------------------------------- 
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
10. Использование `React.memo` для предотвращения лишних ререндеров
⌛ Задача: Оптимизация производительности компонента с помощью `React.memo`, чтобы предотвратить лишние ререндеры.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <h2>Count: {count}</h2>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('Some text');

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState('Updated text')}>Update Other State</button>
    </div>
  );
}
```
Объяснение:
- `React.memo` помогает избежать лишних ререндеров, если пропсы компонента не изменились. В данном случае, `ChildComponent` будет перерисовываться только при изменении `count`.
---------------------------------------------------------------------------------------------  
