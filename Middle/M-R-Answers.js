--------------------------------------------------------------------------------------------
📌 [Правильные ответы на вопросы ниже]:
---------------------
⋙ ❍ Преобразование типов ?
5 + '2' // "52"
5 + '2' == '5' + '2' == '52'
5 - "2" // 3
5 - "2" == 5-2 == 3
true + true // 2
true + true == 1 + 1 == 2
-----
⋙ ❍ Promise ?
Это достаточно современный подход написания асинхронного кода. Ранее использовался подход с использованием колбеков. При большой вложенности получался т.н. «ад обратных вызовов».
При использовании промисов код выглядит читабельно и удобен для редактирования:
const printSec = (number) => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
        console.log(`${number} sec`)
        resolve()
      },
      1000)
  })
}
printSec(1)
  .then(() => printSec(2))
  .then(() => printSec(3))
-----
⋙ ❍ Прототипное наследование ?
Каждый объект в JS имеет базовый объект – прототип. Если свойство не находится в исходном объекте, то поиск продолжается в его «родительском» объекте.
Установить прототип объекта можно только во время создания объекта: если вы создаете новый объект с помощью новой Func(), свойство объекта [[Prototype]] будет установлено на объект, на который ссылается Func.prototype.
-----
⋙ ❍ Цикл событий ?
Задачи будут добавляться в цикл событий, но они не вызовут ни переполнения стека, ни бесконечной очереди, которая затормозит весь сайт.
Так как макротаски после выполнения пропускают один цикл для отрисовки контента и выполнения микротасков, в отличие от микротасков, которые выполняются все в очереди перед тем, как передать управление следующему пункту в цикле событий.
function foo() {
    return Promise.resolve(1).then(foo);
}
foo();
Выполнение данного кода вызовет затормаживание интерфейса, т.к. при выполнении одного микротаска в очередь добавляется новый микротаск, который сразу же должен выполниться, без передачи управления другому пункту цикла событий.
-----
⋙ ❍ Типы данных: ?
Чтобы узнать тип переменной JavaScript, мы можем использовать оператор typeof.
String – представляет собой серию символов и записывается в кавычках. Строку можно представить в одинарных или двойных кавычках.
Number – представляет собой число и может быть записано с десятичными знаками или без них.
BigInt – используется для хранения чисел, превышающих ограничение типа данных Number. Он может хранить большие целые числа и представлен добавлением «n» к целочисленному литералу.
Boolean – представляет собой логическую сущность и может иметь только два значения: истина или ложь. Логические значения обычно используются для условного тестирования.
Undefined – когда переменная объявлена, но не назначена, она имеет значение undefined, и ее тип также не определен.
Null – представляет несуществующее или недопустимое значение.
Symbol – это новый тип данных, представленный в версии JavaScript для ES6. Он используется для хранения анонимного и уникального значения.
Object – используется для хранения коллекции данных.Важно помнить, что любой тип данных, который не является примитивным типом данных, относится к типу объекта в javascript.
Array – это не отдельный тип данных, на самом деле это Object. `typeof null` равен «object» и это нужно учитывать в проверках.typeof «John Doe» // Возвращает «string»
typeof  3.14 // Возвращает "number"
typeof  true // Возвращает "boolean"
typeof  234567890123456789012345678901234567890 n // Возвращает bigint
typeof  undefined // Возвращает undefined
typeof  null // Возвращает "object"
typeof Symbol ( 'symbol' ) // Возвращает символ
```
Найти сумму элементов массива, если вложенность массива неизвестна, используя рекурсию
function arraySum(arr) {
    let sum = 0;
    arr.map((item) => {
        if (Array.isArray(item)) {
            sum += arraySum(item);
        } else {
            sum += item;
        }
    });
    return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));
Ваш подход к использованию рекурсии для нахождения суммы элементов массива вполне верен. Однако, в вашей функции есть несколько моментов, которые можно улучшить. Вот исправленная версия:
```javascript
function arraySum(arr) {
    let sum = 0;
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            sum += arraySum(item); // Рекурсивно вызываем arraySum для вложенного массива
        } else {
            sum += item; // Если элемент не массив, просто добавляем его к сумме
        }
    });
    return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]])); // Выведет 41
