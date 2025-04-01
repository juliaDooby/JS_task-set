---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
0. Простое использование `classnames`
⌛ Задача: Добавьте класс `active` к компоненту, если передан пропс `isActive`.
🎯 Решение:
```javascript
import classNames from 'classnames';

const Button = ({ isActive }) => {
  const buttonClass = classNames({ active: isActive });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isActive={true} />; // <button class="active">Click me</button>
```
Объяснение: Если `isActive` равен `true`, класс `active` будет добавлен.
---------------------------------------------------------------------------------------------
