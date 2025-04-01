---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
5. Комбинация строк, массивов и объектов
⌛ Задача: Объедините все способы указания классов.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames('button', ['extra-class'], {
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={false} />; // <button class="button extra-class btn-primary">Click me</button>
```
Объяснение: `classnames` позволяет смешивать строки, массивы и объекты в одном вызове.
---------------------------------------------------------------------------------------------
