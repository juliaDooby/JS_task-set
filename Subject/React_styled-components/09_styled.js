---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
9. Компоненты с `attrs`
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
