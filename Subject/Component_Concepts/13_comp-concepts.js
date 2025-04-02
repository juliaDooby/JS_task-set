---------------------------------------------------------------------------------------------  
⋙ ❍ Концепции компонентов (функциональные и классовые компоненты):
---
13. Условный рендеринг в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который отображает кнопку, если состояние `isLoggedIn` истинно, иначе — сообщение о необходимости войти в систему.
Пример:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) :
🎯 Решение: Условный рендеринг в функциональном компоненте
Функциональный компонент будет рендерить кнопку "Log out", если пользователь авторизован (`isLoggedIn === true`), и сообщение "Please log in", если нет.
Решение кода:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <p>Please log in</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default LoginButton;
```
Объяснение кода:
1. Создаём состояние `isLoggedIn` с помощью `useState(false)`, изначально оно `false` (пользователь не вошёл).
2. Используем тернарный оператор (`? :`) для условного рендеринга:
   - Если `isLoggedIn === true`, показываем кнопку "Log out".
   - Если `isLoggedIn === false`, показываем текст "Please log in".
3. Добавляем кнопку для смены состояния:
   - При нажатии переключает `isLoggedIn` между `true` и `false`.
   - Изменяет текст кнопки между "Log in" и "Log out".
Как это работает?
- Пользователь не вошёл → показывается текст `"Please log in"` и кнопка `"Log in"`.
- Нажатие на `"Log in"` → `isLoggedIn` меняется на `true`, ререндер компонента.
- Теперь показывается → кнопка `"Log out"` и дополнительная кнопка `"Log out"`.
- Нажатие на `"Log out"` → снова меняет `isLoggedIn` на `false`, снова `"Please log in"`.
Вывод:
- Используется `useState()` для хранения состояния авторизации.
- Тернарный оператор (`? :`) управляет рендерингом элементов.
- Кнопка переключает состояние между `"Log in"` и `"Log out"`.
---------------------------------------------------------------------------------------------  
