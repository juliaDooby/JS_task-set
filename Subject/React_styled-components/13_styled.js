---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
13. Тематизация с `ThemeProvider`
⌛ Задача: Используйте тему для управления цветами.
🎯 Решение:
```javascript
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'blue',
  secondary: 'green',
};

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>
);

// Кнопка будет синей, используя тему.
```
Объяснение: `ThemeProvider` позволяет управлять стилями через тему.
---------------------------------------------------------------------------------------------
