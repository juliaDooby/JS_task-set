---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
13. Классы с условными модификаторами
⌛ Задача: Добавьте модификатор только при выполнении условия.
🎯 Решение:
```javascript
const Button = ({ isDisabled }) => {
  const buttonClass = classNames('button', {
    'button--disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isDisabled={true} />; // <button class="button button--disabled">Click me</button>
```
---------------------------------------------------------------------------------------------
