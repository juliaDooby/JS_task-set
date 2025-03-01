---------------------------------------------------------------------------------------------
⋙ ❍ Как получить текущий URL ?
---
В браузерной среде JavaScript можно получить текущий URL с помощью объекта `window.location`. Вот несколько способов получения текущего URL:
1. window.location.href: Это свойство возвращает полный URL текущей страницы в виде строки.
```javascript
var currentUrl = window.location.href;
console.log(currentUrl);
```
2. window.location.toString(): Этот метод возвращает текущий URL в виде строки.
```javascript
var currentUrl = window.location.toString();
console.log(currentUrl);
```
3. window.location.pathname: Это свойство возвращает часть URL после домена (т.е. путь к текущему ресурсу).
```javascript
var pathName = window.location.pathname;
console.log(pathName);
```
4. window.location.origin: Это свойство возвращает протокол, хост и порт текущего URL.
```javascript
var origin = window.location.origin;
console.log(origin);
```
Каждый из этих способов позволяет получить различные части текущего URL в зависимости от потребностей вашего приложения.
---------------------------------------------------------------------------------------------
