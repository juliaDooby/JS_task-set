---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
9. Сложное комбинирование условий
⌛ Задача: Добавьте классы на основе нескольких условий.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isLarge }) => {
  const buttonClass = classNames('button', {
    primary: isPrimary && !isLarge,
    large: isLarge,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isLarge={true} />; // <button class="button large">Click me</button>
```
Объяснение: Вы можете использовать сложные логические выражения в объектах.
---------------------------------------------------------------------------------------------
