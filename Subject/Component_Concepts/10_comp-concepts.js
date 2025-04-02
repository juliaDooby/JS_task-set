---------------------------------------------------------------------------------------------  
⋙ ❍ Концепции компонентов (функциональные и классовые компоненты):
---
10. Хук useContext в функциональных компонентах
⌛ Задача: Напишите функциональный компонент, который использует `useContext` для получения данных из контекста.
Пример:
```javascript
import React, { useContext } from 'react';

const UserContext = React.createContext();

function UserProfile() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}

function App() {
  return (
    <UserContext.Provider value={{ name: 'Alice' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
```
🎯 Решение:
- `useContext` позволяет получать значение из контекста, который предоставляется через компонент-поставщик `UserContext.Provider`.
---------------------------------------------------------------------------------------------  
