---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
2. Комбинирование строковых классов
⌛ Задача: Объедините статические и динамические классы.
🎯 Решение:
```javascript
const Button = ({ isPrimary }) => {
  const buttonClass = classNames('button', { primary: isPrimary });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} />; // <button class="button primary">Click me</button>
```
Объяснение: Статические классы (`button`) остаются всегда, а динамические (`primary`) добавляются в зависимости от условия.
---------------------------------------------------------------------------------------------
