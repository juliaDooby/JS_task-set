---------------------------------------------------------------------------------------------
⋙ ❍ styled-components:
---
7. Работа с анимациями
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
