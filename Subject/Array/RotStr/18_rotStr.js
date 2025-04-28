---------------------------------------------------------------------------------------------  
⋙ ❍ Задача:  Проверка с помощью регулярных выражений (чисто ради фана)
---
Условие:
18. ⌛ Задача: Проверка "двойного" поворота.
Условие:
Можно ли получить `s2` из `s1`, выполнив поворот **дважды** в любом направлении?
🎯 Решение:
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
Пример:  
`isDoubleRotation("abcd", "cdab")` → `true` (`abcd` → `bcda` → `cdab`)
---------------------------------------------------------------------------------------------
