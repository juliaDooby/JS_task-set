---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
16. Классы и Наследование
ES6 ввёл поддержку классов и наследования в JavaScript.
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks
```
---
Заключение
С введением ES6 и последующих версий JavaScript стал гораздо мощнее и удобнее. Некоторые ключевые возможности включают:
- Модули для структурирования кода.
- Асинхронные функции (`async/await`) для удобной работы с промисами.
- Новые типы данных, такие как `Symbol`, и улучшенные возможности для работы с объектами и массивами.
Знание этих современных возможностей сделает код более чистым, продуктивным и удобным для работы.
---------------------------------------------------------------------------------------------
