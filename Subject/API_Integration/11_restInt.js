---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
11. Интеграция с MongoDB (с помощью Mongoose)
⌛ Задача: Настройте MongoDB и Mongoose для взаимодействия с базой данных.
🎯 Решение:
```bash
npm install mongoose
```

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'John', age: 30 });
user.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error:', err));
```
Объяснение: Мы подключаем Mongoose к базе данных MongoDB и создаём модель для работы с коллекцией пользователей.
---------------------------------------------------------------------------------------------  
