---------------------------------------------------------------------------------------------    
⋙ ❍ Модули:
---   
3. Импорт с переименованием
⌛ Задача: Импортируйте переменную `PI` с новым именем.
🎯 Решение:
```javascript
// constants.js
export const PI = 3.14;

// app.js
import { PI as CirclePI } from './constants';

console.log(CirclePI); // 3.14
```
Объяснение: `as` позволяет переименовывать импортируемые переменные.
---------------------------------------------------------------------------------------------   
