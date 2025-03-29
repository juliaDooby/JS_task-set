---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
6. Адаптивная кнопка с изменением размера
⌛ Задача: Напишите кнопку, которая меняет свой размер в зависимости от ширины экрана.
Пример:
```html
<button class="responsive-btn">Click Me</button>
```

```css
.responsive-btn {
  padding: 20px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .responsive-btn {
    padding: 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .responsive-btn {
    padding: 10px;
    font-size: 12px;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px и 480px меняем размеры кнопки с помощью `padding` и `font-size`.
---------------------------------------------------------------------------------------------  
