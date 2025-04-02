---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
3. Оптимизация списка с помощью `React.memo`
⌛ Задача: Избежать лишних рендеров компонента списка, если его пропсы не изменились.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ListItem = React.memo(({ item }) => {
  console.log('Item rendered');
  return <li>{item}</li>;
});

function App() {
  const [list, setList] = useState(['Item 1', 'Item 2']);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
```
Объяснение:
- `React.memo` предотвращает повторный рендер компонента, если его пропсы не изменились. В примере `ListItem` будет рендериться только при изменении его пропса.
---------------------------------------------------------------------------------------------  
