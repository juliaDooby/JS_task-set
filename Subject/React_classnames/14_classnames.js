---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
14. Комбинирование классов через пропы
⌛ Задача: Добавьте пользовательский класс через проп `extraClass`.
🎯 Решение:
```javascript
const Button = ({ extraClass }) => {
  const buttonClass = classNames('button', extraClass);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button extraClass="my-custom-class" />; // <button class="button my-custom-class">Click me</button>
```
---------------------------------------------------------------------------------------------
