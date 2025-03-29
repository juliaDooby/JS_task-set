---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
1. Простое использование `classnames`
⌛ Задача: Добавьте класс `active` к компоненту, если передан пропс `isActive`.
🎯 Решение:
```javascript
import classNames from 'classnames';

const Button = ({ isActive }) => {
  const buttonClass = classNames({ active: isActive });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isActive={true} />; // <button class="active">Click me</button>
```
Объяснение: Если `isActive` равен `true`, класс `active` будет добавлен.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
2. Условные классы
⌛ Задача: Добавьте классы `enabled` или `disabled` в зависимости от пропса `isEnabled`.
🎯 Решение:
```javascript
const Button = ({ isEnabled }) => {
  const buttonClass = classNames({
    enabled: isEnabled,
    disabled: !isEnabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isEnabled={false} />; // <button class="disabled">Click me</button>
```
Объяснение: `classnames` позволяет удобно управлять добавлением классов на основе условий.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
3. Комбинирование строковых классов
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
4. Передача массивов
⌛ Задача: Используйте массив для управления классами.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isLarge }) => {
  const buttonClass = classNames([
    'button',
    { primary: isPrimary, large: isLarge },
  ]);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isLarge={false} />; // <button class="button primary">Click me</button>
```
Объяснение: Массив помогает комбинировать классы из разных источников.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
5. Передача объектов
⌛ Задача: Добавьте несколько классов с объектом условий.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames({
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={true} />; // <button class="btn-primary btn-disabled">Click me</button>
```
Объяснение: Объект позволяет удобно добавлять классы на основе условий.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
6. Комбинация строк, массивов и объектов
⌛ Задача: Объедините все способы указания классов.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames('button', ['extra-class'], {
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={false} />; // <button class="button extra-class btn-primary">Click me</button>
```
Объяснение: `classnames` позволяет смешивать строки, массивы и объекты в одном вызове.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
7. Динамическая передача классов
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
8. Отсутствие класса по условию
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
9. Работа с булевыми значениями
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
10. Сложное комбинирование условий
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
11. Использование с `classnames/bind`
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
12. Динамическое управление видимостью
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
13. Работа с модификаторами
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
14. Классы с условными модификаторами
⌛ Задача: Добавьте модификатор только при выполнении условия.
🎯 Решение:
```javascript
const Button = ({ isDisabled }) => {
  const buttonClass = classNames('button', {
    'button--disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isDisabled={true} />; // <button class="button button--disabled">Click me</button>
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
15. Комбинирование классов через пропы
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
16. Статические классы
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
---------------------------------------------------------------------------------------------
⋙ ❍ React classnames:
---
17. Динамическая смена состояния
⌛ Задача: Меняйте классы при нажатии на кнопку.
🎯 Решение:
```javascript
import { useState } from 'react';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const buttonClass = classNames('button', { active: isActive });

  return (
    <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
      Click me
    </button>
  );
};

// Использование
<Button />;
```
Объяснение: Вы можете динамически изменять классы через состояние компонента.
---------------------------------------------------------------------------------------------
