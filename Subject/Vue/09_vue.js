---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
9. Использование слотов для создания гибких компонентов
⌛ Задача: Создайте компонент с пользовательскими слотами, чтобы добавить кастомное содержимое.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <BaseCard>
      <template v-slot:header>
        <h1>Custom Header</h1>
      </template>
      <p>This is the content of the card.</p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },
};
</script>
```

```vue
<!-- BaseCard.vue -->
<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
```
Объяснение:
- Используем именованные слоты для динамической вставки контента в компонент.
---------------------------------------------------------------------------------------------  