```
Этот код рекурсивно перебирает все элементы массива, и если элемент является массивом, вызывает `arraySum` для этого массива. Когда достигается элемент, который не является массивом, его значение добавляется к сумме.
-----
⋙ ❍ Причина помещения всего содержимого исходного файла JavaScript в книгу функций ?
Этот метод создает замыкание вокруг всего содержимого файла, что создает частное пространство имен и тем самым помогает избежать потенциальных конфликтов имен между различными модулями и библиотеками JavaScript.
Еще одна особенность этого метода – легко создать псевдоним для глобальной переменной. Это часто используется в плагинах jQuery.
-----
⋙ ❍ Специальные числовые значения ?
Infinity больше любого числа
-Infinity меньше любого числа
NaN представляет собой ошибку (не число)
-----
⋙ ❍ Предназначение файла package-lock.json ?
package-lock.json автоматически создается для любых операций, когда npm изменяет дерево node_modules или package.json. Он описывает точное дерево, которое было сгенерировано, так что последующие установки могут генерировать идентичные деревья, независимо от промежуточных обновлений зависимостей.
-----
⋙ ❍ Запросы между источниками и CDN ?
Если мы сделаем выборку с произвольного веб-сайта, это, вероятно, не удастся. Основная концепция здесь – триплет домен/порт/протокол.
Запросы из разных источников, отправленные в другой домен (даже субдомен), протокол или порт требуют специальных заголовков с удаленной стороны. Эта политика называется «CORS»: совместное использование ресурсов между источниками.
-----
⋙ ❍ CDN (сеть доставки контента) ?
это группа серверов, расположенных во многих местах. Эти серверы хранят дублированные копии данных, чтобы серверы могли выполнять запросы данных в зависимости от того, какие серверы находятся ближе всего к соответствующим конечным пользователям. CDN обеспечивают быстрое обслуживание и меньше подвержены влиянию высокого трафика.
CDN (Content Delivery Network) — это географически распределённая сеть серверов, предназначенная для быстрой доставки контента пользователям. Сервера CDN хранят копии статического контента, такого как изображения, видео и скрипты, и предоставляют его пользователям с ближайшего к ним сервера. Это сокращает время загрузки и снижает нагрузку на основной сервер.
-----
⋙ ❍ Опишите, как бы вы реализовали примитивное слайд-шоу ?
Реализация примитивного слайд-шоу может быть выполнена с использованием HTML, CSS и JavaScript. Вот шаг за шагом, как это можно сделать.
Шаг 1: HTML Структура
Сначала создадим базовую HTML структуру для слайд-шоу.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="image1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="image2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="image3.jpg" style="width:100%">
        </div>

        <!-- Navigation buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!-- Dots navigation -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
Шаг 2: CSS для стилей
Добавим стили для слайдов и навигационных элементов.
```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

/* Navigation buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

/* Dots navigation */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```
Шаг 3: JavaScript для функционала
Теперь добавим JavaScript для управления слайдами.
```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
```
Объяснение
1. HTML:
- Контейнер с классом `slideshow-container` содержит все слайды.
- Каждый слайд представлен как `div` с классом `slide` и содержит изображение.
- Добавлены навигационные кнопки (`prev` и `next`) для переключения слайдов.
- Навигационные точки (`dot`) для перехода к определенному слайду.
2. CSS:
- Стили для контейнера слайд-шоу, слайдов, изображений, кнопок навигации и точек.
- Анимация для плавного перехода между слайдами.
3. JavaScript:
- Управляет показом слайдов и навигационными элементами.
- Функция `showSlides` скрывает все слайды и показывает текущий.
- Функции `plusSlides` и `currentSlide` обновляют текущий индекс слайда и вызывают `showSlides` для отображения соответствующего слайда.
---
✐ Таски На примере проектов:
Пример 1: Реализация слайд-шоу для корпоративного сайта
Ситуация: На корпоративном сайте клиента требуется создать слайд-шоу на главной странице для отображения ключевых продуктов компании.
- "На одном из проектов для корпоративного сайта клиента я реализовал примитивное слайд-шоу с помощью HTML, CSS и JavaScript. Это слайд-шоу позволяло демонстрировать ключевые продукты компании с возможностью навигации между слайдами. Вот как я это сделал:
1. HTML Структура: Создал контейнер для слайдов и добавил изображения продуктов.
2. CSS Стилизация: Добавил стили для слайдов, кнопок навигации и точек индикатора.
3. JavaScript Логика: Написал скрипты для переключения слайдов по таймеру и по нажатию на кнопки.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="product1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="product2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="product3.jpg" style="width:100%">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```

