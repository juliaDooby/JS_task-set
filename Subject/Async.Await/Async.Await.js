---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
1. Простое использование `async/await`
⌛ Задача: Напишите функцию, которая возвращает `"Hello, Async/Await"` через 1 секунду с использованием `async/await`.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  await delay(1000);
  return "Hello, Async/Await";
}

greet().then(console.log); // "Hello, Async/Await"
```
Объяснение: `await` приостанавливает выполнение функции до выполнения промиса.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
2. Обработка ошибки
⌛ Задача: Обработайте ошибку в `async` функции.
🎯 Решение:
```javascript
async function errorDemo() {
  throw new Error("Something went wrong");
}

async function run() {
  try {
    await errorDemo();
  } catch (error) {
    console.log(error.message); // "Something went wrong"
  }
}

run();
```
Объяснение: Используйте `try...catch` для обработки ошибок в `async` функциях.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
3. Последовательное выполнение
⌛ Задача: Выполните два асинхронных вызова последовательно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const result1 = await task1();
  console.log(result1); // "Task 1 completed"
  const result2 = await task2();
  console.log(result2); // "Task 2 completed"
}

runTasks();
```
Объяснение: Выполнение асинхронных задач идёт по порядку.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
4. Параллельное выполнение
⌛ Задача: Выполните два асинхронных вызова параллельно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const [result1, result2] = await Promise.all([task1(), task2()]);
  console.log(result1, result2); // "Task 1 completed", "Task 2 completed"
}

runTasks();
```
Объяснение: `Promise.all` выполняет задачи параллельно и возвращает массив результатов.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
5. `await` внутри цикла
⌛ Задача: Последовательно обработайте массив задач.
🎯 Решение:
```javascript
async function processArray(arr) {
  for (const item of arr) {
    const result = await new Promise(resolve => setTimeout(() => resolve(item * 2), 500));
    console.log(result);
  }
}

processArray([1, 2, 3]); // 2, 4, 6
```
Объяснение: `await` можно использовать внутри цикла для последовательной обработки.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
6. Параллельная обработка массива
⌛ Задача: Обработайте массив параллельно.
🎯 Решение:
```javascript
async function processArray(arr) {
  const results = await Promise.all(
    arr.map(item => new Promise(resolve => setTimeout(() => resolve(item * 2), 500)))
  );
  console.log(results); // [2, 4, 6]
}

processArray([1, 2, 3]);
```
Объяснение: Использование `Promise.all` позволяет выполнять задачи одновременно.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
7. Функция с задержкой
⌛ Задача: Напишите функцию `wait`, которая задерживает выполнение кода на заданное время.
🎯 Решение:
```javascript
async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(1000);
  console.log("1 second passed");
}

run();
```
Объяснение: `await` позволяет ожидать выполнения промиса внутри функции.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
8. Прекращение выполнения при ошибке
⌛ Задача: Что произойдёт, если в цепочке вызовов произойдёт ошибка?
🎯 Решение:
```javascript
async function task1() {
  return "Task 1";
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  try {
    const result1 = await task1();
    console.log(result1); // "Task 1"
    const result2 = await task2(); // Ошибка
    console.log(result2);
  } catch (error) {
    console.log(error.message); // "Task 2 failed"
  }
}

runTasks();
```
Объяснение: Если промис выбрасывает ошибку, она перехватывается в блоке `catch`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
9. Использование `finally`
⌛ Задача: Добавьте `finally` в `async` функцию.
🎯 Решение:
```javascript
async function run() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result); // "Success"
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Cleanup"); // "Cleanup"
  }
}

run();
```
Объяснение: `finally` выполняется независимо от результата промиса.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
10. Обработка нескольких ошибок
⌛ Задача: Как обработать ошибки для нескольких асинхронных вызовов?
🎯 Решение:
```javascript
async function task1() {
  throw new Error("Task 1 failed");
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  const results = await Promise.allSettled([task1(), task2()]);
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log(result.reason.message);
    }
  });
}

runTasks();
```
Объяснение: `Promise.allSettled` возвращает результаты всех промисов, включая ошибки.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
11. Асинхронная рекурсия
⌛ Задача: Реализуйте асинхронную рекурсию для подсчёта числа до 5.
🎯 Решение:
```javascript
async function countDown(n) {
  if (n === 0) return;
  console.log(n);
  await new Promise(resolve => setTimeout(resolve, 500));
  await countDown(n - 1);
}

countDown(5); // 5, 4, 3, 2, 1
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
12. Чтение данных через `fetch`
⌛ Задача: Используйте `fetch` для получения данных.
🎯 Решение:
```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
13. Обработка ошибки сети
⌛ Задача: Обработайте ошибку при использовании `fetch`.
🎯 Решение:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
14. Асинхронная функция в классе
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
---------------------------------------------------------------------------------------------  
15. Промисификация функций
⌛ Задача: Превратите функцию с колбэком в `async/await`.
🎯 Решение:
```javascript
function delay(ms, callback) {
  setTimeout(() => callback(null, "Done"), ms);
}

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

const delayAsync = promisify(delay);
delayAsync(1000).then(console.log); // "Done"
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
16. Асинхронный таймер
⌛ Задача: Напишите асинхронный таймер с использованием `async/await`.
🎯 Решение:
```javascript
async function timer(seconds) {
  for (let i = seconds; i >= 0; i--) {
    console.log(i);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

timer(5); // 5, 4, 3, 2, 1, 0
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------  
17. Повторная попытка выполнения задачи
⌛ Задача: Напишите функцию, которая повторяет выполнение асинхронной задачи 3 раза при ошибке.
🎯 Решение:
```javascript
async function retry(task, retries) {
  try {
    return await task();
  } catch (error) {
    if (retries > 0) {
      console.log("Retrying...");
      return retry(task, retries - 1);
    }
    throw error;
  }
}

async function task() {
  throw new Error("Task failed");
}

retry(task, 3).catch(console.log); // "Task failed" после 3 попыток
```
---------------------------------------------------------------------------------------------
