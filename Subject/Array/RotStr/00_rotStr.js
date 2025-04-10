
### 🔹 **Задача 1: Простая проверка поворота строки**

**Условие:**  
Проверь, является ли строка `s2` повёрнутой версией строки `s1`.

```js
function isRotated(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
```

**Объяснение:**  
Если строка `s2` — повёрнутая версия `s1`, то она будет подстрокой `s1 + s1`.  
Например: `"abcde"` + `"abcde"` → `"abcdeabcde"` содержит `"deabc"`.

---

### 🔹 **Задача 2: Игнорировать регистр**

**Условие:**  
Та же задача, но игнорировать регистр символов.

```js
function isRotatedIgnoreCase(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1.toLowerCase() + s1.toLowerCase()).includes(s2.toLowerCase());
}
```

**Объяснение:**  
Перед сравнением всё переводится в нижний регистр.

---

### 🔹 **Задача 3: С учётом пробелов**

**Условие:**  
Пробелы считаются значимыми. `"abc "` и `" cab"` — не ротация.

```js
function isRotatedStrict(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
```

**Объяснение:**  
Та же логика — важно, что пробелы остаются.

---

### 🔹 **Задача 4: Удалить пробелы перед сравнением**

**Условие:**  
Сравниваем строки, но игнорируем пробелы.

```js
function isRotatedNoSpaces(s1, s2) {
  s1 = s1.replace(/\s/g, '');
  s2 = s2.replace(/\s/g, '');
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
```

**Объяснение:**  
`replace(/\s/g, '')` удаляет все пробелы перед сравнением.

---

### 🔹 **Задача 5: Проверка без includes()**

**Условие:**  
Реализуй проверку без использования `includes()`.

```js
function isRotatedManual(s1, s2) {
  if (s1.length !== s2.length) return false;
  const doubled = s1 + s1;
  for (let i = 0; i <= doubled.length - s2.length; i++) {
    if (doubled.slice(i, i + s2.length) === s2) return true;
  }
  return false;
}
```

**Объяснение:**  
Проверка подстрок вручную через `slice()`.

---

### 🔹 **Задача 6: Учитывать Unicode символы**

```js
function isRotatedUnicode(s1, s2) {
  if ([...s1].length !== [...s2].length) return false;
  return ([...s1, ...s1].join('')).includes([...s2].join(''));
}
```

**Объяснение:**  
Разбиваем строки на массивы символов с поддержкой Unicode (например, эмодзи).

---

### 🔹 **Задача 7: Поддержка кириллицы и других языков**

```js
function isRotatedMultiLang(s1, s2) {
  return isRotatedUnicode(s1, s2);
}
```

**Объяснение:**  
Повторяем предыдущее решение — работает и с кириллицей.

---

### 🔹 **Задача 8: Проверка всех возможных поворотов**

**Условие:**  
Верни `true`, если `s2` равна **любому** циклическому сдвигу `s1`.

```js
function isAnyRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    const rotated = s1.slice(i) + s1.slice(0, i);
    if (rotated === s2) return true;
  }
  return false;
}
```

**Объяснение:**  
Генерируем все сдвиги вручную.

---

### 🔹 **Задача 9: Вернуть индекс поворота**

**Условие:**  
Если `s2` — поворот `s1`, верни индекс, с которого начинается поворот.

```js
function getRotationIndex(s1, s2) {
  if (s1.length !== s2.length) return -1;
  const doubled = s1 + s1;
  return doubled.indexOf(s2);
}
```

**Объяснение:**  
Индекс появления `s2` в `s1 + s1` — и есть точка поворота. Если `-1`, значит не ротация.

---

### 🔹 **Задача 10: Проверка с помощью регулярных выражений (чисто ради фана)**

```js
function isRotatedRegex(s1, s2) {
  if (s1.length !== s2.length) return false;
  const regex = new RegExp(s2);
  return regex.test(s1 + s1);
}
```

**Объяснение:**  
Используем регулярку — не самый практичный, но интересный способ.

Отлично, давай усложним! Вот **5 более сложных вариаций задач на тему поворота строки**, с интересными условиями и решениями на JavaScript.

---

### 🔸 **1. Проверка с ограниченным числом поворотов**

**Условие:**  
Проверь, может ли `s2` получиться из `s1` максимум за `k` циклических поворотов.

```js
function isKRotated(s1, s2, k) {
  if (s1.length !== s2.length) return false;
  for (let i = 1; i <= k; i++) {
    const rotated = s1.slice(i) + s1.slice(0, i);
    if (rotated === s2) return true;
  }
  return false;
}
```

**Пример:**  
`isKRotated("abcdef", "defabc", 3)` → `false`,  
`isKRotated("abcdef", "bcdefa", 1)` → `true`

---

### 🔸 **2. Найти минимальное количество поворотов для совпадения**

**Условие:**  
Верни минимальное число поворотов, чтобы `s1` стал равен `s2`, или `-1`, если это невозможно.

