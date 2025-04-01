---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
1. Условные классы
⌛ Задача: Добавьте классы `enabled` или `disabled` в зависимости от пропса `isEnabled`.
🎯 Решение:
```javascript
const Button = ({ isEnabled }) => {
  const buttonClass = classNames({
    enabled: isEnabled,
    disabled: !isEnabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isEnabled={false} />; // <button class="disabled">Click me</button>
```
Объяснение: `classnames` позволяет удобно управлять добавлением классов на основе условий.
---------------------------------------------------------------------------------------------
