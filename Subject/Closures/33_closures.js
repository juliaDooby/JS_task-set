---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на понимание замыканий\колбеков:
---
33. Закрытие доступа через замыкание
⌛ Задача: Напишите функцию, которая защищает доступ к приватным данным через замыкание.
🎯 Решение:
```javascript
function createPrivateData() {
  let privateData = 'secret';
  return {
    getPrivateData: () => privateData,
    setPrivateData: (newData) => { privateData = newData; }
  };
}

const data = create
---------------------------------------------------------------------------------------------  
