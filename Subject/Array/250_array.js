
***********************************************************************************
ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZz    
// ---------------------
// ⋙ ❍ Другие задачи:
---
1. Поиск максимального элемента в массиве
⌛ Задача: Найти максимальное число в массиве.
🎯 Решение:
1.1. Использование `Math.max()` и `spread`
```javascript
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- Использует оператор `...` (spread), чтобы передать все элементы в `Math.max()`.
- Работает за O(N).
---
1.2. Цикл `for`
```javascript
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- Инициализируем `max` первым элементом и проходим по массиву.
- Работает за O(N).
---
1.3. Метод `reduce()`
```javascript
function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- `reduce()` сравнивает элементы и сохраняет максимальное значение.
- Работает за O(N).
---
1.4. Сортировка и выбор последнего элемента
```javascript
function findMax(arr) {
    return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- Сортируем массив, выбираем последний элемент.
- Работает за O(N log N), что менее эффективно.
---
1.5. Рекурсивный подход
```javascript
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    let restMax = findMax(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;
}

console.log(findMax([3, 5, 9, 1, 6])); // 9
```
Объяснение:
- Разбиваем массив и рекурсивно сравниваем.
- Работает за O(N) по времени и O(N) по памяти.
---
2. Проверка, является ли число простым
⌛ Задача: Проверить, является ли число `n` простым.
🎯 Решение:
2.1. Перебор всех чисел от 2 до `n-1`
```javascript
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```
Объяснение:
- Простые числа делятся только на 1 и себя.
- O(N) — медленно для больших чисел.
---
2.2. Оптимизированный перебор до `sqrt(n)`
```javascript
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```
Объяснение:
- Проверяем делители только до `sqrt(n)`.
- Работает за O(√N).
---
2.3. Использование решета Эратосфена (для диапазона чисел)
```javascript
function sieve(n) {
    let primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes.map((isPrime, idx) => isPrime ? idx : -1).filter(x => x !== -1);
}

console.log(sieve(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
```
Объяснение:
- Идеально для нахождения всех простых чисел до `n`.
- O(N log log N) — очень эффективно.
---
2.4. Четные числа не могут быть простыми (кроме 2)
```javascript
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```
Объяснение:
- Исключаем четные числа, кроме 2.
- O(√N) — быстрее, чем наивный O(N).
---
2.5. Запоминаем уже проверенные простые числа
```javascript
let cache = {};

function isPrime(n) {
    if (n in cache) return cache[n];

    if (n < 2) return (cache[n] = false);
    if (n === 2) return (cache[n] = true);
    if (n % 2 === 0) return (cache[n] = false);

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return (cache[n] = false);
    }

    return (cache[n] = true);
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(7)); // true (быстрее за счет кеша)
```
Объяснение:
- Используем объект `cache` для хранения результатов.
- Позволяет избежать повторных вычислений.
---
Вывод
Мы разобрали 2 задачи с 5 разными решениями:
1. Поиск максимального элемента
2. Проверка числа на простоту
---
3. Переворот строки
⌛ Задача: Написать функцию, которая переворачивает строку.
🎯 Решение:
3.1. Метод `split()`, `reverse()` и `join()`
```javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Разбиваем строку в массив (`split("")`), переворачиваем (`reverse()`), объединяем обратно (`join("")`).
- O(N).
---
3.2. Цикл `for`
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Добавляем символы в новую строку в обратном порядке.
- O(N).
---
3.3. Рекурсия
```javascript
function reverseString(str) {
    return str.length <= 1 ? str : reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Берем первый символ и перемещаем его в конец.
- O(N), но O(N) памяти из-за рекурсии.
---
3.4. Метод `reduce()`
```javascript
function reverseString(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Проходим по массиву и добавляем символы перед текущей строкой.
- O(N).
---
3.5. Деструктуризация с `map()`
```javascript
function reverseString(str) {
    return [...str].map((_, i, arr) => arr[arr.length - 1 - i]).join("");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Используем `map()` для перестановки элементов.
- O(N).
---
4. Фибоначчи
⌛ Задача: Найти `n`-е число Фибоначчи.
🎯 Решение:
4.1. Рекурсия
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```
Объяснение:
- Простой, но O(2^N) — медленный.
---
4.2. Мемоизация
```javascript
let memo = {};

function fibonacci(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```
Объяснение:
- Используем `memo` для кеширования.
- O(N).
---
4.3. Итеративный `for`
```javascript
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fibonacci(6)); // 8
```
Объяснение:
- O(N), но без рекурсии.
---
4.4. Итеративный `while`
```javascript
function fibonacci(n) {
    let a = 0, b = 1, i = 2;
    while (i <= n) {
        [a, b] = [b, a + b];
        i++;
    }
    return b;
}

console.log(fibonacci(6)); // 8
```
Объяснение:
- Работает аналогично `for`.
---
4.5. Формула Бине
```javascript
function fibonacci(n) {
    const sqrt5 = Math.sqrt(5);
    return Math.round((Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / (Math.pow(2, n) * sqrt5));
}

console.log(fibonacci(6)); // 8
```
Объяснение:
- Вычисляет за O(1), но могут быть ошибки округления.
---
5. Проверка палиндрома
⌛ Задача: Проверить, является ли строка палиндромом.
🎯 Решение:
5.1. Сравнение с `reverse()`
```javascript
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Разворачиваем строку и сравниваем.
- O(N).
---
5.2. Два указателя
```javascript
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Два указателя двигаются навстречу друг другу.
- O(N).
---
5.3. Рекурсивный способ
```javascript
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Сравниваем первый и последний символы.
- O(N), но O(N) памяти.
---
5.4. `every()`
```javascript
function isPalindrome(str) {
    return [...str].every((char, i) => char === str[str.length - 1 - i]);
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Проверяем каждый символ, сравнивая с зеркальным.
---
5.5. Регулярное выражение (игнорирует пробелы и знаки)
```javascript
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Убираем знаки и пробелы, сравниваем перевернутую строку.
---
Вывод
Мы разобрали 5 решений для 5 новых задач:
1. Переворот строки
2. Числа Фибоначчи
3. Проверка палиндрома
---
6. Удаление дубликатов из массива
⌛ Задача: Удалить повторяющиеся элементы в массиве и вернуть уникальные значения.
🎯 Решение:
6.1. Использование `Set`
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- `Set` хранит только уникальные значения.
- O(N).
---
6.2. Использование `filter()` и `indexOf()`
```javascript
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- `indexOf()` проверяет, если элемент встречается впервые.
- O(N²) (медленно для больших массивов).
---
6.3. Использование `reduce()`
```javascript
function removeDuplicates(arr) {
    return arr.reduce((unique, item) => {
        if (!unique.includes(item)) unique.push(item);
        return unique;
    }, []);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- Проверяем, есть ли элемент в новом массиве.
- O(N²) (из-за `includes()`).
---
6.4. Использование `Map`
```javascript
function removeDuplicates(arr) {
    let map = new Map();
    arr.forEach(item => map.set(item, true));
    return [...map.keys()];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- `Map` сохраняет уникальные ключи.
- O(N).
---
6.5. Использование `Object`
```javascript
function removeDuplicates(arr) {
    let obj = {};
    arr.forEach(item => obj[item] = true);
    return Object.keys(obj).map(Number);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- Используем `Object`, чтобы хранить уникальные значения.
- O(N).
---
7. Поиск второго максимального элемента в массиве
⌛ Задача: Найти второй по величине элемент в массиве.
🎯 Решение:
7.1. Сортировка и выбор элемента
```javascript
function secondMax(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1] ?? null;
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Убираем дубликаты, сортируем, выбираем второй элемент.
- O(N log N).
---
7.2. Два прохода (поиск макс, затем второго макс)
```javascript
function secondMax(arr) {
    let max = Math.max(...arr);
    let filtered = arr.filter(num => num !== max);
    return Math.max(...filtered);
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Находим максимум, фильтруем его, ищем максимум снова.
- O(N).
---
7.3. Один проход (два указателя)
```javascript
function secondMax(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Два указателя (`max`, `secondMax`).
- O(N).
---
7.4. `reduce()`
```javascript
function secondMax(arr) {
    let max = Math.max(...arr);
    return arr.reduce((secondMax, num) => (num !== max && num > secondMax ? num : secondMax), -Infinity);
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- O(N), но не такой читаемый, как с `for`.
---
7.5. Использование `Set` и `Math.max()`
```javascript
function secondMax(arr) {
    let unique = [...new Set(arr)];
    unique.splice(unique.indexOf(Math.max(...unique)), 1);
    return Math.max(...unique);
}

console.log(secondMax([10, 20, 4, 45, 99, 99])); // 45
```
Объяснение:
- Убираем дубликаты, удаляем максимальное число, ищем новый максимум.
- O(N).
---
8. Перестановка слов в предложении
⌛ Задача: Развернуть порядок слов в строке.
🎯 Решение:
8.1. `split()`, `reverse()` и `join()`
```javascript
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Разбиваем строку в массив слов, переворачиваем, соединяем.
- O(N).
---
8.2. `reduce()`
```javascript
function reverseWords(str) {
    return str.split(" ").reduce((rev, word) => word + " " + rev, "").trim();
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- `reduce()` добавляет слова в обратном порядке.
- O(N).
---
8.3. Цикл `for`
```javascript
function reverseWords(str) {
    let words = str.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    return reversed.join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Проходим по массиву слов в обратном порядке.
- O(N).
---
8.4. Использование стека (`push()` и `pop()`)
```javascript
function reverseWords(str) {
    let words = str.split(" ");
    let stack = [];
    for (let word of words) stack.push(word);
    return stack.reverse().join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Заполняем массив (`push()`), переворачиваем (`reverse()`).
- O(N).
---
8.5. Рекурсивное решение
```javascript
function reverseWords(str) {
    let words = str.split(" ");
    return words.length === 1 ? words[0] : reverseWords(words.slice(1).join(" ")) + " " + words[0];
}

console.log(reverseWords("hello world!")); // "world! hello"
```
Объяснение:
- Разбиваем строку и вызываем рекурсию.
- O(N).
---------------------------------------------------------------------------------------------
