---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
13. Валидация данных в форме с использованием `v-model`
⌛ Задача: Создайте форму с валидацией email.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Email" />
      <span v-if="!isValidEmail">Please enter a valid email.</span>
      <button type="submit" :disabled="!isValidEmail">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  computed: {
    isValidEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    submitForm() {
      console.log('Form submitted with email:', this.email);
    },
  },
};
</script>
```
Объяснение:
- Валидация email происходит с помощью регулярного выражения, и форма не отправляется, пока email не соответствует паттерну.
---------------------------------------------------------------------------------------------
