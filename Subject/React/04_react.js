---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с формами:
---
4. 
⌛ Задача: Создать компонент формы, который обрабатывает введенные пользователем данные.
Ожидаемый результат: Компонент формы, который обрабатывает введенные данные и отправляет их на сервер или выполняет другие действия.
🎯 Для создания React-компонента формы, который обрабатывает введённые пользователем данные и отправляет их на сервер, выполните следующие шаги:
1. Создайте компонент формы:
   ```jsx
   import React, { useState } from 'react';

   function UserForm() {
     // Инициализация состояния для каждого поля формы
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');

     // Обработчик изменения значений полей
     const handleChange = (e) => {
       const { name, value } = e.target;
       if (name === 'name') setName(value);
       if (name === 'email') setEmail(value);
       if (name === 'message') setMessage(value);
     };

     // Обработчик отправки формы
     const handleSubmit = async (e) => {
       e.preventDefault();

       // Создание объекта с данными формы
       const formData = { name, email, message };

       try {
         // Отправка данных на сервер
         const response = await fetch('https://example.com/api/submit', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         });

         if (response.ok) {
           // Обработка успешного ответа
           console.log('Данные успешно отправлены');
         } else {
           // Обработка ошибок
           console.error('Ошибка при отправке данных');
         }
       } catch (error) {
         // Обработка ошибок сети
         console.error('Ошибка сети:', error);
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Имя:</label>
           <input
             type="text"
             id="name"
             name="name"
             value={name}
             onChange={handleChange}
             required
           />
         </div>
         <div>
           <label htmlFor="email">Электронная почта:</label>
           <input
             type="email"
             id="email"
             name="email"
             value={email}
             onChange={handleChange}
             required
           />
         </div>
         <div>
           <label htmlFor="message">Сообщение:</label>
           <textarea
             id="message"
             name="message"
             value={message}
             onChange={handleChange}
             required
           />
         </div>
         <button type="submit">Отправить</button>
       </form>
     );
   }

   export default UserForm;
   ```
Объяснение кода:
- Состояние: Используются хуки `useState` для хранения значений полей формы: имени, электронной почты и сообщения.
- Обработчик изменений: Функция `handleChange` обновляет соответствующее состояние при изменении значения в поле формы.
- Обработчик отправки: Функция `handleSubmit` предотвращает стандартное поведение формы, собирает данные и отправляет их на сервер с помощью `fetch`.
- Форма: Компонент возвращает JSX-разметку формы с полями для ввода имени, электронной почты и сообщения, а также кнопкой отправки.
Примечание: Убедитесь, что URL в `fetch` соответствует вашему серверному API.
Для более подробного изучения работы с формами в React, рекомендуется ознакомиться с [официальной документацией](https://ru.legacy.reactjs.org/docs/forms.html).
Также полезно посмотреть следующее видео, которое подробно объясняет создание простого инпута с React и отправку введённых данных:
---------------------------------------------------------------------------------------------  
