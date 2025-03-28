10. Хранение значений, которые не рендерят компонент с `useRef`
⌛ Задача: Напишите компонент, который использует `useRef` для хранения значений, которые не должны вызывать рендер при изменении.
Пример:
```javascript
import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useRef` позволяет хранить значения между рендерами, но не вызывает повторный рендер компонента при изменении этих значений.
---

