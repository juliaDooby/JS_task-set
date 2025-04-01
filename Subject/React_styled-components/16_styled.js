---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
16. Подключение CSS файла
⌛ Задача: Используйте CSS-файл в `styled-components`.
🎯 Решение:
```javascript
import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: green;
  color: white;
`;

const Button = styled.button`
  ${buttonStyles}
`;

const App = () => <Button>Click me</Button>;
```
Объяснение: `css` используется для создания переиспользуемых блоков стилей.
---------------------------------------------------------------------------------------------
