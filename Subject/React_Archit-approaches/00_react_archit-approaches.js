---------------------------------------------------------------------------------------------  
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
0. Управление состоянием с `useState` и передача данных между компонентами
⌛ Задача: Использование `useState` для управления состоянием и передачи данных между компонентами.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}
```
Объяснение:
- В данном примере состояние хранится в родительском компоненте, а дочерний компонент получает его через `props`. Это помогает избежать сложностей с состоянием в нескольких компонентах.
---------------------------------------------------------------------------------------------  
