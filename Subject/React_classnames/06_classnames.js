---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
6. Динамическая передача классов
⌛ Задача: Добавьте дополнительные классы через проп `className`.
🎯 Решение:
```javascript
const Button = ({ isPrimary, className }) => {
  const buttonClass = classNames('button', { primary: isPrimary }, className);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} className="custom-class" />; // <button class="button primary custom-class">Click me</button>
```
Объяснение: Вы можете комбинировать проп `className` с динамическими классами.
---------------------------------------------------------------------------------------------
