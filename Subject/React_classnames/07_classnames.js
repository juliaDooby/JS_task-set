---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
7. Отсутствие класса по условию
⌛ Задача: Не добавляйте класс, если условие ложно.
🎯 Решение:
```javascript
const Button = ({ isPrimary }) => {
  const buttonClass = classNames('button', { primary: isPrimary || false });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={false} />; // <button class="button">Click me</button>
```
Объяснение: Если условие ложно, класс не добавляется.
---------------------------------------------------------------------------------------------
