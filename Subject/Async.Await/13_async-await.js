---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
--- 
13. Асинхронная функция в классе
⌛ Задача: Реализуйте асинхронный метод в классе.
🎯 Решение:
```javascript
class DataLoader {
  async load() {
    return "Data loaded";
  }
}

const loader = new DataLoader();
loader.load().then(console.log); // "Data loaded"
```
---------------------------------------------------------------------------------------------
