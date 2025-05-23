--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
17. Мемоизация компонента (`React.memo`)
⌛ Задача: Используйте `React.memo` для предотвращения ненужного ререндеринга.
🎯 Решение:
```jsx
import React from "react";

const MemoizedComponent = React.memo(({ name }) => {
  console.log("Rendered");
  return <h1>Hello, {name}!</h1>;
});

export default MemoizedComponent;

// Использование
<MemoizedComponent name="Alice" />;
```
Объяснение: `React.memo` предотвращает повторный ререндеринг, если пропсы не изменились.
---------------------------------------------------------------------------------------------  
