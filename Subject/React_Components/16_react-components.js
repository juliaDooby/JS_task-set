--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
16. Ленивая загрузка компонента
⌛ Задача: Загрузите компонент лениво.
🎯 Решение:
```jsx
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
```
Объяснение: `React.lazy` используется для ленивой загрузки компонентов.
---------------------------------------------------------------------------------------------  
