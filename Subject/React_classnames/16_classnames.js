---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
16. Динамическая смена состояния
⌛ Задача: Меняйте классы при нажатии на кнопку.
🎯 Решение:
```javascript
import { useState } from 'react';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const buttonClass = classNames('button', { active: isActive });

  return (
    <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
      Click me
    </button>
  );
};

// Использование
<Button />;
```
Объяснение: Вы можете динамически изменять классы через состояние компонента.
---------------------------------------------------------------------------------------------