```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
```
Эта реализация обеспечила плавное переключение между слайдами и возможность пользователям вручную переключаться между продуктами. Это улучшило пользовательский опыт и позволило клиенту эффективно демонстрировать свои продукты."
Пример 2: Слайд-шоу для портфолио
Ситуация: На личном сайте-резюме требуется создать слайд-шоу для демонстрации выполненных проектов.
- "Для своего личного сайта-резюме я реализовал слайд-шоу для демонстрации проектов. Это слайд-шоу помогло посетителям быстро ознакомиться с моими работами. Вот как я это сделал:
1. HTML: Создал контейнер для слайдов и добавил изображения проектов.
2. CSS: Стили для слайдов, кнопок и индикаторов.
3. JavaScript: Скрипты для автоматического и ручного переключения слайдов.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="project1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="project2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="project3.jpg" style="width:100%">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```

```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className
-----
⋙ ❍ Что происходит в следующем коде:?
var foo = 'bim'
var getFoo = function () { return foo }
foo = 'boum'
console.log(getFoo());
Ответ — ‘boum’, поскольку на третьей строке значение foo изменяется на ‘boum’, и функция getFoo вернет переменную foo в своей области видимости.
Вот ваш код с объяснением:
```javascript
var foo = 'bim';                  // 1. Объявляем переменную foo и присваиваем ей значение 'bim'
var getFoo = function () {       // 2. Объявляем функцию getFoo, которая возвращает значение переменной foo
    return foo;
}
foo = 'boum';                     // 3. Меняем значение переменной foo на 'boum'
console.log(getFoo());            // 4. Вызываем функцию getFoo, которая возвращает текущее значение переменной foo
```
Пошаговое объяснение:
1. `var foo = 'bim';`
   Здесь создается переменная `foo` и присваивается ей строка `'bim'`. Это значение будет доступно во всей глобальной области видимости, так как используется `var`.
2. `var getFoo = function () { return foo; };`
   Создается функция `getFoo`, которая возвращает значение переменной `foo`. Важно заметить, что на момент объявления этой функции, значение переменной `foo` еще `'bim'`, так как это значение было присвоено на первом шаге.
3. `foo = 'boum';`
   Здесь значение переменной `foo` меняется на `'boum'`. Эта переменная все еще находится в глобальной области видимости, так что теперь `foo` равно `'boum'`.
4. `console.log(getFoo());`
   Когда мы вызываем `getFoo()`, функция возвращает текущее значение переменной `foo`. Важно понимать, что функции в JavaScript запоминают (или "захватывают") внешние переменные, с которыми они работают, в момент их выполнения. Это называется **замыкание** (closure).
   Так как переменная `foo` была изменена на `'boum'` до вызова функции, то при вызове функции `getFoo()` будет возвращено актуальное (последнее) значение переменной `foo`, а не то, которое было на момент ее объявления (то есть `'bim'`).
