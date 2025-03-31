document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');

    const info = document.querySelector('.main__info');
    const test = document.querySelector('.main__test');


    btn1.addEventListener("click", function() {
        test.classList.add('dn');
        info.classList.remove('dn');
        btn1.classList.add('btn__active');
        btn2.classList.remove('btn__active');
        console.log("asdasd")
        });
        
    btn2.addEventListener("click", function() {
        info.classList.add('dn');
        test.classList.remove('dn');
        btn2.classList.add('btn__active');
        btn1.classList.remove('btn__active');
        });

        let testInitialized = false;
        btn2.addEventListener("click", function() {
            if (!testInitialized) {
                initTest();
                testInitialized = true;

            }
        });
});


(function() {
    // Данные теста
const testData = [
    // Вопрос 1
{
    question: "Что тебе больше нравится делать?",
    options: [
        { text: "Разбираться, почему бизнес теряет деньги, и предлагать решения", profession: "BI-архитектор" },
        { text: "Настраивать сервера и чинить компьютерные проблемы", profession: "Системный администратор" },
        { text: "Писать код для сайтов или приложений", profession: "Разработчик" },
        { text: "Искать закономерности в больших данных", profession: "Data Scientist" }
    ],
    multiple: true
},

// Вопрос 2
{
    question: "Какой у тебя подход к работе?",
    options: [
        { text: "\"Мне важно видеть, как мои решения помогают бизнесу\"", profession: "Бизнес-информатик" },
        { text: "\"Люблю, когда всё работает как часы\"", profession: "Системный инженер" },
        { text: "\"Обожаю создавать что-то новое с нуля\"", profession: "Программист" },
        { text: "\"Нравится разгадывать сложные головоломки\"", profession: "Инженер-математик" }
    ],
    multiple: true
},

// Вопрос 3
{
    question: "Что бы ты выбрал?",
    options: [
        { text: "Оптимизировать работу интернет-магазина", profession: "BI-архитектор" },
        { text: "Защищать компанию от хакеров", profession: "IT-аудитор" },
        { text: "Разрабатывать мобильное приложение", profession: "Разработчик" },
        { text: "Настраивать автоматические тесты для программы", profession: "Тестировщик" }
    ],
    multiple: true
},

// Вопрос 4
{
    question: "Какой инструмент тебе интереснее?",
    options: [
        { text: "Excel и системы отчётности", profession: "BI-архитектор" },
        { text: "Программы для взлома и защиты", profession: "IT-аудитор" },
        { text: "Фреймворки для создания сайтов", profession: "Веб-разработчик" },
        { text: "Инструменты для анализа данных", profession: "Data Scientist" }
    ],
    multiple: true
},

// Вопрос 5
{
    question: "Что тебе ближе?",
    options: [
        { text: "Объяснять людям, как работать с программами", profession: "Цифровой куратор" },
        { text: "Настраивать компьютерную сеть в офисе", profession: "Системный администратор" },
        { text: "Придумывать дизайн для приложения", profession: "UX/UI дизайнер" },
        { text: "Писать инструкции к программам", profession: "Технический писатель" }
    ],
    multiple: true
},

// Вопрос 6
{
    question: "Какой рабочий процесс тебе подходит?",
    options: [
        { text: "Встречи, анализ, презентации", profession: "Бизнес-информатик" },
        { text: "Быстрое решение технических проблем", profession: "Системный администратор" },
        { text: "Долгая работа над одним проектом", profession: "Программист" },
        { text: "Эксперименты с разными подходами", profession: "Data Scientist" }
    ],
    multiple: true
},

// Вопрос 7
{
    question: "Какую задачу ты бы выбрал?",
    options: [
        { text: "Настроить систему учёта товаров на складе", profession: "Специалист по информационным системам" },
        { text: "Проверить безопасность банковского приложения", profession: "IT-аудитор" },
        { text: "Сделать интернет-магазин удобнее для покупателей", profession: "UX/UI дизайнер" },
        { text: "Написать код для обработки фотографий", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 8
{
    question: "Что тебе интереснее изучать?",
    options: [
        { text: "Как компании используют данные", profession: "BI-архитектор" },
        { text: "Как работают компьютерные сети", profession: "Системный инженер" },
        { text: "Новые языки программирования", profession: "Программист" },
        { text: "Математические модели", profession: "Инженер-математик" }
    ],
    multiple: true
},

// Вопрос 9
{
    question: "Какой отдел тебе ближе?",
    options: [
        { text: "Отдел аналитики", profession: "BI-архитектор" },
        { text: "Техническая поддержка", profession: "Системный администратор" },
        { text: "Отдел разработки", profession: "Программист" },
        { text: "Исследовательская лаборатория", profession: "Data Scientist" }
    ],
    multiple: true
},

// Вопрос 10
{
    question: "Что тебе больше нравится?",
    options: [
        { text: "Работать с бизнес-руководством", profession: "IT-директор" },
        { text: "Чинить неработающие компьютеры", profession: "Оператор ЭВМ" },
        { text: "Придумывать новые функции для приложений", profession: "Программист" },
        { text: "Анализировать поведение пользователей", profession: "Веб-аналитик" }
    ],
    multiple: true
},

// Вопрос 11
{
    question: "Ты заметил, что интернет-магазин теряет клиентов на этапе оплаты. Что будешь делать?",
    options: [
        { text: "Разберу данные: сколько пользователей уходит, на каком шаге", profession: "Веб-аналитик" },
        { text: "Проверю, не тормозит ли сайт из-за серверов", profession: "DevOps-инженер" },
        { text: "Предложу новый дизайн кнопки оплаты", profession: "UX/UI дизайнер" },
        { text: "Напишу скрипт для автоматической проверки ошибок", profession: "Тестировщик" }
    ],
    multiple: true
},

// Вопрос 12
{
    question: "Тебе дали огромную таблицу с продажами за год. Что с ней сделаешь?",
    options: [
        { text: "Найду закономерности: какие товары популярны, когда спады", profession: "BI-архитектор" },
        { text: "Построю прогноз на следующий год с помощью ИИ", profession: "Data Scientist" },
        { text: "Оптимизирую базу данных, чтобы она быстрее работала", profession: "Инженер данных" },
        { text: "Создам красивый график для отчёта", profession: "Технический писатель" }
    ],
    multiple: true
},

// Вопрос 13
{
    question: "Какой проект тебя заинтересует?",
    options: [
        { text: "Предсказание курса доллара на основе новостей", profession: "Data Scientist" },
        { text: "Автоматизация отчётов для отдела продаж", profession: "Бизнес-информатик" },
        { text: "Настройка облачного хранилища для фото пользователей", profession: "Инженер данных" },
        { text: "Анализ, почему люди закрывают сайт за 3 секунды", profession: "Веб-аналитик" }
    ],
    multiple: true
},

// Вопрос 14
{
    question: "Ты увидел приложение с ужасным дизайном. Твои действия?",
    options: [
        { text: "Перерисую интерфейс, чтобы всё было интуитивно", profession: "UX/UI дизайнер" },
        { text: "Проверю, нет ли багов в коде", profession: "Тестировщик" },
        { text: "Напишу свою версию с чистого листа", profession: "Программист" },
        { text: "Предложу владельцу услуги по продвижению", profession: "SEO-специалист" }
    ],
    multiple: true
},

// Вопрос 15
{
    question: "Какой код тебе интереснее писать?",
    options: [
        { text: "Скрипт для автоматической загрузки данных", profession: "Инженер данных" },
        { text: "Игру про космические корабли", profession: "Разработчик" },
        { text: "Алгоритм для распознавания лиц", profession: "Data Scientist" },
        { text: "Программу для управления умным домом", profession: "Системный программист" }
    ],
    multiple: true
},

// Вопрос 16
{
    question: "Что важнее в твоей работе?",
    options: [
        { text: "Красивый и удобный интерфейс", profession: "UX/UI дизайнер" },
        { text: "Быстродействие программы", profession: "Системный программист" },
        { text: "Чистота и понятность кода", profession: "Программист" },
        { text: "Чтобы всё работало без сбоев", profession: "Тестировщик" }
    ],
    multiple: true
},

// Вопрос 17
{
    question: "Сервер компании упал в час пик. Твоя реакция?",
    options: [
        { text: "Срочно ищу причину и возвращаю его в работу", profession: "Системный администратор" },
        { text: "Проверю логи, чтобы предотвратить такое в будущем", profession: "DevOps-инженер" },
        { text: "Докажу руководству, что нужно больше серверов", profession: "IT-директор" },
        { text: "Напишу инструкцию на случай аварии", profession: "Технический писатель" }
    ],
    multiple: true
},

// Вопрос 18
{
    question: "Как ты относишься к безопасности данных?",
    options: [
        { text: "\"Это основа всего! Проверяю каждую уязвимость\"", profession: "IT-аудитор" },
        { text: "\"Настрою автоматические резервные копии\"", profession: "Системный инженер" },
        { text: "\"Объясню сотрудникам, как не попасться на уловки хакеров\"", profession: "Цифровой куратор" },
        { text: "\"Зашифрую всё, чтобы даже я не мог прочитать\"", profession: "Кибернетик" }
    ],
    multiple: true
},

// Вопрос 19
{
    question: "Что тебе интереснее настраивать?",
    options: [
        { text: "Локальную сеть в офисе", profession: "Системный администратор" },
        { text: "Виртуальные серверы в облаке", profession: "DevOps-инженер" },
        { text: "Систему видеонаблюдения с ИИ", profession: "Кибернетик" },
        { text: "Автоматические тесты для программы", profession: "Тестировщик" }
    ],
    multiple: true
},

// Вопрос 20
{
    question: "Тебе нужно объяснить сложную техническую вещь новичку. Как?",
    options: [
        { text: "Нарисую схему и приведу примеры", profession: "Технический писатель" },
        { text: "Покажу на практике, как это работает", profession: "Цифровой куратор" },
        { text: "Разобью на простые шаги и запишу видео", profession: "UX/UI дизайнер" },
        { text: "Дам ссылку на документацию", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 21
{
    question: "Как ты организуешь работу команды?",
    options: [
        { text: "Распределю задачи по силам каждого", profession: "Тимлид" },
        { text: "Настрою автоматические уведомления о дедлайнах", profession: "DevOps-инженер" },
        { text: "Проведу мозговой штурм, чтобы все предложили идеи", profession: "IT-директор" },
        { text: "Напишу подробный план с этапами", profession: "Системный аналитик" }
    ],
    multiple: true
},

// Вопрос 22
{
    question: "Кем ты видишь себя через 5 лет?",
    options: [
        { text: "Руководителем IT-отдела", profession: "IT-директор" },
        { text: "Экспертом в узкой области (например, в ИИ или кибербезопасности)", profession: "Эксперт" },
        { text: "Разработчиком собственного стартапа", profession: "Программист" },
        { text: "Консультантом для разных компаний", profession: "Бизнес-информатик" }
    ],
    multiple: true
},

// Вопрос 23
{
    question: "В кафе жалуются, что Wi-Fi постоянно отключается. Как будешь решать?",
    options: [
        { text: "Проверю роутер и настройки сети", profession: "Системный администратор" },
        { text: "Предложу установить Mesh-систему для покрытия", profession: "Системный инженер" },
        { text: "Разработаю систему авторизации для гостей", profession: "Веб-разработчик" },
        { text: "Напишу инструкцию для персонала по перезагрузке", profession: "Технический писатель" }
    ],
    multiple: true
},

// Вопрос 24
{
    question: "Сайт компании плохо отображается на телефонах. Что делать?",
    options: [
        { text: "Оптимизирую вёрстку для мобильных", profession: "Веб-разработчик" },
        { text: "Проверю, как сайт грузится на разных устройствах", profession: "Тестировщик" },
        { text: "Предложу новый адаптивный дизайн", profession: "UX/UI дизайнер" },
        { text: "Проанализирую, сколько клиентов теряется из-за этого", profession: "Веб-аналитик" }
    ],
    multiple: true
},

// Вопрос 25
{
    question: "В бухгалтерии постоянно теряются данные в Excel. Как помочь?",
    options: [
        { text: "Внедрю специализированную программу 1С", profession: "Бизнес-информатик" },
        { text: "Настрою автоматическое резервное копирование", profession: "Системный администратор" },
        { text: "Проведу обучение для сотрудников", profession: "Цифровой куратор" },
        { text: "Разработаю простую базу данных", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 26
{
    question: "Приложение тормозит при оплате. В чём может быть причина?",
    options: [
        { text: "Плохо оптимизирован код", profession: "Программист" },
        { text: "Сервер не справляется с нагрузкой", profession: "DevOps-инженер" },
        { text: "Сложная анимация интерфейса", profession: "UX/UI дизайнер" },
        { text: "Уязвимости в платёжном модуле", profession: "IT-аудитор" }
    ],
    multiple: true
},

// Вопрос 27
{
    question: "Как увеличить продажи через сайт?",
    options: [
        { text: "Проанализирую поведение покупателей", profession: "Веб-аналитик" },
        { text: "Улучшу дизайн карточек товаров", profession: "UX/UI дизайнер" },
        { text: "Оптимизирую сайт для поисковиков", profession: "SEO-специалист" },
        { text: "Автоматизирую систему скидок", profession: "Бизнес-информатик" }
    ],
    multiple: true
},

// Вопрос 28
{
    question: "Какой график работы тебе подходит?",
    options: [
        { text: "Чёткий с 9 до 6 в офисе", profession: "Системный администратор" },
        { text: "Гибкий с возможностью удалёнки", profession: "Программист" },
        { text: "Проектная работа с авралами", profession: "DevOps-инженер" },
        { text: "Свободный, но с дедлайнами", profession: "UX/UI дизайнер" }
    ],
    multiple: true
},

// Вопрос 29
{
    question: "Что важнее в работе?",
    options: [
        { text: "Стабильность и чёткие задачи", profession: "Оператор ЭВМ" },
        { text: "Возможность постоянно учиться новому", profession: "Data Scientist" },
        { text: "Видимый результат своих трудов", profession: "Веб-разработчик" },
        { text: "Высокая зарплата даже при стрессе", profession: "IT-директор" }
    ],
    multiple: true
},

// Вопрос 30
{
    question: "Как ты относишься к рутине?",
    options: [
        { text: "\"Нормально, если процесс отлажен\"", profession: "Техник-программист" },
        { text: "\"Стараюсь автоматизировать всё, что можно\"", profession: "DevOps-инженер" },
        { text: "\"Быстро начинаю скучать\"", profession: "Кибернетик" },
        { text: "\"Люблю, когда есть и рутина, и творческие задачи\"", profession: "UX/UI дизайнер" }
    ],
    multiple: true
},

// Вопрос 31
{
    question: "Какой навык тебе легче даётся?",
    options: [
        { text: "Находить ошибки в чужом коде", profession: "Тестировщик" },
        { text: "Объяснять сложное простыми словами", profession: "Технический писатель" },
        { text: "Быстро осваивать новые технологии", profession: "Программист" },
        { text: "Видеть картину целиком", profession: "Системный архитектор" }
    ],
    multiple: true
},

// Вопрос 32
{
    question: "Что тебе интереснее читать?",
    options: [
        { text: "Техническую документацию", profession: "Системный программист" },
        { text: "Аналитические отчёты", profession: "BI-архитектор" },
        { text: "Гайды по дизайну", profession: "UX/UI дизайнер" },
        { text: "Новости о кибербезопасности", profession: "IT-аудитор" }
    ],
    multiple: true
},

// Вопрос 33
{
    question: "Какой софт тебе нравится?",
    options: [
        { text: "Инструменты для анализа данных", profession: "Data Scientist" },
        { text: "Среды разработки", profession: "Программист" },
        { text: "Графические редакторы", profession: "UX/UI дизайнер" },
        { text: "Системы мониторинга", profession: "DevOps-инженер" }
    ],
    multiple: true
},

// Вопрос 34
{
    question: "Кем ты видишь себя через 3 года?",
    options: [
        { text: "Специалистом в конкретной технологии", profession: "Системный программист" },
        { text: "Руководителем команды", profession: "Тимлид" },
        { text: "Фрилансером с несколькими проектами", profession: "Веб-разработчик" },
        { text: "Архитектором сложных систем", profession: "Системный архитектор" }
    ],
    multiple: true
},

// Вопрос 35
{
    question: "Что для тебя важнее в карьере?",
    options: [
        { text: "Возможность работать из любой точки мира", profession: "Программист" },
        { text: "Социальный пакет и стабильность", profession: "Оператор ЭВМ" },
        { text: "Участие в инновационных проектах", profession: "Кибернетик" },
        { text: "Быстрый карьерный рост", profession: "IT-директор" }
    ],
    multiple: true
},

// Вопрос 36
{
    question: "Бабушка просит помочь настроить интернет на телефоне. Твои действия?",
    options: [
        { text: "Объясню по шагам и запишу инструкцию", profession: "Технический писатель" },
        { text: "Настрою удалённый доступ, чтобы помогать на расстоянии", profession: "DevOps-инженер" },
        { text: "Покажу, как пользоваться приложением", profession: "Цифровой куратор" },
        { text: "Проверю, нет ли проблем с роутером", profession: "Системный администратор" }
    ],
    multiple: true
},

// Вопрос 37
{
    question: "В офисе все постоянно забывают пароли. Как решить проблему?",
    options: [
        { text: "Внедрю систему единого входа (SSO)", profession: "Системный инженер" },
        { text: "Напишу понятную инструкцию по восстановлению пароля", profession: "Технический писатель" },
        { text: "Проведу тренинг по безопасности", profession: "IT-аудитор" },
        { text: "Настрою менеджер паролей для всех сотрудников", profession: "Бизнес-информатик" }
    ],
    multiple: true
},

// Вопрос 38
{
    question: "Компания переходит на удалёнку. Что нужно сделать в первую очередь?",
    options: [
        { text: "Настроить VPN и облачные сервисы", profession: "DevOps-инженер" },
        { text: "Проверить безопасность подключений", profession: "IT-аудитор" },
        { text: "Создать гайд по работе из дома", profession: "Технический писатель" },
        { text: "Обеспечить всех сотрудников техподдержкой", profession: "Системный администратор" }
    ],
    multiple: true
},

// Вопрос 39
{
    question: "Коллега прислал таблицу, которая \"глючит\". Твои действия?",
    options: [
        { text: "Проверю данные на ошибки и починю формулы", profession: "BI-архитектор" },
        { text: "Перенесу всё в базу данных", profession: "Инженер данных" },
        { text: "Предложу перейти на специализированное ПО", profession: "Бизнес-информатик" },
        { text: "Напишу скрипт для автоматической проверки", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 40
{
    question: "На сайте компании появились \"левые\" посетители. Что делать?",
    options: [
        { text: "Проанализирую их поведение", profession: "Веб-аналитик" },
        { text: "Усилю защиту от ботов", profession: "IT-аудитор" },
        { text: "Оптимизирую сайт, чтобы отсеять ненужный трафик", profession: "SEO-специалист" },
        { text: "Настрою фильтрацию запросов на сервере", profession: "Системный инженер" }
    ],
    multiple: true
},

// Вопрос 41
{
    question: "Как ты обычно решаешь сложные проблемы?",
    options: [
        { text: "Разбиваю на части и анализирую данные", profession: "Data Scientist" },
        { text: "Советуюсь с коллегами и ищу нестандартные решения", profession: "Кибернетик" },
        { text: "Составляю чёткий план действий", profession: "Системный аналитик" },
        { text: "Пробую разные варианты, пока не сработает", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 42
{
    question: "Как ты ведёшь себя в конфликте?",
    options: [
        { text: "Анализирую причины и предлагаю решения", profession: "Бизнес-информатик" },
        { text: "Организую встречу, чтобы обсудить проблему", profession: "Тимлид" },
        { text: "Ползу к исходникам, чтобы найти баг", profession: "Тестировщик" },
        { text: "Предлагаю техническое решение, которое всех устроит", profession: "Системный архитектор" }
    ],
    multiple: true
},

// Вопрос 43
{
    question: "Что для тебя самое сложное в работе?",
    options: [
        { text: "Объяснять нетехническим людям технические вещи", profession: "Технический писатель" },
        { text: "Работать с устаревшими системами", profession: "Системный программист" },
        { text: "Ждать, пока другие сделают свою часть", profession: "Веб-разработчик" },
        { text: "Принимать решения, которые всем не понравятся", profession: "IT-директор" }
    ],
    multiple: true
},

// Вопрос 44
{
    question: "Ты обнаружил, что коллега использует слабый пароль \"123456\". Как поступишь?",
    options: [
        { text: "Вежливо объясню риски и помогу придумать надёжный", profession: "Цифровой куратор" },
        { text: "Должу начальнику отдела безопасности", profession: "IT-аудитор" },
        { text: "Настрою систему принудительной смены пароля", profession: "Системный администратор" },
        { text: "Напишу скрипт для проверки сложности паролей", profession: "Программист" }
    ],
    multiple: true
},

// Вопрос 45
{
    question: "Начальник хочет \"как у конкурентов\", но их система не подходит компании. Твои действия?",
    options: [
        { text: "Проведу анализ и предложу лучшее решение", profession: "Системный аналитик" },
        { text: "Создам прототип, чтобы показать плюсы и минусы", profession: "UX/UI дизайнер" },
        { text: "Объясню технические ограничения", profession: "Системный архитектор" },
        { text: "Предложу компромиссный вариант", profession: "Тимлид" }
    ],
    multiple: true
},

// Вопрос 46
{
    question: "Ребёнок спрашивает, как работает интернет. Как объяснишь?",
    options: [
        { text: "Нарисую схему сети с серверами и кабелями", profession: "Системный инженер" },
        { text: "Расскажу про алгоритмы передачи данных", profession: "Кибернетик" },
        { text: "Покажу на примере онлайн-игры", profession: "Программист" },
        { text: "Сравню с почтой, где данные --- это письма", profession: "Технический писатель" }
    ],
    multiple: true
},

// Вопрос 47
{
    question: "За что тебя чаще всего благодарят?",
    options: [
        { text: "\"Ты спас нам кучу времени!\"", profession: "Автоматизатор / DevOps" },
        { text: "\"Ты нашёл то, что никто не видел!\"", profession: "Аналитик / Data Scientist" },
        { text: "\"Ты сделал сложное простым!\"", profession: "UX-дизайнер / Технический писатель" },
        { text: "\"Ты починил то, что казалось сломанным навсегда!\"", profession: "Системный администратор" }
    ],
    multiple: true
},

// Вопрос 48
{
    question: "Какой комплимент для тебя важнее?",
    options: [
        { text: "\"Твой анализ изменил нашу стратегию\"", profession: "BI-архитектор" },
        { text: "\"Твой код работает идеально\"", profession: "Программист" },
        { text: "\"Твой дизайн --- это удобно и красиво\"", profession: "UX/UI дизайнер" },
        { text: "\"Без тебя мы бы не справились\"", profession: "Системный администратор" }
    ],
    multiple: true
},

// Вопрос 49
{
    question: "Что ты хочешь услышать в конце проекта?",
    options: [
        { text: "\"Мы заработали на этом X рублей\"", profession: "Бизнес-информатик" },
        { text: "\"Система выдержала миллион пользователей\"", profession: "DevOps" },
        { text: "\"Код получился чистым и масштабируемым\"", profession: "Программист" },
        { text: "\"Пользователи в восторге\"", profession: "UX-дизайнер" }
    ],
    multiple: true
},

// Вопрос 50
{
    question: "За что ты любишь IT?",
    options: [
        { text: "За то, что технологии решают реальные проблемы", profession: "Бизнес-информатик" },
        { text: "За возможность создавать что-то с нуля", profession: "Разработчик" },
        { text: "За постоянные вызовы и новые задачи", profession: "Data Scientist" },
        { text: "За то, что я поддерживаю работу всего этого мира", profession: "Системный администратор" }
    ],
    multiple: true
}
];

// Полный список профессий (28 штук)
const allProfessions = [
    "BI-архитектор", "Системный администратор", "Разработчик", "Data Scientist",
    "Бизнес-информатик", "Системный инженер", "Программист", "Инженер-математик",
    "IT-аудитор", "Тестировщик", "Веб-разработчик", "Цифровой куратор",
    "UX/UI дизайнер", "Технический писатель", "Специалист по информационным системам",
    "Инженер данных", "IT-директор", "Оператор ЭВМ", "Веб-аналитик",
    "DevOps-инженер", "SEO-специалист", "Системный программист",
    "Системный аналитик", "Тимлид", "Системный архитектор", "Кибернетик",
    "Автоматизатор", "UX-дизайнер"
];

// Переменные состояния
let currentQuestionSet = 0;
let answers = Array(testData.length).fill(null).map(() => []);
let professionScores = {};

// Инициализация счетчиков профессий
allProfessions.forEach(prof => {
    professionScores[prof] = 0;
});

// DOM элементы
const questionContainer = document.getElementById('questionContainer');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('resultContainer');
const mainResult = document.getElementById('mainResult');
const topProfession = document.getElementById('topProfession');
const otherResults = document.getElementById('otherResults');
const restartBtn = document.getElementById('restartBtn');

// Загрузка сохраненных ответов
function loadAnswers() {
    const savedAnswers = localStorage.getItem('itProfessionTestAnswers');
    if (savedAnswers) {
        answers = JSON.parse(savedAnswers);
        
        // Пересчитываем баллы профессий
        allProfessions.forEach(prof => {
            professionScores[prof] = 0;
        });
        
        answers.forEach((answerIndices, questionIndex) => {
            answerIndices.forEach(answerIdx => {
                if (answerIdx !== -1) {
                    const profession = testData[questionIndex].options[answerIdx].profession;
                    professionScores[profession]++;
                }
            });
        });
    }
}

// Сохранение ответов
function saveAnswers() {
    localStorage.setItem('itProfessionTestAnswers', JSON.stringify(answers));
}

// Предупреждение при перезагрузке
function setupBeforeUnload() {
    window.addEventListener('beforeunload', function(e) {
        const answeredCount = answers.filter(a => a.length > 0).length;
        if (answeredCount > 0 && answeredCount < testData.length) {
            e.preventDefault();
            e.returnValue = 'У вас есть несохраненные ответы. Вы уверены, что хотите уйти?';
            return e.returnValue;
        }
    });
}

// Инициализация теста
function initTest() {
    loadAnswers();
    setupBeforeUnload();
    displayQuestionSet(currentQuestionSet);
    updateProgress();
}

// Отображение набора вопросов
function displayQuestionSet(setIndex) {
    questionContainer.innerHTML = '';
    
    const startIndex = setIndex * 10;
    const endIndex = Math.min(startIndex + 10, testData.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const question = testData[i];
        const questionElement = document.createElement('div');
        questionElement.className = `question ${i === startIndex ? 'active' : ''}`;
        questionElement.dataset.index = i;
        
        let optionsHTML = question.options.map((option, optIndex) => `
            <div class="option ${answers[i].includes(optIndex) ? 'selected' : ''}" data-index="${optIndex}">
                ${option.text}
            </div>
        `).join('');
        
        optionsHTML += `
            <div class="nothing-option ${answers[i].includes(-1) ? 'selected' : ''}" data-index="-1">
                Ничего не подходит
            </div>
        `;
        
        questionElement.innerHTML = `
            <div class="question-text">${i + 1}. ${question.question}</div>
            <div class="answer-options">
                ${optionsHTML}
            </div>
        `;
        
        questionContainer.appendChild(questionElement);
    }
    
    // Добавляем обработчики событий для вариантов ответа
    document.querySelectorAll('.option, .nothing-option').forEach(option => {
        option.addEventListener('click', function() {
            const questionIndex = parseInt(this.closest('.question').dataset.index);
            const optionIndex = parseInt(this.dataset.index);
            const question = testData[questionIndex];
            
            // Если выбран "Ничего не подходит", снимаем все другие выборы
            if (optionIndex === -1) {
                answers[questionIndex] = [-1];
                this.closest('.answer-options').querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
            } else {
                // Если вопрос допускает множественный выбор
                if (question.multiple) {
                    // Если уже выбран "Ничего не подходит", снимаем этот выбор
                    if (answers[questionIndex].includes(-1)) {
                        answers[questionIndex] = answers[questionIndex].filter(idx => idx !== -1);
                        this.closest('.answer-options').querySelector('.nothing-option').classList.remove('selected');
                    }
                    
                    // Добавляем или удаляем выбранный вариант
                    const optionIdx = answers[questionIndex].indexOf(optionIndex);
                    if (optionIdx === -1) {
                        answers[questionIndex].push(optionIndex);
                    } else {
                        answers[questionIndex].splice(optionIdx, 1);
                    }
                } else {
                    // Если только один выбор разрешен
                    answers[questionIndex] = [optionIndex];
                    this.closest('.answer-options').querySelectorAll('.option, .nothing-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                }
            }
            
            // Обновляем визуальное выделение
            this.classList.toggle('selected', answers[questionIndex].includes(optionIndex));
            
            // Обновляем счетчики профессий
            updateProfessionScores(questionIndex);
            
            // Сохраняем ответы
            saveAnswers();
            
            // Обновляем прогресс
            updateProgress();
        });
    });
}

// Обновление счетчиков профессий
function updateProfessionScores(questionIndex) {
    // Сначала сбрасываем счетчики для этого вопроса
    testData[questionIndex].options.forEach((option, optIndex) => {
        if (answers[questionIndex].includes(optIndex)) {
            professionScores[option.profession]--;
        }
    });
    
    // Затем добавляем новые баллы
    answers[questionIndex].forEach(answerIdx => {
        if (answerIdx !== -1) {
            const profession = testData[questionIndex].options[answerIdx].profession;
            professionScores[profession]++;
        }
    });
}

// Обновление прогресс-бара
function updateProgress() {
    const answeredCount = answers.filter(a => a.length > 0).length;
    const progressPercent = (answeredCount / testData.length) * 100;
    
    progressBar.style.setProperty('--progress', `${progressPercent}%`);
    progressText.textContent = `${answeredCount}/${testData.length}`;
    
    // Активируем/деактивируем кнопки
    prevBtn.disabled = currentQuestionSet === 0;
    nextBtn.disabled = answeredCount < (currentQuestionSet + 1) * 10 || answeredCount === 0;
    
    // Если ответили на все вопросы, меняем текст кнопки "Далее"
    if (answeredCount === testData.length) {
        nextBtn.textContent = 'Узнать результат';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Далее';
    }
}

// Показ результатов
function showResults() {
    // Проверяем, сколько раз был выбран "Ничего не подходит"
    const nothingSelectedCount = answers.filter(a => a.includes(-1)).length;
    
    // Если в 90% или более вопросов выбрано "Ничего не подходит"
    if (nothingSelectedCount >= testData.length * 0.9) {
        mainResult.innerHTML = `
            <h2>По результатам теста</h2>
            <p>Вы выбрали "Ничего не подходит" в большинстве вопросов.</p>
            <p>Возможно, IT-сфера не совсем соответствует вашим интересам, или вам стоит рассмотреть смежные области.</p>
            <p>Рекомендуем обратить внимание на другие профессии или сферы деятельности.</p>
        `;
        otherResults.innerHTML = "";
    } else {
        // Создаем временный объект для подсчета профессий
        const tempProfessionScores = {};
        
        // Сначала собираем все профессии из выбранных ответов
        answers.forEach((answerIndices, questionIndex) => {
            answerIndices.forEach(answerIdx => {
                if (answerIdx !== -1) {
                    const profession = testData[questionIndex].options[answerIdx].profession;
                    tempProfessionScores[profession] = (tempProfessionScores[profession] || 0) + 1;
                }
            });
        });
        
        // Сортируем профессии по убыванию баллов
        const sortedProfessions = Object.entries(tempProfessionScores)
            .sort((a, b) => b[1] - a[1]);
        
        if (sortedProfessions.length === 0) {
            // Если есть хоть какие-то ответы, но нет профессий, значит были выбраны неучтенные профессии
            mainResult.innerHTML = `
                <h2>По результатам теста</h2>
                <p>Ваши ответы не соответствуют конкретным IT-профессиям.</p>
                <p>Рекомендуем обратить внимание на общие IT-направления или смежные области.</p>
            `;
            otherResults.innerHTML = "";
        } else {
            // Главный результат (топ-1 профессия)
            const [topProf, topScore] = sortedProfessions[0];
            const maxPossibleScore = testData.length;
            const topPercent = Math.round((topScore / maxPossibleScore) * 100);
            
            mainResult.innerHTML = `
                <h2>Вам необходимо обратить внимание на <span id="topProfession">${topProf}</span></h2>
                <p class="toggle-percentage" onclick="togglePercentage()">Показать процент совпадений</p>
                <p class="percentage-info" style="display: none;">Процент совпадений: ${topPercent}%</p>
            `;
            
            // Другие результаты
            otherResults.innerHTML = '';
            if (sortedProfessions.length > 1) {
                otherResults.innerHTML = '<h3>Другие подходящие профессии:</h3>';
                
                sortedProfessions.slice(1, 6).forEach(([prof, score]) => {
                    const percent = Math.round((score / maxPossibleScore) * 100);
                    
                    const resultElement = document.createElement('div');
                    resultElement.className = 'other-result';
                    resultElement.innerHTML = `
                        <div>
                            <span class="profession-name">${prof}</span>
                            <div class="percentage-bar">
                                <div class="percentage-bar-fill" style="width: ${percent}%"></div>
                            </div>
                        </div>
                        <div class="percentage">${percent}%</div>
                    `;
                    
                    otherResults.appendChild(resultElement);
                });
            }
        }
    }
    
    // Показываем контейнер с результатами и скрываем вопросы
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// Переключение отображения процентов для главного результата
window.togglePercentage = function() {
    const percentageInfo = document.querySelector('.percentage-info');
    const toggleLink = document.querySelector('.toggle-percentage');
    
    if (percentageInfo.style.display === 'none') {
        percentageInfo.style.display = 'block';
        toggleLink.textContent = 'Скрыть процент совпадений';
    } else {
        percentageInfo.style.display = 'none';
        toggleLink.textContent = 'Показать процент совпадений';
    }
}

// Обработчики событий для кнопок
prevBtn.addEventListener('click', function() {
    if (currentQuestionSet > 0) {
        currentQuestionSet--;
        displayQuestionSet(currentQuestionSet);
        updateProgress();
    }
});

nextBtn.addEventListener('click', function() {
    // Проверяем, все ли вопросы в текущем наборе отвечены
    const startIndex = currentQuestionSet * 10;
    const endIndex = Math.min(startIndex + 10, testData.length);
    const allAnswered = answers.slice(startIndex, endIndex).every(a => a.length > 0);
    
    if (!allAnswered) {
        alert('Пожалуйста, ответьте на все вопросы в этом разделе перед продолжением.');
        return;
    }
    
    if (nextBtn.textContent === 'Узнать результат') {
        showResults();
    } else {
        currentQuestionSet++;
        displayQuestionSet(currentQuestionSet);
        updateProgress();
    }
});

restartBtn.addEventListener('click', function() {
    if (confirm('Вы уверены, что хотите начать тест заново? Все ваши ответы будут удалены.')) {
        // Сброс состояния теста
        currentQuestionSet = 0;
        answers = Array(testData.length).fill(null).map(() => []);
        allProfessions.forEach(prof => {
            professionScores[prof] = 0;
        });
        
        // Очищаем сохраненные данные
        localStorage.removeItem('itProfessionTestAnswers');
        
        // Показываем вопросы и скрываем результаты
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        // Перезапускаем тест
        displayQuestionSet(currentQuestionSet);
        updateProgress();
    }
});

// Запускаем тест при загрузке страницы
document.addEventListener('DOMContentLoaded', initTest);
})();