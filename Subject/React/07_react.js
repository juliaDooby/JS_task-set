---------------------------------------------------------------------------------------------  
⋙ ❍ Написать hook для загрузки данных:
---
7. 
⌛ Напиши React hook с названием useFetch, который получает на вход URL для загрузки и возвращает полученные данные. Для загрузки данных можно использовать любое API, даже собственно придуманное. Для простоты считаем, что по указанному адресу будет JSON, загружаем методом GET, никаких других методов, заголовков и типов данных не требуется. Импорты можно не писать.
Дополнительно даю такой "шаблон" решения задачи:
function useFetch(url) {
  // TODO
}

// usage
function Component({ url }) {
  ........ = useFetch(url);

  return <>
	...
  </>
}
Я намеренно не даю информации как именно надо вернуть данные, предлагаю кандидату самостоятельно спроектировать API этого hook'а.
🎯 Задачка "многослойная". Можно начать с простого решения:
function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData));
	}, []);

	return data;
}
Это необходимый минимум с которого надо начинать. Иногда даже это не удается получить. Соискатель пытается вернуть из hook Promise и "зарендерить" его в надежде на чудо, пытается обмазать результат хука async/await и т.д. Иногда вся логика загрузки оказывается в компоненте - тут я прошу все это инкапсулировать внутри hook.
Дальше нужно осознать, что в эффекте не хватает зависимости. Если url изменится, то запроса данных не произойдет.
function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		setData(null); // не забыть сбросить данные перед загрузкой
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData));
	}, [url]); // <-- не забыть зависимость

	return data;
}
На этом этапе можно остановиться, и попросить предложить варианты, как можно улучшить этот hook. Хочется что бы кандидат как минимум предложил обработать ошибку и вернуть статус загрузки
function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// не забыть все сбросить
		setIsLoading(true);
		setData(null);
		setError(null);
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData))
			.catch((e) => setError(e)) // не забыть поймать ошибку
			.finally(() => setIsLoading(false)); // не забыть сбросить статус загрузки
	}, [url]);

	return [data, isLoading, error];
}
Следующий уровень сложности - понять, что в этой реализации возможен race condition. Если мы последовательно запросим два URL, и так получится, что первый будет отвечать долго, а второй быстро, то мы получим сперва результат от второго адреса, а затем от первого. В итоге пользователь увидит устаревший результат. Далеко не все добираются до этого самостоятельно. Можно подсказать, предложить подумать, как будут развиваться события, если запросы будут отвечать за разное время, один быстрее, другой медленнее.
Решения могут быть через AbortController (в случае fetch или в случае использования axios), но достаточно реализовать самый простой способ - с помощью локальной переменной

function useFetch(url) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      // флаг отмены
      let cancelled = false;

      setIsLoading(true);
      setData(null);
      setError(null);
      fetch(url)
         .then((res) => res.json())
         .then((respData) => {
            if (!cancelled) setData(respData);
         })
         .catch((e) => {
            if (!cancelled) setError(e);
         })
         .finally(() => {
            if (!cancelled) setIsLoading(false);
         });

      return () => {
         // выставим признак того, что запрос отменен
         cancelled = true;
      };
   }, [url]);

   return [data, isLoading, error];
}

Вот готовый React hook useFetch, который можно использовать для загрузки данных по указанному URL. Он обрабатывает загрузку, ошибки и предотвращает race condition с помощью локальной переменной cancelled.
Вот такой вариант я считаю "идеальным" (обсудим в комментариях, что можно еще улучшить?).
Задачка позволяет проверить, как кандидат понимает устройство рендеринга React, как устроено хранение состояния, когда происходят перерисовки, как заставить компонент перерисоваться в ответ на асинхронное событие, как устроена "очистка (cleanup) эффекта", как работают сайд-эффекты.
---------------------------------------------------------------------------------------------
