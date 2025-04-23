---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
9. Интеграция с OAuth 2.0
⌛ Задача: Реализуйте аутентификацию через Google OAuth 2.0.
🎯 Решение:
1. Настройте OAuth 2.0 в консоли разработчика Google.
2. Используйте клиентскую библиотеку Google для аутентификации.
```html
<script src="https://apis.google.com/js/platform.js" async defer></script>

<button id="google-sign-in">Sign in with Google</button>

<script>
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
  }

  gapi.load('auth2', function() {
    gapi.auth2.init().then(function () {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.attachClickHandler('google-sign-in', {}, onSignIn);
    });
  });
</script>
```
Объяснение: В этом примере используется Google OAuth 2.0 для аутентификации через Google. После успешного входа пользовательские данные выводятся в консоль.
---------------------------------------------------------------------------------------------  