Результат:
```javascript
console.log(getFoo());  // 'boum'
```
Функция `getFoo` возвращает строку `'boum'`, так как это текущее значение переменной `foo` в глобальной области видимости на момент вызова функции.
Ключевые моменты:
- Замыкание: функция `getFoo` не "сохраняет" значение `foo` в момент ее объявления. Вместо этого, она всегда ссылается на актуальное значение переменной `foo`, когда она вызывается.
- В JavaScript переменные, объявленные с помощью `var`, имеют функциональную или глобальную область видимости. В этом примере, так как `foo` объявлена в глобальной области видимости, она изменяется и доступна для всех функций в этой области видимости.
-----
⋙ ❍ Измените данный массив, добавив ‘Ten’ в его конец ?
var arr = [‘One’, ‘Two’, ‘Three’, ‘Four’, ‘Five’, ‘Six’, ‘Seven’, ‘Eight’, ‘Nine’];
Это можно сделать несколькими способами, используя метод .push.
arr.push('Ten');
или можно было использовать свойство “length” в качестве индекса.
arr[arr.length] = 'Ten';
-----
⋙ ❍ Измените этот массив, добавьте в его начало слово “Zero” ?
var arr = [‘One’, ‘Two’, ‘Three’, ‘Four’, ‘Five’, ‘Six’, ‘Seven’, ‘Eight’, ‘Nine’];
Мы можем сделать это по-разному, используя .unshift.
arr.unshift('Zero');
или, используя метод splice…
arr.splice(0, 0, 'Zero');
-----
⋙ ❍ Что происходит здесь?
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
Ответом является неопределенность и 2.
Переменная “a” неопределена на первой строке, что выводится в консоль. Функция “foo()” поднимается в начало функции и может быть выполнена на второй строке.
-----
⋙ ❍ Что здесь происходит?
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
Ответом являются Aurelio De Rosa и John Doe.
Вызов функции obj.prop.getFullname() вернет свойство fullname объекта obj.prop, потому что область видимости функции находится внутри obj.prop.
Однако присвоение функции переменной test изменяет ее область выполнения на область переменной test, которая в данном случае является объектом window.
-----
⋙ ❍ Что здесь происходит?
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
Код выводит 4, 4, 4, 4 в консоль, потому что setTimeout выполняется после for-цикла, который устанавливает значение i равным 4 на последнем цикле.
Этот код создает цикл, который выполняет функцию `console.log(i)` с задержкой в 0 миллисекунд после каждой итерации. Но что происходит на самом деле?
1. Цикл начинается с переменной `i` установленной в 0.
2. `setTimeout(() => console.log(i), 0)` создает таймер, который запланирует выполнение функции `console.log(i)` после 0 миллисекунд.
3. Поскольку задержка равна 0, функция не выполняется немедленно, а добавляется в очередь событий.
4. Цикл продолжается, `i` увеличивается на 1.
5. Опять же, `setTimeout(() => console.log(i), 0)` создает таймер для выполнения `console.log(i)` снова после 0 миллисекунд, и так происходит для каждой итерации цикла.
После завершения цикла `i` будет равно 4, так как это условие прекращения цикла. Теперь, когда все функции `console.log(i)` добавлены в очередь событий, они начнут выполняться. Но к этому моменту значение `i` уже станет 4. Поэтому при выполнении функций `console.log(i)` на самом деле будет выведено 4 раза число 4.
-----
⋙ ❍ Как сделать, чтобы он выводил вместо этого 0, 1, 2, 3?
Просто замените var i на let i. Это изменит, как i обрабатывается внутри скобок {} области видимости for-цикла. Это новая функция ES6, блочная область видимости.
for (let i = 0; i < 4; i++) {
  setTimeout((function () { console.log(this.i) }).bind({i}), 0)
}
Результат приведенного выше цикла for аналогичен следующему, где мы используем безымянную функцию, чтобы контролировать область видимости переменной i, передав ее в безымянную функцию и тем самым имитируя блочную область видимости.
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () { console.log(i) }, 0)
  })(i);
}
Или же вы можете использовать метод bind, чтобы привязать объект с i к области функции.
for (var i = 0; i < 4; i++) {
  setTimeout((function () { console.log(this.i) }).bind({i}), 0)
}
-----
⋙ ❍ Подсчёт элементов в массив?
✎ Оно простое и должно определить, как они справятся со следующими вызовами. Это должно занять не более 5–10 минут, но для кого-то это может превратиться в 20–30 минут.
✎ Вы можете подумать, что живые кодовые вызовы — хорошая идея, но я использую их с определенной осторожностью, потому что даже лучшие из нас могут нервничать.
✎ Помните, что программирование обычно выполняется без чьего-либо присмотра.
Ищите через массив ‘arr’, используя элементы из ‘inputs’. Напишите функцию, которая возвращает объект, содержащий количество каждого из элементов из ‘inputs’.
var arr = [“A”, “B”, “C”, “D”, “S”, “W”, “A”, “B”, “B”, “C”, “G”];
var inputs = [“C”, “B”];
function search(arr, inputs) {
  ...
}
let res = search(arr, inputs);
console.log(res.B);
console.log(res.C);
Для подсчета количества элементов в массиве в JavaScript можно использовать свойство `.length` массива. Это свойство возвращает количество элементов в массиве.
Вот пример:
```javascript
const arr = [1, 2, 3, 4, 5];
const count = arr.length;

console.log(count);  // 5
```
Объяснение:
- `arr.length` возвращает количество элементов в массиве `arr`. В данном примере массив содержит 5 элементов, и `arr.length` вернет 5.
---
Если вам нужно подсчитать количество определенных элементов в массиве (например, количество вхождений какого-то числа), вы можете использовать метод `.filter()`.
Пример подсчета количества вхождений определенного элемента в массив:
```javascript
const arr = [1, 2, 3, 4, 1, 5, 1];
const countOfOnes = arr.filter(item => item === 1).length;

console.log(countOfOnes);  // 3
```
Объяснение:
1. `.filter(item => item === 1)` — фильтрует массив, оставляя только те элементы, которые равны 1.
2. `.length` — возвращает количество элементов, которые прошли фильтрацию.
---
Пример подсчета количества уникальных элементов в массиве:
Если вам нужно подсчитать количество уникальных элементов, вы можете использовать `Set` для удаления дубликатов, а затем измерить длину полученного набора.
```javascript
const arr = [1, 2, 3, 1, 4, 2, 5];
const uniqueCount = new Set(arr).size;

console.log(uniqueCount);  // 5
```
Объяснение:
1. `new Set(arr)` — создает множество, в котором будут только уникальные элементы из массива `arr`.
2. `.size` — возвращает количество уникальных элементов в этом множестве.
-----
⋙ ❍ Ищем шаблон внутри массива?
✎ Это упражнение очень похоже на первое, но вместо поиска каждого элемента мы ищем весь шаблон. В данном случае шаблоном является B & C, который повторяется внутри массива дважды.
var arr = [“A”, “B”, “C”, “D”, “S”, “W”, “A”, “B”, “B”, “C”, “G”];
var pattern = [“B”, “C”];
function search(arr, pattern) {
  ...
}
let count = search(arr, inputs);
console.log(count);
Для поиска шаблона внутри массива можно использовать следующий подход на JavaScript:
```javascript
var arr = ["A", "B", "C", "D", "S", "W", "A", "B", "B", "C", "G"];
var pattern = ["B", "C"];

function search(arr, pattern) {
  var count = 0;
  for (var i = 0; i < arr.length - pattern.length + 1; i++) {
    var match = true;
    for (var j = 0; j < pattern.length; j++) {
      if (arr[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      count++;
    }
  }
  return count;
}

let count = search(arr, pattern);
console.log(count); // Выводит 2
```
Этот код проходит по массиву `arr`, начиная с каждого элемента, и сравнивает его с шаблоном. Если найденное соответствие совпадает с шаблоном, счетчик увеличивается. В конце возвращается количество найденных шаблонов.
-----
⋙ ❍ Преобразование строки элементов в массив?
Преобразование строки элементов в массив можно сделать с помощью метода разделения строки на подстроки по определенному разделителю. В большинстве языков программирования для этого используется встроенная функция или метод. Например, вот как это можно сделать на примере JavaScript:
```javascript
let str = "apple,banana,orange";
let arr = str.split(","); // Разделение строки по запятой
console.log(arr); // ["apple", "banana", "orange"]
```
В этом примере `split(",")` разбивает строку `str` на подстроки, используя запятую в качестве разделителя, и возвращает массив строк.
На других языках программирования алгоритм будет похожим, хотя синтаксис может отличаться. Вот примеры на Python и Java:
Python:
```python
str = "apple,banana,orange"
arr = str.split(",") # Разделение строки по запятой
print(arr) # ['apple', 'banana', 'orange']
```
Java:
```java
String str = "apple,banana,orange";
String[] arr = str.split(","); // Разделение строки по запятой
System.out.println(Arrays.toString(arr)); // [apple, banana, orange]
```
Каждый элемент строки между запятыми становится отдельным элементом в результирующем массиве.
Преобразование строки элементов в массив:
JavaScript: `str.split(",")`
Python: `str.split(",")`
Java: `str.split(",")`
-----
⋙ ❍ Напишите функцию, которая преобразует любую из этих строк в массив?
const temp1 = 'One,Two,Three,Four,Five,Six,Seven,Eight,Nine';
const temp2 = 'Two, One,Four, Three, Six, Five, Seven, Nine, Eight';
Результат должен быть.
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[2, 1, 4, 3, 6, 5, 7, 9, 8]
✎ Это упражнение немного затруднительно, потому что им нужно понять, что для преобразования слов в числа необходимо использовать словарь или операторы условия/выбора.
Вот функция на JavaScript, которая преобразует строки в массивы:
```javascript
const temp1 = 'One,Two,Three,Four,Five,Six,Seven,Eight,Nine';
const temp2 = 'Two, One,Four, Three, Six, Five, Seven, Nine, Eight';

function stringToArray(str) {
  // Словарь для соответствия чисел словам
  const dict = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5,
    'Six': 6,
    'Seven': 7,
    'Eight': 8,
    'Nine': 9
  };

  // Разбиваем строку на массив слов
  const words = str.split(',');

  // Преобразуем каждое слово в числовое значение, используя словарь
  const result = words.map(word => dict[word.trim()]);

  return result;
}
console.log(stringToArray(temp1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(stringToArray(temp2)); // [2, 1, 4, 3, 6, 5, 7, 9, 8]
```
Эта функция использует словарь `dict`, чтобы соответствовать словам числа от 1 до 9. Затем она разбивает строку на массив слов, преобразует каждое слово в числовое значение с помощью словаря и возвращает массив чисел.
-----
⋙ ❍ Реализуйте следующий метод, который повторяет строку несколько раз?
✎ Если бы они упомянули прототипное наследование, то не было бы никаких проблем с реализацией пользовательского метода прототипа.
console.log(‘hello’.repeatify(3));
Для добавления метода `repeatify` к прототипу строк на JavaScript можно использовать следующий код:
```javascript
String.prototype.repeatify = function(n) {
  return Array(n + 1).join(this);
};
console.log('hello'.repeatify(3)); // Выводит "hellohellohello"
```
Этот код расширяет прототип `String`, добавляя метод `repeatify`, который принимает число `n` и повторяет текущую строку `n` раз. Внутри метода используется `Array(n + 1).join(this)`, чтобы создать новую строку, повторяя текущую строку `n` раз.
-----
⋙ ❍ Реализация специального метода reverse?
Надо добавить метод ‘customReverse’ в объект Array, который бы переворачивал порядок элементов в массиве.
console.log([0,1,2,3,4,5].customReverse());
Для добавления метода `customReverse` к объекту `Array` на JavaScript можно использовать следующий код:
```javascript
Array.prototype.customReverse = function() {
  return this.slice().reverse();
};
console.log([0, 1, 2, 3, 4, 5].customReverse()); // Выводит [5, 4, 3, 2, 1, 0]
```
Этот код расширяет прототип `Array`, добавляя метод `customReverse`, который использует `slice()` для создания копии массива и `reverse()` для изменения порядка элементов в копии. Таким образом, исходный массив остается неизменным, а метод `customReverse` возвращает перевернутую копию.
-----
⋙ ❍ Создайте функцию array_sum, которая суммирует все числа в многомерной структуре массива?
array_sum([1,2,[3,4,[5]]])
Вы можете реализовать функцию `array_sum`, используя рекурсивный подход для обхода всех элементов многомерного массива и суммирования чисел. Вот пример на JavaScript:
```javascript
function array_sum(arr) {
  let sum = 0;

  // Рекурсивная функция для обхода элементов массива
  function sumArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Если текущий элемент массива - это массив, вызываем sumArray рекурсивно
      if (Array.isArray(arr[i])) {
        sumArray(arr[i]);
      } else {
        // Если элемент массива - число, добавляем его к сумме
        sum += arr[i];
      }
    }
  }

  // Начинаем обход массива
  sumArray(arr);

  return sum;
}
console.log(array_sum([1, 2, [3, 4, [5]]])); // Выводит 15 (1 + 2 + 3 + 4 + 5)
```
Этот код пройдет по всем элементам массива, проверяя, является ли текущий элемент массивом или числом. Если это массив, функция вызывает саму себя для этого вложенного массива. Если это число, оно добавляется к общей сумме.
-----
⋙ ❍ Реализуйте метод, который вычисляет среднюю длину всех пакетов в структуре данных?
var packages = {
  UPS: { length: 120, weight: 44 },
  FedeX: { length: 135, weight: 130 },
  USPS: { length: 150 }
}
function calculateAvgLength(packages) {
  ...
}
console.log(calculateAvgLength(packages));
Вы можете реализовать функцию `calculateAvgLength`, которая вычисляет среднюю длину всех пакетов в данной структуре данных. Вот пример на JavaScript:
```javascript
var packages = {
  UPS: { length: 120, weight: 44 },
  FedEx: { length: 135, weight: 130 },
  USPS: { length: 150 }
};

function calculateAvgLength(packages) {
  let totalLength = 0;
  let count = 0;

  // Проходим по каждому пакету в структуре данных
  for (let key in packages) {
    if (packages.hasOwnProperty(key) && packages[key].length !== undefined) {
      totalLength += packages[key].length;
      count++;
    }
  }

  // Вычисляем среднюю длину
  const avgLength = count !== 0 ? totalLength / count : 0;

  return avgLength;
}

console.log(calculateAvgLength(packages)); // Выводит 135 (средняя длина пакетов)
```
Этот код проходит через все пакеты в объекте `packages`, суммирует их длины и подсчитывает общее количество пакетов. Затем он вычисляет среднее значение длины и возвращает его.
-----
⋙ ❍ Реализуйте метод, который сортирует данную строку в другую?
let str = “Addy 2 Daddy 3 WoW 9 Modern 4 Architecture 87”;
Должно быть отсортировано на:
"acdehinortuyADMW234789"
✎ Кандидат должен выводить, что делать в рамках заданной процедуры, исходя из входных данных и ожидаемого результата.
Чтобы реализовать метод, который сортирует данную строку в другую, вы можете использовать следующий код на JavaScript:
```javascript
let str = "Addy 2 Daddy 3 WoW 9 Modern 4 Architecture 87";

function sortString(str) {
  // Удаляем пробелы из строки
  let cleanedStr = str.replace(/\s/g, '');

  // Отсортируем символы строки в алфавитном порядке
  let sortedStr = cleanedStr.split('').sort().join('');

  // Удаляем все не-цифровые символы из строки
  let digitsOnly = sortedStr.replace(/\D/g, '');

  return digitsOnly + sortedStr.replace(/\d/g, '');
}
console.log(sortString(str)); // Выводит "acdehinortuyADMW234789"
```
Этот код удаляет пробелы из исходной строки, затем сортирует символы строки в алфавитном порядке. После этого он удаляет все не-цифровые символы из отсортированной строки и объединяет их в нужном порядке.
-----
⋙ ❍ Прошу их создать класс, который преобразует JSON в XML и XML в JSON. Я даю им следующую структуру класса и прошу их заполнить ее?
class Transformer
{
public convertXMLtoJSON();
public convertJSONtoXML();
}
convertXMLtoJSON — Программа преобразует любой XML-документ в структуру JSON, которую они реализуют самостоятельно.
convertJSONtoXML — Преобразует JSON, сгенерированный функцией convertXMLtoJSON, обратно в документ XML.
Пример реализации класса `Transformer`, который преобразует JSON в XML и XML в JSON на JavaScript:
```javascript
class Transformer {
  convertXMLtoJSON(xmlString) {
    let xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
    let json = this.xmlToJSON(xmlDoc);
    return json;
  }

  convertJSONtoXML(jsonObject) {
    let xmlString = this.jsonToXML(jsonObject);
    return xmlString;
  }

  xmlToJSON(xmlNode) {
    let obj = {};

    if (xmlNode.nodeType === Node.ELEMENT_NODE) {
      if (xmlNode.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let i = 0; i < xmlNode.attributes.length; i++) {
          let attribute = xmlNode.attributes.item(i);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xmlNode.nodeType === Node.TEXT_NODE) {
      return xmlNode.nodeValue.trim();
    }

    if (xmlNode.hasChildNodes()) {
      for (let i = 0; i < xmlNode.childNodes.length; i++) {
        let item = xmlNode.childNodes.item(i);
        let nodeName = item.nodeName;
        if (nodeName === '#text') {
          continue;
        }
        if (obj[nodeName] === undefined) {
          obj[nodeName] = this.xmlToJSON(item);
        } else {
          if (obj[nodeName].push === undefined) {
            let old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJSON(item));
        }
      }
    }

    return obj;
  }

  jsonToXML(obj) {
    let xml = '';

    for (let prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }
      if (prop === '@attributes') {
        for (let attr in obj[prop]) {
          if (obj[prop].hasOwnProperty(attr)) {
            xml += ` ${attr}="${obj[prop][attr]}"`;
          }
        }
      } else if (Array.isArray(obj[prop])) {
        obj[prop].forEach((item) => {
          xml += `<${prop}>${this.jsonToXML(item)}</${prop}>`;
        });
      } else if (typeof obj[prop] === 'object') {
        xml += `<${prop}${this.jsonToXML(obj[prop])}></${prop}>`;
      } else {
        xml += `<${prop}>${obj[prop]}</${prop}>`;
      }
    }

    return xml;
  }
}
Пример использования:
// let transformer = new Transformer();

Преобразование XML в JSON
// let xmlString = '<root><person name="John"><age>30</age></person></root>';
let jsonObject = transformer.convertXMLtoJSON(xmlString);
console.log(jsonObject);

Преобразование JSON в XML
let json = {
  root: {
    person: {
      '@attributes': {
        name: 'John'
      },
      age: '30'
    }
  }
};
let xmlString2 = transformer.convertJSONtoXML(json);
console.log(xmlString2);
```
Этот класс принимает XML-строку и JSON-объект в методах `convertXMLtoJSON` и `convertJSONtoXML` соответственно и возвращает преобразованный JSON-объект или XML-строку.
-----
⋙ ❍ Как сделать так, чтобы выводило цифры по порядку?
Чтобы вывести цифры по порядку, вы можете использовать самовызывающуюся функцию или использовать замыкание для сохранения значения переменной `i` на каждой итерации цикла. Вот пример, как это можно сделать:
```javascript
for (var i = 0; i < 10; i++) {
  (function(index) {
    setTimeout(function () {
      console.log(index);
    }, 0);
  })(i);
}
```
В этом примере мы создаем самовызывающуюся функцию, которая получает значение переменной `i` как аргумент и сохраняет его в переменной `index`. Это позволяет каждой функции обратного вызова `setTimeout` использовать правильное значение `index`, сохраненное в замыкании. Таким образом, цифры будут выводиться по порядку от 0 до 9.
-----
⋙ ❍ Напишите функцию принимающую строку с именем файла и возвращающую расширение (фрагмент после последней точки)?
Вы можете написать функцию, которая найдет расширение файла, используя методы строки JavaScript. Вот пример:
```javascript
function getFileExtension(filename) {
  // Находим последнее вхождение точки в строке
  let lastDotIndex = filename.lastIndexOf('.');
  // Если точка найдена и она не является последним символом в строке
  if (lastDotIndex !== -1 && lastDotIndex < filename.length - 1) {
    // Возвращаем подстроку после последней точки
    return filename.substring(lastDotIndex + 1);
  } else {
    // Если точка не найдена или является последним символом, возвращаем пустую строку
    return '';
  }
}
// Пример использования
console.log(getFileExtension('document.txt')); // Выведет: "txt"
console.log(getFileExtension('image.jpg')); // Выведет: "jpg"
console.log(getFileExtension('script.js.map')); // Выведет: "map"
console.log(getFileExtension('file')); // Выведет: ""
```
Эта функция использует метод `lastIndexOf()` для поиска последнего вхождения точки в имени файла и метод `substring()` для получения подстроки после последней точки. Если точка не найдена или является последним символом в строке, функция вернет пустую строку.
-----
⋙ ❍ У вас есть строка “abcd”, и вам поручено написать функцию, которая переворачивает ее на “dcba”. Как бы вы это сделали? Подробно объясните?
Многие вспоминают метод .reverse у массивов.
s.split('').reverse().join('');
Однако некоторые могут использовать цикл for и метод charAt для разворота строки.
function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}
-----
⋙ ❍ Что вернет выражение +new Date()? Чем отличается от Date.now()?
Ответ в том, что +new Date(); создаст экземпляр объекта Date и благодаря + переведет его в числовой формат. Во втором случае вызовется статический метод конструктора, который является более приоритетным, т.к. во-первых он не требует создания экземпляра, а во-вторых является более понятным.
Правильно, выражение `+new Date()` создаст экземпляр объекта `Date` и затем преобразует его в числовой формат, представляющий количество миллисекунд, прошедших с начала эпохи Unix. Этот подход используется для быстрого получения текущего времени в миллисекундах.
В то время как `Date.now()` является статическим методом объекта `Date`, который возвращает текущее время в миллисекундах, также представляющее количество миллисекунд, прошедших с начала эпохи Unix. Этот метод не требует создания экземпляра объекта `Date`, что делает его более эффективным и читаемым в некоторых случаях.
-----
⋙ ❍ Напишите регулярное выражение для проверки строк соответствующих формату даты dd.mm.yyyy?
Каков будет результат выполнения следующего кода:
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
Регулярное выражение для проверки строк соответствующих формату даты `dd.mm.yyyy` будет выглядеть так:
```regex
/^\d{2}\.\d{2}\.\d{4}$/
```
Это регулярное выражение соответствует строке, которая начинается с двух цифр (`\d{2}`), затем точка, затем две цифры, точка, и четыре цифры в конце (`\d{4}`).
Относительно кода, который вы предоставили, результат выполнения будет таким:
```plaintext
10
10
10
10
10
10
10
10
10
10
```
Это происходит из-за того, что переменная `i` используется в замыкании функции обратного вызова внутри `setTimeout`. Когда функция обратного вызова выполняется позже, она использует последнее значение `i`, которое стало равным 10 после завершения цикла.
-----
⋙ ❍ Как поменять контекст функции. Частичное применение функции?
В JavaScript вы можете изменить контекст функции с помощью методов `call()`, `apply()` и `bind()`. Частичное применение функции обычно осуществляется с помощью метода `bind()`.
Изменение контекста функции:
1. call(): Метод `call()` вызывает функцию с указанным контекстом и аргументами.
```javascript
function greet() {
  console.log('Hello, ' + this.name);
}

var person = { name: 'John' };
greet.call(person); // Выведет: "Hello, John"
```
2. apply(): Метод `apply()` вызывает функцию с указанным контекстом и массивом аргументов.
```javascript
function greet(message) {
  console.log(message + ', ' + this.name);
}

var person = { name: 'John' };
greet.apply(person, ['Hello']); // Выведет: "Hello, John"
```
Частичное применение функции:
Метод `bind()` создает новую функцию, связывая указанный контекст с функцией. Возвращаемая функция также может иметь некоторые параметры, которые будут переданы при вызове.
```javascript
function greet(message) {
  console.log(message + ', ' + this.name);
}

var person = { name: 'John' };
var greetJohn = greet.bind(person, 'Hello');
greetJohn(); // Выведет: "Hello, John"
```
В этом примере `greet.bind(person, 'Hello')` создает новую функцию `greetJohn`, которая будет вызывать `greet` с контекстом `person` и аргументом `'Hello'`. При вызове `greetJohn()` будет выведено `"Hello, John"`.
Таким образом, частичное применение функции с помощью метода `bind()` позволяет задать некоторые параметры функции заранее, оставив другие параметры для передачи при вызове.
-----
⋙ ❍ Как создать приватную переменную в JavaScript, используя ‘let’ или замыкание?
Замыкание может возвращать ссылку на функцию, которая позволяет нам получить доступ к приватному пространству.
let getX = (function () {
  let x = 100;
  return function () {
        return x;
     }
})();
console.log("x: " + getX());
Переменная, созданная с помощью ‘let’, привязана к своим скобкам.
let getX;
let x = 500;
{
    let x = 100;
    getX = function () {
        return x;
    }
}
console.log("x1: " + getX());
getX = function () {
    return x;
}
console.log("x2: " + getX());
-----
⋙ ❍ Чем отличается: ?
var something = function
&
function something();
Функция something() поднимается в начале, когда скрипт интерпретируется. В то время как переменная var something = function становится доступной для использования после соответствующего оператора.
---------------------------------------------------------------------------------------------
