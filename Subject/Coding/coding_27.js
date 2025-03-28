---------------------------------------------------------------------------------------------
28
⋙ ❍ Реализуйте функцию/класс для генерации HTML?
---
const HTMLConstruct = {};
HTMLConstruct.span('foo'); // -> <span>foo</span>
HTMLConstruct.div.span('bar'); // -> <div><span>bar</span></div>
HTMLConstruct.div.p(
HTMLConstruct.span('bar'),
HTMLConstruct.div.span('baz')
);
-> <div><p><span>bar</span><span>baz</span></p></div>
Для генерации HTML-кода в JavaScript можно создать класс, который будет представлять HTML-элемент и предоставлять методы для добавления атрибутов, вложенных элементов и получения итогового HTML-кода. Это позволит динамически создавать и управлять HTML-структурами в вашем приложении.
Ниже представлен пример такого класса:
```javascript
class HTMLElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.attributes = {};
    this.children = [];
    this.selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  toString() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    const isSelfClosing = this.selfClosingTags.includes(this.tagName);
    const childrenHTML = this.children.map(child => child.toString()).join('');
    return isSelfClosing
      ? `<${this.tagName}${attrs} />`
      : `<${this.tagName}${attrs}>${childrenHTML}</${this.tagName}>`;
  }
}
```
Пример использования:
```javascript
// Создаем элемент <div>
const div = new HTMLElement('div');
div.setAttribute('class', 'container');

// Создаем вложенный элемент <p>
const paragraph = new HTMLElement('p');
paragraph.setAttribute('class', 'text');
paragraph.appendChild({
  toString: () => 'Привет, мир!'
});

// Добавляем <p> как дочерний элемент <div>
div.appendChild(paragraph);

// Получаем итоговый HTML
console.log(div.toString());
```
В результате выполнения этого кода в консоли будет выведено:
```html
<div class="container"><p class="text">Привет, мир!</p></div>
```
Объяснение:
- Конструктор `constructor(tagName)`: Инициализирует новый элемент с заданным тегом, пустыми атрибутами и дочерними элементами.
- Метод `setAttribute(name, value)`: Устанавливает атрибут для элемента.
- Метод `appendChild(child)`: Добавляет дочерний элемент. Дочерний элемент должен иметь метод `toString`, который возвращает его HTML-представление.
- Метод `toString()`: Генерирует HTML-код для элемента, включая его атрибуты и дочерние элементы. Учитывает самозакрывающиеся теги.
Этот подход позволяет программно создавать сложные HTML-структуры, управлять их атрибутами и вложенностью, что особенно полезно при динамическом формировании контента на стороне клиента.
---------------------------------------------------------------------------------------------
