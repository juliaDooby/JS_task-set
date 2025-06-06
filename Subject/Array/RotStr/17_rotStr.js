---------------------------------------------------------------------------------------------  
⋙ ❍ Задача:  Проверка с помощью регулярных выражений (чисто ради фана)
---
Условие:
17. ⌛ Задача: Проверка ротации с "залипанием" символов.
Условие:
Проверь, можно ли получить `s2` из `s1`, если при каждом повороте "залипает" один символ (удаляется).
🎯 Решение:
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
Пример:  
`isStickyRotation("abcd", "cab")` → `true`  
(`abcd` → `bcda` → remove last → `bcd`, next: `cdb`, remove `b` → `cd`, …)
--------------------------------------------------------------------------------------------- 
