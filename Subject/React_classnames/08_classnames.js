---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
8. Работа с булевыми значениями
⌛ Задача: Используйте `classnames` для работы с булевыми значениями.
🎯 Решение:
```javascript
const Button = ({ isVisible }) => {
  const buttonClass = classNames({ hidden: !isVisible });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isVisible={false} />; // <button class="hidden">Click me</button>
```
Объяснение: Булевые значения легко использовать в объектах `classnames`.
---------------------------------------------------------------------------------------------
