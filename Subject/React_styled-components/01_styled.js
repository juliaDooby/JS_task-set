---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
--- 
1. Использование пропсов
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
