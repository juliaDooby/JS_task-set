---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
4. Расширение стилей
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
