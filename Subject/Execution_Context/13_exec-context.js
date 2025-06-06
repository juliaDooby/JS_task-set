---------------------------------------------------------------------------------------------
⋙ ❍ Контекст вызова:
---  
⌛ 13. Стрелочные функции в обработчиках событий
```javascript
const button = document.createElement("button");
button.textContent = "Click me";
button.onclick = () => {
  console.log(this);
};
document.body.appendChild(button);
```
🎯 Решение:
Выведет: `undefined`.
Объяснение:
Стрелочная функция берет `this` из внешнего контекста. В данном случае это глобальный объект.
---------------------------------------------------------------------------------------------
