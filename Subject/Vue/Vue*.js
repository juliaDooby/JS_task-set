---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
1. Реактивность данных в Vue 2 и Vue 3
⌛ Задача: Объясните, как работает реактивность в Vue и создайте компонент, который обновляет текст на основе изменения переменной.
🎯 Решение:
```vue
<!-- Vue 2 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
};
</script>
```

```vue
<!-- Vue 3 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 2 используется `data`, а в Vue 3 — `ref` для создания реактивных переменных.
- В обоих случаях используется `v-model` для двусторонней привязки данных.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
2. Использование `v-if` и `v-show`
⌛ Задача: Создайте компонент, который отображает сообщение на основе значения переменной, используя `v-if` и `v-show`.
🎯 Решение:
```vue
<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">This is a conditionally rendered message (v-if)</p>
    <p v-show="isVisible">This is a conditionally rendered message (v-show)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
```
Объяснение:
- `v-if` полностью удаляет элемент из DOM при условии, в то время как `v-show` лишь скрывает его с помощью CSS.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
3. Использование `computed` и `watch`
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
4. Использование `v-model` для двухсторонней привязки данных
⌛ Задача: Создайте компонент с двумя полями ввода, где одно обновляет значение другого через `v-model`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ firstName }} {{ lastName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
};
</script>
```
Объяснение:
- `v-model` позволяет синхронизировать данные между полями ввода и переменными.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
5. Создание компонента с пропсами и событиями
⌛ Задача: Создайте компонент, который принимает данные через пропс и отправляет событие обратно в родительский компонент.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" @updateMessage="handleUpdate" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
    };
  },
  methods: {
    handleUpdate(newMessage) {
      this.parentMessage = newMessage;
    },
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Parent Message</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    updateMessage() {
      this.$emit('updateMessage', 'Updated message from child!');
    },
  },
};
</script>
```
Объяснение:
- В родительском компоненте передаётся пропс `message` в дочерний.
- Дочерний компонент отправляет событие `updateMessage`, которое обрабатывается в родительском компоненте.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
6. Использование Composition API в Vue 3
⌛ Задача: Используйте Composition API для создания реактивных данных и методов.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 3 мы используем функцию `ref` для создания реактивных переменных.
- Функция `setup` — это место для инициализации всех реактивных данных и методов в компоненте.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
7. Использование `provide` и `inject` для передачи данных между компонентами
⌛ Задача: Используйте `provide` и `inject` для передачи данных от родительского компонента к дочерним.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    provide('message', 'Hello from Parent');
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return { message };
  },
};
</script>
```
Объяснение:
- `provide` используется в родительском компоненте для передачи данных.
- `inject` позволяет дочернему компоненту получить доступ к данным.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
8. Использование `watchEffect` для наблюдения за реактивными данными (Vue 3)
⌛ Задача: Создайте компонент, который будет отслеживать изменение данных и выполнять побочные эффекты.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="count" />
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log(`Count has changed to: ${count.value}`);
    });

    return { count };
  },
};
</script>
```
Объяснение:
- `watchEffect` автоматически отслеживает реактивные данные и выполняет побочные эффекты при их изменении.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
9. Динамическое добавление классов с `v-bind:class`
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
10. Использование слотов для создания гибких компонентов
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
11. Создание глобального фильтра в Vue 2 и Vue 3
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
12. Отправка формы с использованием `v-model`
⌛ Задача: Создайте форму для отправки данных, используя `v-model` для привязки данных.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Username" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.username, this.email);
    },
  },
};
</script>
```
Объяснение:
- Используем `v-model` для двусторонней привязки данных формы с переменными компонента.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
13. Асинхронные действия с `async`/`await` в Vue 3
⌛ Задача: Сделайте асинхронный запрос к API и отображайте данные.
🎯 Решение:
```vue
<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      data.value = await response.json();
      loading.value = false;
    });

    return { data, loading };
  },
};
</script>
```
Объяснение:
- Используется `async`/`await` для асинхронной загрузки данных в компонент Vue 3.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
14. Валидация данных в форме с использованием `v-model`
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
15. Использование `v-for` для отображения данных из массива
⌛ Задача: Отобразите список пользователей из массива с помощью `v-for`.
🎯 Решение:
```vue
<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Joe' },
      ],
    };
  },
};
</script>
```
Объяснение:
- `v-for` используется для итерации по массиву и вывода данных в шаблоне.
---------------------------------------------------------------------------------------------  
