---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
11. Динамическое управление видимостью
⌛ Задача: Добавьте класс `hidden`, если проп `isHidden` равен `true`.
🎯 Решение:
```javascript
const Button = ({ isHidden }) => {
  const buttonClass = classNames({ hidden: isHidden });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isHidden={true} />; // <button class="hidden">Click me</button>
```
Объяснение: Динамические классы легко использовать для управления видимостью.
---------------------------------------------------------------------------------------------
