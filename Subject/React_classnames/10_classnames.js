---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
10. Использование с `classnames/bind`
⌛ Задача: Используйте `classnames/bind` для настройки префиксов.
🎯 Решение:
```javascript
import classNames from 'classnames/bind';

const styles = {
  button: 'button-class',
  primary: 'primary-class',
};

const cx = classNames.bind(styles);

const Button = ({ isPrimary }) => {
  const buttonClass = cx('button', { primary: isPrimary });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} />; // <button class="button-class primary-class">Click me</button>
```
Объяснение: `classnames/bind` связывает классы с вашими стилями.
---------------------------------------------------------------------------------------------
