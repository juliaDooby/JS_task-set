---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
3. Передача массивов
⌛ Задача: Используйте массив для управления классами.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isLarge }) => {
  const buttonClass = classNames([
    'button',
    { primary: isPrimary, large: isLarge },
  ]);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isLarge={false} />; // <button class="button primary">Click me</button>
```
Объяснение: Массив помогает комбинировать классы из разных источников.
---------------------------------------------------------------------------------------------
