---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
1. Создание простого компонента
⌛ Задача: Создайте кнопку с зелёным фоном.
🎯 Решение:
```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: green;
  color: white;
`;

const App = () => <Button>Click me</Button>;

// Вывод: <button style="background-color: green; color: white;">Click me</button>
```
Объяснение: `styled-components` позволяет создавать компоненты с инкапсулированными стилями.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
2. Использование пропсов
⌛ Задача: Измените цвет кнопки через проп.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => props.bgColor || 'blue'};
  color: white;
`;

const App = () => <Button bgColor="red">Click me</Button>;

// Вывод: <button style="background-color: red; color: white;">Click me</button>
```
Объяснение: `props` можно использовать для динамического изменения стилей.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
3. Динамическая стилизация по состоянию
⌛ Задача: Сделайте кнопку красной, если она отключена.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => (props.disabled ? 'red' : 'green')};
  color: white;
`;

const App = () => <Button disabled>Click me</Button>;

// Вывод: <button style="background-color: red; color: white;" disabled>Click me</button>
```
Объяснение: Вы можете использовать логические выражения для динамических стилей.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
4. Компонент с псевдоклассами
⌛ Задача: Измените цвет кнопки при наведении.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;

  &:hover {
    background-color: darkgreen;
  }
`;

const App = () => <Button>Hover me</Button>;

// Наведение: background-color станет darkgreen.
```
Объяснение: Используйте псевдоклассы CSS, такие как `:hover` или `:focus`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
5. Расширение стилей
⌛ Задача: Создайте кнопку `PrimaryButton`, которая наследует стили базовой кнопки.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;
`;

const PrimaryButton = styled(Button)`
  background-color: blue;
`;

const App = () => <PrimaryButton>Click me</PrimaryButton>;

// Вывод: <button style="background-color: blue; color: white;">Click me</button>
```
Объяснение: Расширение стилей позволяет легко переиспользовать базовые стили.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
6. Медиа-запросы
⌛ Задача: Сделайте текст кнопки меньше на экранах шириной менее 600px.
🎯 Решение:
```javascript
const Button = styled.button`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const App = () => <Button>Responsive Button</Button>;

// На экранах < 600px текст станет меньше.
```
Объяснение: Используйте медиа-запросы для адаптивного дизайна.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
7. Передача класса через `className`
⌛ Задача: Добавьте стили через `className`.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;
`;

const App = () => <Button className="custom-class">Click me</Button>;

// Можно дополнительно стилизовать с помощью `custom-class`.
```
Объяснение: `styled-components` поддерживает передачу `className`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
8. Работа с анимациями
⌛ Задача: Сделайте анимацию кнопки при наведении.
🎯 Решение:
```javascript
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: green;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
`;

const App = () => <Button>Animated Button</Button>;
```
Объяснение: `keyframes` позволяет определять анимации для компонентов.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
9. Стилизация вложенных компонентов
⌛ Задача: Стилизуйте вложенный тег `<span>`.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;

  span {
    font-weight: bold;
  }
`;

const App = () => (
  <Button>
    <span>Click me</span>
  </Button>
);

// <span> будет стилизован как жирный.
```
Объяснение: Вложенные селекторы позволяют стилизовать дочерние элементы.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
10. Компоненты с `attrs`
⌛ Задача: Добавьте атрибут `type="button"` по умолчанию.
🎯 Решение:
```javascript
const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: green;
  color: white;
`;

const App = () => <Button>Click me</Button>;

// Вывод: <button type="button" style="background-color: green; color: white;">Click me</button>
```
Объяснение: `attrs` задаёт атрибуты по умолчанию.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
11. Глобальные стили
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
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
12. Стилизация по типу тега
⌛ Задача: Стилизуйте все `<h1>`.
🎯 Решение:
```javascript
const StyledH1 = styled.h1`
  color: red;
`;

const App = () => <StyledH1>Styled Heading</StyledH1>;

// Все h1 с использованием StyledH1 будут красными.
```
Объяснение: Вы можете стилизовать HTML-теги, используя `styled-components`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---  
13. Переопределение стилей
⌛ Задача: Переопределите базовые стили с помощью пропсов.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => props.bg || 'green'};
  color: ${props => props.color || 'white'};
`;

const App = () => <Button bg="blue" color="yellow">Click me</Button>;
```
Объяснение: Пропсы позволяют динамически переопределять стили.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
14. Тематизация с `ThemeProvider`
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
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
15. Переопределение темы
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
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
16. Создание адаптивных компонентов
⌛ Задача: Сделайте компонент, который меняет размер текста на маленьких экранах.
🎯 Решение:
```javascript
const Title = styled.h1`
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const App = () => <Title>Responsive Title</Title>;
```
Объяснение: Медиа-запросы обеспечивают адаптивность компонента.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
17. Подключение CSS файла
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
