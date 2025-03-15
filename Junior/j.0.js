---------------------------------------------------------------------------------------------
⋙ ❍ Как показать пользователю уведомление о том, что в его браузере не включен javascript ?
---
Чтобы показать пользователю уведомление о том, что в его браузере JavaScript отключен, вы можете использовать тег `<noscript>` в HTML для вывода сообщения, которое будет видно только в случае отключенного JavaScript. Вот пример:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уведомление о JavaScript</title>
    <style>
        .noscript-message {
            display: none; /* Скрываем по умолчанию */
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
    <script>
        // Скрываем сообщение, если JavaScript включен
        document.addEventListener('DOMContentLoaded', function() {
            var noscriptMessage = document.querySelector('.noscript-message');
            noscriptMessage.style.display = 'none';
        });
    </script>
</head>
<body>
    <!-- Сообщение для отключенного JavaScript -->
    <noscript class="noscript-message">
        <p>JavaScript отключен в вашем браузере. Для корректной работы этого сайта, вам необходимо включить JavaScript.</p>
    </noscript>

    <!-- Ваш контент здесь -->
    <h1>Добро пожаловать на сайт!</h1>
    <p>Здесь ваш контент.</p>
</body>
</html>
```
Этот код покажет уведомление в теге `<noscript>`, если JavaScript отключен в браузере пользователя. Когда JavaScript включен, это сообщение будет скрыто.
/Чтобы показать пользователю уведомление о том, что в его браузере не включен JavaScript, можно использовать тег `<noscript>` в HTML. Этот тег используется для предоставления контента, который будет отображаться только в случае, если JavaScript отключен или не поддерживается. Вот пример:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уведомление о JavaScript</title>
</head>
<body>
    <noscript>
        <div style="background-color: #f8d7da; color: #721c24; padding: 10px;">
            Для корректной работы этого сайта необходимо включить JavaScript в вашем браузере.
        </div>
    </noscript>
    <div id="app">
        <!-- Содержимое вашего приложения -->
    </div>
    <!-- Ваши скрипты JavaScript -->
</body>
</html>
```
Этот код покажет сообщение "Для корректной работы этого сайта необходимо включить JavaScript в вашем браузере", если JavaScript отключен или не поддерживается в браузере пользователя.
---------------------------------------------------------------------------------------------  
