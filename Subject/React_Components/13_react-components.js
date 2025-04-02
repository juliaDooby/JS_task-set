--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
13. Контекст React (`useContext`)
⌛ Задача: Используйте контекст для передачи данных между компонентами.
🎯 Решение:
```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}

function Parent() {
  return (
    <UserContext.Provider value="Alice">
      <Child />
    </UserContext.Provider>
  );
}

export default Parent;
```
Объяснение: Контекст позволяет передавать данные через дерево компонентов без пропсов.
---------------------------------------------------------------------------------------------  
