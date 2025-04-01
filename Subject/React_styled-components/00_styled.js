---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
0. Создание простого компонента
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
