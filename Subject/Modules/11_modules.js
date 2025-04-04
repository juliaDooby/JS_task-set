---------------------------------------------------------------------------------------------    
⋙ ❍ Модули:
--- 
11. Ленивая загрузка компонента React
⌛ Задача: Загрузите компонент React динамически.
🎯 Решение:
```javascript
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
```
Объяснение: `React.lazy` позволяет лениво загружать компоненты.
---------------------------------------------------------------------------------------------   
