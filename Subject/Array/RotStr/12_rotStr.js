---------------------------------------------------------------------------------------------  
⋙ ❍ Задача:  Проверка с помощью регулярных выражений (чисто ради фана)
---
Условие:
12. ⌛ Задача: Является ли одна строка поворотом другой с учётом ошибок.
Условие:  
Проверь, можно ли получить `s2` из `s1` поворотом и максимум одной заменой символа.
🎯 Решение:
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
Пример:  
`isRotatedOneMismatch("abcdef", "defabz")` → `true`
Объяснение: Используем регулярку — не самый практичный, но интересный способ.
---------------------------------------------------------------------------------------------  
