---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
14. Переопределение темы
⌛ Задача: Задайте новую тему для дочернего компонента.
🎯 Решение:
```javascript
const darkTheme = {
  primary: 'black',
  secondary: 'gray',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Default Theme</Button>
    <ThemeProvider theme={darkTheme}>
      <Button>Dark Theme</Button>
    </ThemeProvider>
  </ThemeProvider>
);
```
Объяснение: Вы можете переопределить тему для определённых компонентов.
---------------------------------------------------------------------------------------------
