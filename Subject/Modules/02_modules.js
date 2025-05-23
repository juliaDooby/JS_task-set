---------------------------------------------------------------------------------------------    
⋙ ❍ Модули:
---   
2. Именованный экспорт нескольких переменных
⌛ Задача: Экспортируйте две переменные и импортируйте их в другом модуле.
🎯 Решение:
```javascript
// constants.js
export const PI = 3.14;
export const E = 2.71;

// app.js
import { PI, E } from './constants';

console.log(PI, E); // 3.14 2.71
```
Объяснение: Именованный экспорт позволяет экспортировать несколько значений из одного файла.
---------------------------------------------------------------------------------------------   
