---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
--- 
4. Модули (Modules)
Модули позволяют разделять код на отдельные файлы, делая его более удобным для поддержки и масштабирования.
```javascript
// module.js
export const add = (a, b) => a + b;

// app.js
import { add } from './module';
console.log(add(2, 3)); // 5
```
Особенности:
- Ключевые слова `export` и `import`.
- Модули поддерживают статический анализ и улучшенную производительность.
---------------------------------------------------------------------------------------------