```js
function minRotations(s1, s2) {
  if (s1.length !== s2.length) return -1;
  for (let i = 0; i < s1.length; i++) {
    const rotated = s1.slice(i) + s1.slice(0, i);
    if (rotated === s2) return i;
  }
  return -1;
}
```

**Пример:**  
`minRotations("abcdef", "defabc")` → `3`

---

### 🔸 **3. Является ли одна строка поворотом другой с учётом ошибок**

**Условие:**  
Проверь, можно ли получить `s2` из `s1` поворотом и максимум одной заменой символа.

```js
function isRotatedOneMismatch(s1, s2) {
  if (s1.length !== s2.length) return false;
  const doubled = s1 + s1;
  for (let i = 0; i < s1.length; i++) {
    const rotated = doubled.slice(i, i + s1.length);
    let mismatches = 0;
    for (let j = 0; j < s1.length; j++) {
      if (rotated[j] !== s2[j]) mismatches++;
      if (mismatches > 1) break;
    }
    if (mismatches <= 1) return true;
  }
  return false;
}
```

**Пример:**  
`isRotatedOneMismatch("abcdef", "defabz")` → `true`

---

### 🔸 **4. Является ли строка поворотом палиндрома**

**Условие:**  
Проверь, является ли строка `s` повёрнутым вариантом какого-либо палиндрома.

```js
function isRotationOfPalindrome(s) {
  const doubled = s + s;
  for (let i = 0; i < s.length; i++) {
    const rotated = doubled.slice(i, i + s.length);
    if (rotated === [...rotated].reverse().join('')) return true;
  }
  return false;
}
```

**Пример:**  
`isRotationOfPalindrome("aab")` → `true` (т.к. "aba" — палиндром и "aab" — его поворот)

---

### 🔸 **5. Сравнение двух строк на поворот по словам**

**Условие:**  
Проверь, можно ли получить одну строку из другой, циклически поворачивая **слова**, а не символы.

```js
function isWordRotation(s1, s2) {
  const arr1 = s1.trim().split(/\s+/);
  const arr2 = s2.trim().split(/\s+/);
  if (arr1.length !== arr2.length) return false;
  const joined = arr1.concat(arr1).join(' ');
  return joined.includes(arr2.join(' '));
}
```

**Пример:**  
`isWordRotation("one two three", "three one two")` → `true`

Конечно! Вот ещё **5 продвинутых задач на тему поворота строки**, каждая с интересной логикой и решением на JavaScript.

---

### 🔹 **6. Является ли одна строка циклическим сдвигом другой (по символьным индексам)**

**Условие:**  
Проверь, можно ли получить `s2` из `s1`, сдвигая каждый символ вправо ровно на 1 (по модулю длины строки).

```js
function isOneStepRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  const rotated = s1[s1.length - 1] + s1.slice(0, s1.length - 1);
  return rotated === s2;
}
```

**Пример:**  
`isOneStepRotation("abcde", "eabcd")` → `true`

---

### 🔹 **7. Найти количество различных ротаций строки**

**Условие:**  
Посчитай, сколько уникальных ротаций строки существует.

```js
function countUniqueRotations(s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    set.add(rotated);
  }
  return set.size;
}
```

**Пример:**  
`countUniqueRotations("aaaa")` → `1`  
`countUniqueRotations("abcd")` → `4`

---

### 🔹 **8. Проверка ротации с "залипанием" символов**

**Условие:**  
Проверь, можно ли получить `s2` из `s1`, если при каждом повороте "залипает" один символ (удаляется).

```js
function isStickyRotation(s1, s2) {
  while (s1.length > 0) {
    s1 = s1.slice(1) + s1[0]; // rotate
    s1 = s1.slice(0, -1);     // drop last
    if (s1 === s2) return true;
  }
  return false;
}
```

**Пример:**  
`isStickyRotation("abcd", "cab")` → `true`  
(`abcd` → `bcda` → remove last → `bcd`, next: `cdb`, remove `b` → `cd`, …)

---

### 🔹 **9. Проверка "двойного" поворота**

**Условие:**  
Можно ли получить `s2` из `s1`, выполнив поворот **дважды** в любом направлении?

```js
function isDoubleRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  const len = s1.length;
  for (let i = 0; i < len; i++) {
    const first = s1.slice(i) + s1.slice(0, i);
    for (let j = 0; j < len; j++) {
      const second = first.slice(j) + first.slice(0, j);
      if (second === s2) return true;
    }
  }
  return false;
}
```

**Пример:**  
`isDoubleRotation("abcd", "cdab")` → `true` (`abcd` → `bcda` → `cdab`)

---

### 🔹 **10. Найти "наилучшую" ротацию по алфавиту**

**Условие:**  
Верни ротацию строки, которая будет лексикографически наименьшей.

```js
function bestRotationLex(s) {
  let best = s;
  for (let i = 1; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (rotated < best) best = rotated;
  }
  return best;
}
```

**Пример:**  
`bestRotationLex("bca")` → `"abc"`
