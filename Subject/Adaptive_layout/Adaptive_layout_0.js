---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
1. Адаптивный заголовок с использованием `media queries`
⌛ Задача: Напишите адаптивный заголовок, который меняет размер шрифта в зависимости от ширины экрана.
Пример:
```css
h1 {
  font-size: 3rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
}
```
🎯 Решение:
- Используем `media queries`, чтобы уменьшать размер шрифта для разных ширин экранов.
- Для экрана меньше 768px размер шрифта уменьшается до 2rem, а для экранов менее 480px — до 1.5rem.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
2. Адаптивный контейнер с использованием `Flexbox`
⌛ Задача: Создайте контейнер с тремя элементами, которые распределяются по ширине экрана с помощью `Flexbox`, а на маленьких экранах элементы должны располагаться в колонку.
Пример:
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Для ширины экрана больше 768px элементы расположены по горизонтали (с помощью `justify-content: space-between`).
- Для экранов меньше 768px элементы располагаются в колонку (с помощью `flex-direction: column`).
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
3. Центрирование блока с использованием `Flexbox`
⌛ Задача: Напишите стили, чтобы блок был всегда по центру экрана, как по горизонтали, так и по вертикали.
Пример:
```html
<div class="container">
  <div class="centered">Centered content</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered {
  padding: 20px;
  background-color: lightblue;
}
```
🎯 Решение:
- `justify-content: center` центрирует по горизонтали.
- `align-items: center` центрирует по вертикали.
- `height: 100vh` устанавливает высоту контейнера на весь экран.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
4. Адаптивный grid-контейнер
⌛ Задача: Создайте grid-контейнер, который на широких экранах имеет 4 колонки, а на экранах меньше 768px — 2 колонки.
Пример:
```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
🎯 Решение:
- Используем `grid-template-columns: repeat(4, 1fr)` для 4 колонок на больших экранах.
- Для экранов меньше 768px меняем количество колонок на 2 с помощью `grid-template-columns: repeat(2, 1fr)`.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
5. Адаптивная сетка с использованием `Grid` и разных колонок
⌛ Задача: Создайте адаптивную сетку, где на больших экранах будет 3 колонки, на средних — 2, а на маленьких — 1.
Пример:
```html
<div class="grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```
🎯 Решение:
- Для больших экранов используем 3 колонки (`repeat(3, 1fr)`).
- Для экранов меньше 1024px используем 2 колонки.
- Для экранов меньше 768px — 1 колонка.
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
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
7. Фиксированное положение элемента на экране с `position`
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
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
8. Респонсивный фоновый рисунок с `background-size`
⌛ Задача: Установите фоновое изображение, которое будет адаптироваться под размер экрана.
Пример:
```css
body {
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
}
```
🎯 Решение:
- `background-size: cover` делает изображение адаптивным, растягивая его, чтобы оно заполнило весь контейнер, не искажаясь.
- `background-position: center` центрирует изображение на экране.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
9. Адаптивные отступы с помощью `rem`
⌛ Задача: Напишите компонент с адаптивными отступами, используя `rem`, которые меняются в зависимости от ширины экрана.
Пример:
```css
.container {
  padding: 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }
}
```
🎯 Решение:
- Используем `rem` для адаптивных отступов, которые изменяются в зависимости от ширины экрана.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
10. Респонсивное изображение с `srcset`
⌛ Задача: Используйте `srcset` для выбора разных изображений в зависимости от разрешения экрана.
Пример:
```html
<img src="small.jpg"
     srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w"
     alt="Responsive image" />
```
🎯 Решение:
- Используем `srcset`, чтобы указать разные изображения для разных ширин экрана.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
11. Адаптивные шрифты с `clamp()`
⌛ Задача: Напишите шрифт, который будет адаптироваться в зависимости от ширины экрана с использованием `clamp()`.
Пример:
```css
h1 {
  font-size

: clamp(1.5rem, 5vw, 3rem);
}
```
🎯 Решение:
- `clamp()` устанавливает минимальный и максимальный размер шрифта, который будет изменяться в зависимости от ширины экрана (с помощью `vw`).
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
12. Адаптивный элемент с Flexbox на разных экранах
⌛ Задача: Используйте `Flexbox` для создания адаптивной навигации, которая на больших экранах расположена по горизонтали, а на маленьких — по вертикали.
Пример:
```html
<nav class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>
```

```css
.nav {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Используем `flex-direction: column` на маленьких экранах, чтобы элементы располагались вертикально.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
13. Адаптивный карточный компонент с `Flexbox`
⌛ Задача: Напишите компонент с карточками, которые на маленьких экранах отображаются в одну колонку, а на больших — в несколько.
Пример:
```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```css
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  background-color: lightgray;
  padding: 20px;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```
🎯 Решение:
- Для маленьких экранов карточки занимают всю ширину, используя `width: 100%`, а на больших экранах — 30% ширины.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
14. Адаптивное меню с использованием `media queries`
⌛ Задача: Напишите адаптивное горизонтальное меню, которое при ширине экрана меньше 768px превращается в выпадающее меню.
Пример:
```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

```css
.menu ul {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .menu ul {
    display: block;
  }

  .menu ul li {
    margin: 10px 0;
  }
}
```
🎯 Решение:
- Для больших экранов меню горизонтальное с использованием `flex`, для маленьких — вертикальное с помощью `display: block`.
---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
15. Адаптивная таблица с использованием `overflow-x`
⌛ Задача: Напишите таблицу, которая будет прокручиваться по горизонтали на маленьких экранах.
Пример:
```html
<div class="table-wrapper">
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>New York</td>
    </tr>
    <!-- more rows -->
  </table>
</div>
```

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
```
🎯 Решение:
- Используем `overflow-x: auto`, чтобы таблица могла прокручиваться по горизонтали на маленьких экранах.
---------------------------------------------------------------------------------------------  
