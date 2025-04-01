---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
4. Передача объектов
⌛ Задача: Добавьте несколько классов с объектом условий.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames({
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={true} />; // <button class="btn-primary btn-disabled">Click me</button>
```
Объяснение: Объект позволяет удобно добавлять классы на основе условий.
---------------------------------------------------------------------------------------------
