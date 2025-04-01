---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
3. Компонент с псевдоклассами
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
