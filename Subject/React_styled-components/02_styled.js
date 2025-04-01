---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
2. Динамическая стилизация по состоянию
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
