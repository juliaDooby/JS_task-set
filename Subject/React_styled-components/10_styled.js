---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
10. Глобальные стили
⌛ Задача: Определите глобальный стиль для всего приложения.
🎯 Решение:
```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <h1>Hello, World!</h1>
  </>
);
```
Объяснение: `createGlobalStyle` позволяет задавать стили для всего приложения.
---------------------------------------------------------------------------------------------
