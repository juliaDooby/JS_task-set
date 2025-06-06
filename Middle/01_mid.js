---------------------------------------------------------------------------------------------
⋙ ❍ Что выведет консоль?
---
console.log(0.1 + 0.2 == 0.3)
1
console.log(0.1 + 0.2 == 0.3)
Оба вызова `console.log` вернут `false`.
Это происходит из-за особенностей представления чисел с плавающей точкой в JavaScript. Внутренне, числа с плавающей точкой представлены в двоичном виде, и иногда точность при вычислениях может теряться из-за ограничений в точности представления.
В данном случае, когда вы складываете `0.1` и `0.2`, результат не будет идентичен `0.3` из-за потери точности при представлении чисел с плавающей точкой.
---------------------------------------------------------------------------------------------
