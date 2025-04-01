---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
12. Работа с модификаторами
⌛ Задача: Добавьте модификаторы в классы через пропы.
🎯 Решение:
```javascript
const Button = ({ size, color }) => {
  const buttonClass = classNames('button', `button--${size}`, `button--${color}`);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button size="large" color="red" />; // <button class="button button--large button--red">Click me</button>
```
Объяснение: Вы можете динамически добавлять модификаторы через шаблонные строки.
---------------------------------------------------------------------------------------------
