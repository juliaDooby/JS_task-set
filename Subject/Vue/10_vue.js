---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
10. Создание глобального фильтра в Vue 2 и Vue 3
⌛ Задача: Создайте глобальный фильтр для форматирования даты.
🎯 Решение:
```javascript
// Vue 2
Vue.filter('formatDate', function (value) {
  return new Date(value).toLocaleDateString();
});
```

```vue
<!-- В шаблоне -->
<p>{{ date | formatDate }}</p>
```

```javascript
// Vue 3
import { createApp } from 'vue';
const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate(value) {
    return new Date(value).toLocaleDateString();
  },
};

app.mount('#app');
```
Объяснение:
- В Vue 2 фильтры создаются через `Vue.filter`, а в Vue 3 фильтры можно создавать через глобальные свойства `app.config.globalProperties`.
---------------------------------------------------------------------------------------------  
