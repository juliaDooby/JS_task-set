---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
--- 
13. Явное указание this через apply
⌛ Задача: Что выведет код?
```javascript
function sum(a, b) {
  console.log(this);
  return a + b;
}
const obj = { value: 10 };
console.log(sum.apply(obj, [5, 7]));
```
🎯 Решение:
```javascript
{ value: 10 }
12
```
---------------------------------------------------------------------------------------------
