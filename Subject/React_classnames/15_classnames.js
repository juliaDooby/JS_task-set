---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
15. Статические классы
⌛ Задача: Добавьте постоянный класс независимо от условий.
🎯 Решение:
```javascript
const Button = () => {
  const buttonClass = classNames('button', 'static-class');

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button />; // <button class="button static-class">Click me</button>
```
---------------------------------------------------------------------------------------------
