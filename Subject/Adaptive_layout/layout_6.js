---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
6. Фиксированное положение элемента на экране с `position`
⌛ Задача: Напишите компонент, который фиксируется внизу экрана, если ширина экрана меньше 768px.
Пример:
```html
<div class="fixed-footer">This is a footer</div>
```

```css
.fixed-footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .fixed-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px используем `position: fixed`, чтобы элемент оставался на месте при прокрутке.
---------------------------------------------------------------------------------------------  
