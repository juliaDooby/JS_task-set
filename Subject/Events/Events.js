Z
---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
1. Обработчик события на клик
⌛ Задача: Напишите обработчик события для клика на кнопку, который изменяет текст в элементе.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('text').innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- Мы добавляем обработчик события `click` для кнопки, который изменяет текст внутри параграфа при клике.
---
2. Повторная привязка обработчика события
⌛ Задача: Напишите код, который будет привязывать обработчик события на клик с изменением текста, но только один раз.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  const button = document.getElementById('myButton');
  const text = document.getElementById('text');

  button.addEventListener('click', function handler() {
    text.innerText = 'Text changed!';
    button.removeEventListener('click', handler); // Удаляем обработчик после первого клика
  });
</script>
```
Объяснение:
- Мы используем `removeEventListener`, чтобы удалить обработчик после его выполнения один раз.
---
3. Событие на изменении значения в поле ввода
⌛ Задача: Напишите обработчик события на `input`, который будет выводить в консоль текущее значение введённого текста.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">

<script>
  document.getElementById('myInput').addEventListener('input', function(event) {
    console.log(event.target.value);
  });
</script>
```
Объяснение:
- Используем событие `input` для отслеживания изменений в поле ввода.
---
4. Остановка распространения события
⌛ Задача: Напишите код, который отменяет распространение клика по кнопке, предотвращая его от всплытия.
🎯 Решение:
```html
<div id="outerDiv" style="padding: 20px; background-color: lightblue;">
  <button id="myButton">Click me</button>
</div>

<script>
  document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Outer div clicked');
  });

  document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    alert('Button clicked');
  });
</script>
```
Объяснение:
- Используем `event.stopPropagation()` для предотвращения всплытия события от кнопки к родительскому элементу.
---
5. Делегирование событий
⌛ Задача: Реализуйте обработчик события для нескольких кнопок внутри одного контейнера с использованием делегирования событий.
🎯 Решение:
```html
<div id="buttonContainer">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

<script>
  document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      console.log('Clicked on:', event.target.innerText);
    }
  });
</script>
```
Объяснение:
- Делегируем событие на контейнер, и проверяем, что клик был сделан на `button`. Это позволяет обрабатывать события на множестве элементов без привязки обработчиков к каждому из них.
---
6. Событие на фокус
⌛ Задача: Напишите обработчик события `focus`, который меняет цвет рамки вокруг поля ввода при его фокусе.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Focus me">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.borderColor = 'green';
  });

  document.getElementById('myInput').addEventListener('blur', function() {
    this.style.borderColor = '';
  });
</script>
```
Объяснение:
- Используем событие `focus` для изменения стиля при получении фокуса, и `blur` для восстановления исходного состояния.
---
7. Отслеживание перемещения мыши
⌛ Задача: Напишите обработчик для события `mousemove`, который отслеживает позицию мыши на странице.
🎯 Решение:
```html
<script>
  document.addEventListener('mousemove', function(event) {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
</script>
```
Объяснение:
- `mousemove` отслеживает движение мыши, и мы выводим координаты позиции мыши в консоль.
---
8. Прокачка события колесика мыши
⌛ Задача: Напишите обработчик события `wheel`, который выводит в консоль, прокручивает ли пользователь страницу вверх или вниз.
🎯 Решение:
```html
<script>
  document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      console.log('Scrolling down');
    } else {
      console.log('Scrolling up');
    }
  });
</script>
```
Объяснение:
- Событие `wheel` отслеживает прокрутку мыши, а `deltaY` сообщает о направлении прокрутки.
---
9. Ключевое событие клавиатуры
⌛ Задача: Напишите обработчик для события `keydown`, который выводит нажатую клавишу.
🎯 Решение:
```html
<script>
  document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
</script>
```
Объяснение:
- Событие `keydown` отслеживает нажатие клавиш и выводит соответствующую клавишу через `event.key`.
---
10. Использование события `submit`
⌛ Задача: Напишите обработчик для события `submit` формы, который отменяет её отправку и выводит данные на экран.
🎯 Решение:
```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
  });
</script>
```
Объяснение:
- Используем `submit`* для перехвата отправки формы и `event.preventDefault()`, чтобы предотвратить её отправку. С помощью `FormData` получаем данные формы.
---
11. Использование события `resize`
⌛ Задача: Напишите обработчик для события `resize`, который выводит новые размеры окна браузера.
🎯 Решение:
```html
<script>
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });
</script>
```
Объяснение:
- `resize` отслеживает изменение размера окна браузера.
---
12. Отслеживание события `focus` и `blur`
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые изменяют стиль элемента при фокусе.
🎯 Решение:
```html
<input type="text" id="focusInput" placeholder="Focus me">

<script>
  const input = document.getElementById('focusInput');
  input.addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
  input.addEventListener('blur', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- При фокусе изменяем стиль элемента, а при потере фокуса восстанавливаем его.
---
13. Событие на двойной клик
⌛ Задача: Напишите обработчик для события `dblclick`, который меняет текст в элементе.
🎯 Решение:
```html
<p id="dblclickText">Double-click me</p>

<script>
  document.getElementById('dblclickText').addEventListener('dblclick', function() {
    this.innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- `dblclick` срабатывает при двойном клике по элементу, и в данном случае изменяет текст.
---
14. Отслеживание состояния кнопки (нажатие и отпускание)
⌛ Задача: Напишите обработчики для событий `mousedown` и `mouseup`, которые изменяют стиль кнопки.
🎯 Решение:
```html
<button id="pressButton">Press me</button>

<script>
  const button = document.getElementById('pressButton');

  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightgreen';
  });

  button.addEventListener('mouseup', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- `mousedown` срабатывает, когда кнопка мыши нажата, и `mouseup` — когда отпущена.
---
15. Использование события `input` для отслеживания ввода текста
⌛ Задача: Напишите обработчик для события `input`, который будет выводить количество символов в текстовом поле.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="charCount">Characters: 0</p>

<script>
  document.getElementById('myInput').addEventListener('input', function() {
    document.getElementById('charCount').innerText = 'Characters: ' + this.value.length;
  });
</script>
```
Объяснение:
- `input` отслеживает изменения в поле ввода и обновляет количество символов.
---
16. Отслеживание фокуса в нескольких полях
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые подсвечивают поле ввода при фокусе и удаляют подсветку при потере фокуса.
🎯 Решение:
```html
<input type="text" placeholder="Name">
<input type="text" placeholder="Email">

<script>
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = 'blue';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '';
    });
  });
</script>
```
Объяснение:
- Мы используем `querySelectorAll` для выбора всех полей ввода и отслеживания фокуса и потери фокуса.
---
17. Событие перетаскивания (drag and drop)
⌛ Задача: Напишите код для перетаскивания элемента по экрану.
🎯 Решение:
html
Копировать
Редактировать
<div id="dragMe" draggable="true" style="width: 100px; height: 100px; background-color: lightblue; cursor: pointer;">Drag me</div>

<script>
  const element = document.getElementById('dragMe');

  element.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Dragging');
  });

  element.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  element.addEventListener('drop', function(event) {
    event.preventDefault();
    console.log('Dropped');
  });
</script>
Объяснение:
Используем события dragstart, dragover и drop для реализации перетаскивания элемента.
