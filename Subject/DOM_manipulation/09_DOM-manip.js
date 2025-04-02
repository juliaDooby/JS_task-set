---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с DOM:
-----
9. Использование XPath
Метод `document.evaluate()` позволяет выполнять поиск с помощью XPath.
```javascript
const xpathResult = document.evaluate('//div[@class="myClass"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
console.log(xpathResult.singleNodeValue);
```
Объяснение: XPath — мощный инструмент для поиска сложных элементов.
---------------------------------------------------------------------------------------------  
