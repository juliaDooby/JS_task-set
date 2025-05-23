---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. Вариации первого способа:
---
37. 
Если использовать `Math.max` и `Math.min`, то можно предложить несколько вариаций первого способа для нахождения максимального и минимального элемента массива в JavaScript.
1. Использование `Math.max`/`Math.min` с оператором Spread
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Оператор spread (`...`) разворачивает массив в список аргументов.
- Передаётся в `Math.max` и `Math.min`, чтобы найти максимальное или минимальное значение.
Когда использовать:
- Простые массивы с небольшим числом элементов.
---------------------------------------------------------------------------------------------  
