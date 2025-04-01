---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
6. Передача класса через `className`
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
