---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
8. Динамическое добавление классов с `v-bind:class`
⌛ Задача: Используйте директиву `v-bind:class` для динамического добавления классов в элемент.
🎯 Решение:
```vue
<template>
  <div>
    <button :class="buttonClass" @click="toggleClass">Toggle Class</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonClass() {
      return {
        active: this.isActive,
        'inactive': !this.isActive,
      };
    },
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
```
Объяснение:
- Мы динамически добавляем классы в зависимости от значения `isActive`.
--------------------------------------------------------------------------------------------- 
