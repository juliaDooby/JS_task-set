---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
2. Использование `computed` и `watch`
⌛ Задача: Создайте компонент, который отображает вычисляемое свойство и реагирует на изменения данных с помощью `watch`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>Reversed Message: {{ reversedMessage }}</p>
    <p>Message length: {{ messageLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    message(newValue) {
      console.log(`Message changed to: ${newValue}`);
    },
  },
};
</script>
```
Объяснение:
- `computed` используется для создания вычисляемых свойств, которые кэшируются.
- `watch` позволяет отслеживать изменения переменной и выполнять действия при изменении.
---------------------------------------------------------------------------------------------  
