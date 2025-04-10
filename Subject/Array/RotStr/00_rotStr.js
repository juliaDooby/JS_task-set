
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
